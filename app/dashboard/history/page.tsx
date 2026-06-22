"use client"

import React, { useState, useEffect, useContext } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { eq, desc } from 'drizzle-orm';
import { Button } from '@/components/ui/button'; 
import Templates from '@/app/(data)/Templates';
import { UpdateCreditUsageContext } from '@/app/(context)/UpdateCreditUsageContext';
import { useUser } from '@clerk/nextjs';
import moment from 'moment';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Copy, 
  Trash2, 
  Calendar, 
  FileText, 
  Clock, 
  Sparkles, 
  BookOpen, 
  Check, 
  Layers
} from 'lucide-react';

interface HistoryItem {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string;
  createdBy: string;
  createdAt: string | null;
}

function HistoryPage() {
    const { user } = useUser();
    const { setUpdateCreditUsage } = useContext(UpdateCreditUsageContext);
    
    const [historyList, setHistoryList] = useState<HistoryItem[]>([]);
    const [filteredHistory, setFilteredHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState('');
    const [activeFilter, setActiveFilter] = useState<'all' | 'today' | '7days' | '30days'>('all');
    const [copiedId, setCopiedId] = useState<number | null>(null);

    useEffect(() => {
        if (user) {
            fetchHistory();
        }
    }, [user]);

    const fetchHistory = async () => {
        const email = user?.primaryEmailAddress?.emailAddress;
        if (!email) return;

        try {
            setLoading(true);
            const result = await db.select()
                .from(AIOutput)
                .where(eq(AIOutput.createdBy, email))
                .orderBy(desc(AIOutput.id));
            
            setHistoryList(result as HistoryItem[]);
            setFilteredHistory(result as HistoryItem[]);
        } catch (error) {
            console.error("Error fetching history:", error);
        } finally {
            setLoading(false);
        }
    };

    // Filter logic
    useEffect(() => {
        let list = [...historyList];

        // Search text filter
        if (searchText.trim() !== '') {
            list = list.filter(item => {
                const template = getTemplateDetails(item.templateSlug);
                const templateName = template?.name || '';
                const response = item.aiResponse || '';
                return templateName.toLowerCase().includes(searchText.toLowerCase()) || 
                       response.toLowerCase().includes(searchText.toLowerCase());
            });
        }

        // Time filter
        if (activeFilter !== 'all') {
            const now = moment();
            list = list.filter(item => {
                if (!item.createdAt) return false;
                const itemDate = moment(item.createdAt, 'DD/MM/yyyy');
                if (activeFilter === 'today') {
                    return now.isSame(itemDate, 'day');
                } else if (activeFilter === '7days') {
                    return now.diff(itemDate, 'days') <= 7;
                } else if (activeFilter === '30days') {
                    return now.diff(itemDate, 'days') <= 30;
                }
                return true;
            });
        }

        setFilteredHistory(list);
    }, [searchText, activeFilter, historyList]);

    const getTemplateDetails = (slug: string) => {
        return Templates.find(template => template.slug === slug);
    };

    const getWordCount = (text: string | null) => {
        if (!text) return 0;
        return text.trim().split(/\s+/).filter(Boolean).length;
    };

    // Copy action
    const handleCopy = (text: string | null, id: number) => {
        if (!text) return;
        navigator.clipboard.writeText(text);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    // Delete action
    const handleDelete = async (id: number) => {
        if (window.confirm("Are you sure you want to delete this entry? This action cannot be undone.")) {
            try {
                await db.delete(AIOutput).where(eq(AIOutput.id, id));
                setHistoryList(prev => prev.filter(item => item.id !== id));
                
                // Trigger sidebar usage track refetch
                if (setUpdateCreditUsage) {
                    setUpdateCreditUsage(Date.now());
                }
            } catch (error) {
                console.error("Error deleting entry:", error);
            }
        }
    };

    // Analytics calculations
    const totalGenerations = filteredHistory.length;
    const totalWords = filteredHistory.reduce((sum, item) => sum + getWordCount(item.aiResponse), 0);
    const creditsConsumed = filteredHistory.reduce((sum, item) => sum + Number(item.aiResponse?.length || 0), 0);
    const avgResponseLength = totalGenerations > 0 ? Math.round(totalWords / totalGenerations) : 0;

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.05 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 25 } },
        exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } }
    };

    return (
        <div className="w-full space-y-8 text-slate-100">
            {/* Header section */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
                        History & Analytics
                    </h1>
                    <p className="text-slate-400 text-sm mt-1">Review, copy, or manage your previously generated content.</p>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                {/* Stat 1: Total Generations */}
                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/5 rounded-full blur-xl" />
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Total Runs</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                        {loading ? "..." : totalGenerations}
                    </h3>
                    <div className="text-[10px] text-purple-400 font-medium mt-1">Filtered creations</div>
                </div>

                {/* Stat 2: Total Words */}
                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/5 rounded-full blur-xl" />
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Words Generated</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                        {loading ? "..." : totalWords.toLocaleString()}
                    </h3>
                    <div className="text-[10px] text-cyan-400 font-medium mt-1">Generated words</div>
                </div>

                {/* Stat 3: Credits Consumed */}
                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-indigo-500/5 rounded-full blur-xl" />
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Credits Used</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                        {loading ? "..." : creditsConsumed.toLocaleString()}
                    </h3>
                    <div className="text-[10px] text-indigo-400 font-medium mt-1">Characters processed</div>
                </div>

                {/* Stat 4: Avg Word Length */}
                <div className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-16 h-16 bg-emerald-500/5 rounded-full blur-xl" />
                    <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Avg. Resp. Length</p>
                    <h3 className="text-2xl md:text-3xl font-extrabold text-slate-200 mt-2">
                        {loading ? "..." : `${avgResponseLength} w`}
                    </h3>
                    <div className="text-[10px] text-emerald-400 font-medium mt-1">Words per generation</div>
                </div>
            </div>

            {/* Filter and Search Bar Container */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8 bg-slate-900/20 p-4 rounded-2xl border border-slate-800/40 backdrop-blur-sm">
                
                {/* Filter chips */}
                <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                    {(['all', 'today', '7days', '30days'] as const).map((filter) => {
                        const labels = { all: 'All Time', today: 'Today', '7days': 'Last 7 Days', '30days': 'Last 30 Days' };
                        const isActive = activeFilter === filter;
                        return (
                            <button
                                key={filter}
                                onClick={() => setActiveFilter(filter)}
                                className={`px-4 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border
                                ${isActive 
                                    ? 'bg-purple-600 border-purple-500 text-white shadow-lg shadow-purple-500/20' 
                                    : 'bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-400 hover:text-slate-200'}`}
                            >
                                {labels[filter]}
                            </button>
                        );
                    })}
                </div>

                {/* Search bar */}
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input 
                        type="text" 
                        placeholder="Search history content..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-slate-900/50 hover:bg-slate-900/80 focus:bg-slate-950 border border-slate-800/60 focus:border-purple-500/60 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 text-xs"
                    />
                </div>

            </div>

            {/* History Cards Grid */}
            {loading ? (
                // Skeleton cards list
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[1, 2, 4].map(i => (
                        <div key={i} className="animate-pulse bg-slate-900/30 border border-slate-800/40 rounded-2xl h-48 p-6" />
                    ))}
                </div>
            ) : filteredHistory.length === 0 ? (
                <div className="text-center py-20 text-slate-500 bg-slate-900/10 rounded-2xl border border-slate-900/40">
                    <Layers className="h-10 w-10 text-slate-700 mx-auto mb-3" />
                    <p className="text-base font-bold text-slate-400">No items found</p>
                    <p className="text-xs text-slate-600 mt-1">Try resetting the filter chips or search query.</p>
                </div>
            ) : (
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                    className="grid grid-cols-1 md:grid-cols-2 gap-5"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredHistory.map((entry) => {
                            const wordCount = getWordCount(entry.aiResponse);
                            const templateDetails = getTemplateDetails(entry.templateSlug);
                            
                            return (
                                <motion.div
                                    key={entry.id}
                                    variants={cardVariants}
                                    layout
                                    exit="exit"
                                    whileHover={{ y: -4, scale: 1.01 }}
                                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                                    className="p-6 shadow-xl rounded-[20px] bg-slate-900/40 hover:bg-slate-900/60 border border-slate-800/60 hover:border-purple-500/30 text-slate-200 flex flex-col justify-between gap-5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(139,92,246,0.1)] group relative overflow-hidden"
                                >
                                    {/* Subtle hover gradient glow */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.01] to-cyan-500/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div>
                                        {/* Card Header info */}
                                        <div className="flex items-start justify-between gap-4 mb-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 bg-slate-950 p-2 rounded-xl border border-slate-800 flex items-center justify-center">
                                                    {templateDetails?.icon ? (
                                                        <img src={templateDetails.icon} alt={templateDetails.name} className="w-6 h-6 object-contain" />
                                                    ) : (
                                                        <BookOpen className="w-5 h-5 text-slate-500" />
                                                    )}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-[15px] text-slate-100 group-hover:text-purple-300 transition-colors">{templateDetails?.name || 'Custom Content'}</h3>
                                                    <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400/90">{templateDetails?.category || 'General'}</span>
                                                </div>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-950/40 px-3 py-1.5 rounded-lg border border-slate-800/40">
                                                <Calendar className="h-3.5 w-3.5" />
                                                <span>{entry.createdAt}</span>
                                            </div>
                                        </div>

                                        {/* Preview Snippet */}
                                        <div className="p-3 rounded-xl bg-slate-950/70 border border-slate-900/60 font-mono text-xs text-slate-300 leading-relaxed max-h-[96px] overflow-y-auto custom-scrollbar">
                                            {entry.aiResponse}
                                        </div>
                                    </div>

                                    {/* Card Footer Actions */}
                                    <div className="flex items-center justify-between border-t border-slate-800/40 pt-4 mt-2">
                                        <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-950/30 px-2.5 py-1.5 rounded-lg border border-slate-900/40">
                                            <FileText className="h-3.5 w-3.5 text-cyan-400" />
                                            <span>{wordCount} words</span>
                                            <span className="text-slate-600 font-bold">•</span>
                                            <span>{(entry.aiResponse?.length || 0).toLocaleString()} char</span>
                                        </div>

                                        <div className="flex gap-2">
                                            {/* Copy Button */}
                                            <Button
                                                onClick={() => handleCopy(entry.aiResponse, entry.id)}
                                                className="bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800 hover:border-slate-700 flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold h-8"
                                            >
                                                {copiedId === entry.id ? (
                                                    <>
                                                        <Check className="h-3.5 w-3.5 text-green-400" />
                                                        <span className="text-green-400">Copied</span>
                                                    </>
                                                ) : (
                                                    <>
                                                        <Copy className="h-3.5 w-3.5" />
                                                        <span>Copy</span>
                                                    </>
                                                )}
                                            </Button>

                                            {/* Delete Button */}
                                            <Button
                                                onClick={() => handleDelete(entry.id)}
                                                className="bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 border border-red-500/20 hover:border-red-500/40 flex items-center justify-center p-2 rounded-xl h-8 w-8 transition-colors"
                                                title="Delete entry"
                                            >
                                                <Trash2 className="h-3.5 w-3.5" />
                                            </Button>
                                        </div>
                                    </div>

                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            )}
        </div>
    );
}

export default HistoryPage;