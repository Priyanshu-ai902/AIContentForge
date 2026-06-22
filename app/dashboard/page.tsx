"use client"

import React, { useState, useEffect, useContext } from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/utils/db'
import { AIOutput } from '@/utils/schema'
import { eq, desc } from 'drizzle-orm'
import moment from 'moment'
import Templates from '@/app/(data)/Templates'
import TemplateCard from './_components/TemplateCard'
import { TotalUsageContext } from '../(context)/TotalUsageContext'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Zap, 
  LayoutGrid, 
  TrendingUp, 
  Clock, 
  ArrowRight, 
  ChevronRight,
  Copy, 
  Check, 
  Search,
  BookOpen,
  Award,
  Lightbulb
} from 'lucide-react'

// Define the template interface
interface TEMPLATE {
  name: string
  desc: string
  icon: string
  category: string
  slug: string
  aiprompt: string
  form?: any[]
}

function Dashboard() {
  const { user } = useUser()
  const { totalUsage, setTotalUsage } = useContext(TotalUsageContext)
  
  const [generations, setGenerations] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [userSearchInput, setUserSearchInput] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const maxCredits = 13000
  const creditsRemaining = Math.max(maxCredits - Number(totalUsage), 0)
  const planName = Number(totalUsage) >= maxCredits ? "Free Tier (Limit Reached)" : "Premium Trial"

  useEffect(() => {
    if (user) {
      fetchDashboardData()
    }
  }, [user])

  const fetchDashboardData = async () => {
    const email = user?.primaryEmailAddress?.emailAddress
    if (!email) return

    try {
      setLoading(true)
      // Fetch user's generation history
      const result = await db.select()
        .from(AIOutput)
        .where(eq(AIOutput.createdBy, email))
        .orderBy(desc(AIOutput.id))

      setGenerations(result)

      // Calculate total credits usage (length of responses)
      let total = 0
      result.forEach((item) => {
        total += Number(item.aiResponse?.length || 0)
      })
      setTotalUsage(total)
    } catch (error) {
      console.error("Error fetching dashboard data:", error)
    } finally {
      setLoading(false)
    }
  }

  // Copy to clipboard handler
  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Template details helper
  const getTemplateDetails = (slug: string) => {
    return Templates.find(t => t.slug === slug)
  }

  // Calculate statistics
  const totalGenerations = generations.length
  const creditsUsed = Number(totalUsage)
  const templatesUsed = new Set(generations.map(g => g.templateSlug)).size

  // This month usage
  const currentMonthYear = moment().format('MM/yyyy')
  const thisMonthGenerations = generations.filter(g => g.createdAt && g.createdAt.includes(currentMonthYear))
  const thisMonthUsage = thisMonthGenerations.reduce((sum, item) => sum + Number(item.aiResponse?.length || 0), 0)

  // Popular templates based on usage count (fallback to default templates if empty)
  const getPopularTemplates = () => {
    const counts: { [key: string]: number } = {}
    generations.forEach(g => {
      if (g.templateSlug) {
        counts[g.templateSlug] = (counts[g.templateSlug] || 0) + 1
      }
    })

    const sortedSlugs = Object.keys(counts).sort((a, b) => counts[b] - counts[a])
    const popular = sortedSlugs.slice(0, 3).map(slug => getTemplateDetails(slug)).filter(Boolean) as TEMPLATE[]

    if (popular.length === 0) {
      // Fallback templates
      return Templates.slice(0, 3)
    }
    return popular
  }

  const popularTemplates = getPopularTemplates()
  const latestGeneration = generations[0]

  // Filter templates list based on search
  const filteredTemplates = Templates.filter(template => 
    template.name.toLowerCase().includes(userSearchInput.toLowerCase()) ||
    template.desc.toLowerCase().includes(userSearchInput.toLowerCase()) ||
    template.category.toLowerCase().includes(userSearchInput.toLowerCase())
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
  }

  return (
    <div className="w-full space-y-8 text-slate-100">
      
      {/* Top Banner / Welcome Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-6 mb-8 rounded-[20px] bg-slate-900/30 border border-slate-800/60 backdrop-blur-md relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex items-center gap-4 z-10">
          <div className="h-16 w-16 rounded-full border-2 border-purple-500/30 p-0.5 overflow-hidden bg-slate-950 flex items-center justify-center">
            {user?.imageUrl ? (
              <img src={user.imageUrl} alt="Avatar" className="h-full w-full rounded-full object-cover" />
            ) : (
              <div className="h-full w-full rounded-full bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center font-bold text-white text-xl">
                {user?.firstName?.charAt(0) || 'U'}
              </div>
            )}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Welcome back, <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">{user?.firstName || 'Creator'}</span>!
            </h1>
            <p className="text-slate-400 text-sm mt-1">Here is what's happening with your workspace today.</p>
          </div>
        </div>

        <div className="flex items-center gap-6 z-10 bg-slate-950/40 px-6 py-4 rounded-2xl border border-slate-800/40">
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Current Plan</div>
            <div className="text-sm font-bold text-purple-400 mt-0.5 flex items-center gap-1.5">
              <Award className="h-4 w-4 text-purple-400" />
              {planName}
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800" />
          <div>
            <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Credits Left</div>
            <div className="text-sm font-extrabold text-cyan-400 mt-0.5">
              {creditsRemaining.toLocaleString()}
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4 Stats Cards Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
      >
        {/* Stat 1: Total Generations */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 rounded-[20px] bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-slate-800/50 backdrop-blur-md relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all duration-300" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Total Generations</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-100">
                {loading ? "..." : totalGenerations}
              </h3>
            </div>
            <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20 transition-all">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-green-400 font-medium bg-green-500/10 px-2 py-1 rounded-lg w-fit">
            <TrendingUp className="h-3 w-3" />
            <span>+15% vs last week</span>
          </div>
        </motion.div>

        {/* Stat 2: Credits Used */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 rounded-[20px] bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-slate-800/50 backdrop-blur-md relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all duration-300" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Credits Consumed</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-100">
                {loading ? "..." : creditsUsed.toLocaleString()}
              </h3>
            </div>
            <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Zap className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-cyan-400 font-medium bg-cyan-500/10 px-2 py-1 rounded-lg w-fit">
            <span>{((creditsUsed / maxCredits) * 100).toFixed(0)}% total limit</span>
          </div>
        </motion.div>

        {/* Stat 3: Templates Used */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 rounded-[20px] bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-slate-800/50 backdrop-blur-md relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition-all duration-300" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Templates Used</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-100">
                {loading ? "..." : templatesUsed}
              </h3>
            </div>
            <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <LayoutGrid className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-indigo-400 font-medium bg-indigo-500/10 px-2 py-1 rounded-lg w-fit">
            <span>Active templates</span>
          </div>
        </motion.div>

        {/* Stat 4: This Month Usage */}
        <motion.div 
          variants={itemVariants}
          whileHover={{ y: -4, transition: { duration: 0.2 } }}
          className="p-6 rounded-[20px] bg-gradient-to-br from-slate-900/80 to-slate-900/30 border border-slate-800/50 backdrop-blur-md relative overflow-hidden group shadow-lg"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-all duration-300" />
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">This Month Usage</p>
              <h3 className="text-3xl font-extrabold mt-2 text-slate-100">
                {loading ? "..." : thisMonthUsage.toLocaleString()}
              </h3>
            </div>
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500/20 transition-all">
              <TrendingUp className="h-5 w-5" />
            </div>
          </div>
          <div className="flex items-center gap-1.5 mt-4 text-xs text-emerald-400 font-medium bg-emerald-500/10 px-2 py-1 rounded-lg w-fit">
            <span>{thisMonthGenerations.length} gen this month</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Analytics / Dynamic Section (Below Stats) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        
        {/* Recent Activity Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-6 rounded-[20px] bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400" />
                Recent Activity
              </h3>
              <a href="/dashboard/history" className="text-purple-400 hover:text-purple-300 text-xs font-medium flex items-center gap-1">
                View all <ArrowRight className="h-3 w-3" />
              </a>
            </div>

            <div className="space-y-4">
              {loading ? (
                // Skeleton loading state
                [1, 2, 3].map(i => (
                  <div key={i} className="animate-pulse flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-800 rounded-lg" />
                    <div className="flex-1 space-y-1.5">
                      <div className="h-3 bg-slate-800 rounded w-1/2" />
                      <div className="h-2 bg-slate-800/60 rounded w-1/4" />
                    </div>
                  </div>
                ))
              ) : generations.length === 0 ? (
                <div className="text-center py-8 text-slate-500 text-sm">
                  No generations yet. Create something!
                </div>
              ) : (
                generations.slice(0, 3).map((item, index) => {
                  const details = getTemplateDetails(item.templateSlug)
                  return (
                    <div key={index} className="flex items-center justify-between p-2 rounded-xl hover:bg-slate-950/40 transition-all border border-transparent hover:border-slate-800/30">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 bg-slate-950 p-2 rounded-xl border border-slate-800/80 flex items-center justify-center">
                          {details?.icon ? (
                            <img src={details.icon} alt={details.name} className="w-6 h-6 object-contain" />
                          ) : (
                            <BookOpen className="w-5 h-5 text-slate-500" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-[14px] text-slate-200 line-clamp-1">{details?.name || "AI Output"}</p>
                          <span className="text-[11px] text-slate-500">{item.createdAt}</span>
                        </div>
                      </div>
                      <span className="text-xs px-2.5 py-0.5 rounded-full font-medium bg-slate-800 text-slate-400 border border-slate-800/60">
                        {details?.category || "Text"}
                      </span>
                    </div>
                  )
                })
              )}
            </div>
          </div>
        </motion.div>

        {/* Recent Generated Content Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="p-6 rounded-[20px] bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col justify-between h-[300px]"
        >
          <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-lg text-slate-200 flex items-center gap-2">
                <Lightbulb className="h-4 w-4 text-cyan-400" />
                Latest Output
              </h3>
              {latestGeneration && (
                <button 
                  onClick={() => handleCopy(latestGeneration.aiResponse || '', 'latest')}
                  className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-all"
                  title="Copy output"
                >
                  {copiedId === 'latest' ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
                </button>
              )}
            </div>

            {loading ? (
              <div className="animate-pulse space-y-2 flex-1">
                <div className="h-4 bg-slate-800 rounded w-1/3" />
                <div className="h-3 bg-slate-800/60 rounded w-full" />
                <div className="h-3 bg-slate-800/60 rounded w-5/6" />
                <div className="h-3 bg-slate-800/60 rounded w-4/5" />
              </div>
            ) : !latestGeneration ? (
              <div className="text-center py-12 text-slate-500 text-sm flex-1 flex items-center justify-center">
                Your generated outputs will appear here.
              </div>
            ) : (
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-semibold text-xs text-purple-400 uppercase tracking-wider mb-2">
                    {getTemplateDetails(latestGeneration.templateSlug)?.name || 'Custom Content'}
                  </h4>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-900 max-h-[140px] overflow-y-auto text-sm text-slate-300 leading-relaxed font-mono custom-scrollbar">
                    {latestGeneration.aiResponse}
                  </div>
                </div>
                <div className="text-[11px] text-slate-500 text-right pt-2">
                  Word Count: {latestGeneration.aiResponse?.split(/\s+/).length || 0} words
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Popular Templates Card */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="p-6 rounded-[20px] bg-slate-900/40 border border-slate-800/60 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <h3 className="font-bold text-lg text-slate-200 mb-5 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-indigo-400" />
              Popular Templates
            </h3>

            <div className="space-y-3.5">
              {popularTemplates.map((item, index) => (
                <a 
                  key={index} 
                  href={`/dashboard/content/${item.slug}`}
                  className="flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-950/40 transition-all border border-transparent hover:border-slate-800/40 group/item"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 bg-slate-950 p-2 rounded-xl border border-slate-800 flex items-center justify-center">
                      <img src={item.icon} alt={item.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-[14px] text-slate-200 group-hover/item:text-purple-400 transition-colors">{item.name}</p>
                      <span className="text-[11px] text-slate-500 line-clamp-1">{item.desc}</span>
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-600 group-hover/item:text-purple-400 group-hover/item:translate-x-0.5 transition-all" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Templates Directory Search Bar */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 flex items-center gap-2">
              Explore Templates
            </h2>
            <p className="text-slate-400 text-sm mt-0.5">Select a template to kickstart your next AI generation.</p>
          </div>
          
          {/* Glassmorphism search input */}
          <div className="relative w-full md:w-80 group">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-purple-400 transition-colors" />
            <input 
              type="text" 
              placeholder="Search templates..."
              value={userSearchInput}
              onChange={(e) => setUserSearchInput(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-900/50 hover:bg-slate-900/80 focus:bg-slate-950 border border-slate-800/60 focus:border-purple-500/60 rounded-xl text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-purple-500/20 transition-all duration-300 text-[14px]"
            />
          </div>
        </div>

        {/* Templates Grid Rendered directly inside page for better layout and transitions */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTemplates.map((item, index) => (
            <motion.div 
              key={item.slug} 
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
            >
              <TemplateCard {...item} />
            </motion.div>
          ))}
          {filteredTemplates.length === 0 && (
            <div className="col-span-full py-16 text-center text-slate-500">
              <p className="text-lg">No templates match "{userSearchInput}"</p>
              <p className="text-sm mt-1 text-slate-600">Try searching for other keywords like blog, video, social, etc.</p>
            </div>
          )}
        </motion.div>
      </div>

    </div>
  )
}

export default Dashboard
