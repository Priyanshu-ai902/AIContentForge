"use client"

import React, { useState, useEffect } from 'react'
import { TEMPLATE } from '../../_components/TemplateListSection'
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { LoaderCircleIcon, Zap, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface PROPS {
    selectedTemplate?: TEMPLATE;
    userFormInput: any,
    loading: boolean
}

const suggestionsMap: { [key: string]: string[] } = {
  'generate-blog-content': [
    'Next.js 14 Server Actions',
    'Sustainable Web Design Guide',
  ],
  'generate-blog-topic-ideas': [
    'AI Marketing Trends 2026',
    'Remote Work Ergonomics Guide',
  ],
  'generate-youtube-seo-title': [
    'SaaS Launch Secrets',
    'Dark Mode Tailwind Design',
  ],
  'generate-instagram-post': [
    'Productivity Hacks for Devs',
    'AI Coding Assistants',
  ],
  'generate-linkedin-post': [
    'Building in Public Journey',
    'Why Typography Matters in UI',
  ]
};

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
    const [formData, setFormData] = useState<any>({});

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const onSubmit = (e: any) => {
        e.preventDefault();
        userFormInput(formData);
    }

    const handleSuggestionClick = (suggestion: string) => {
        const firstField = selectedTemplate?.form?.[0];
        if (firstField) {
            setFormData({
                ...formData,
                [firstField.name]: suggestion
            });
        }
    };

    const suggestions = selectedTemplate ? suggestionsMap[selectedTemplate.slug] : undefined;

    return (
        <div className='p-6 md:p-8 rounded-[24px] bg-slate-900/40 backdrop-blur-md border border-slate-800/60 shadow-2xl relative overflow-hidden group hover:border-purple-500/30 transition-all duration-300'>
            
            {/* Subtle background card gradient glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.01] to-cyan-500/[0.01] pointer-events-none" />

            <form onSubmit={onSubmit} className="space-y-6 relative z-10">
                
                {/* Form fields loop */}
                <div className="space-y-5">
                    {selectedTemplate?.form?.map((item, index) => (
                        <div key={index} className='flex flex-col gap-2'>
                            <label className='text-xs font-bold text-slate-300 uppercase tracking-wider'>{item.label}</label>
                            
                            {item.field === 'input' ? (
                                <Input 
                                    name={item.name} 
                                    required={item?.required}
                                    value={formData[item.name] || ''}
                                    onChange={handleInputChange} 
                                    placeholder="Enter topic..."
                                    className="bg-slate-950/60 border-slate-850 hover:border-slate-700 focus:border-purple-500/60 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-purple-500/10 text-sm h-11 transition-all"
                                />
                            ) : item.field === 'textarea' ? (
                                <Textarea 
                                    name={item.name} 
                                    required={item?.required}
                                    value={formData[item.name] || ''}
                                    onChange={handleInputChange} 
                                    placeholder="Enter outlines or instructions..."
                                    rows={4}
                                    className="bg-slate-950/60 border-slate-850 hover:border-slate-700 focus:border-purple-500/60 rounded-xl text-slate-200 placeholder-slate-600 focus:outline-none focus:ring-purple-500/10 text-sm transition-all"
                                />
                            ) : null}
                        </div>
                    ))}
                </div>

                {/* Helper text */}
                <p className="text-[11px] text-slate-500 italic">
                    💡 Describe the topic or audience in detail for better results.
                </p>

                {/* Clickable Prompt Suggestions */}
                {suggestions && suggestions.length > 0 && (
                    <div className="space-y-2 pt-1">
                        <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-purple-400" />
                            Prompt Suggestions
                        </label>
                        <div className="flex flex-wrap gap-2">
                            {suggestions.map((suggestion, idx) => (
                                <button
                                    key={idx}
                                    type="button"
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    className="text-[11px] px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-purple-500/10 text-slate-400 hover:text-purple-300 border border-slate-850 hover:border-purple-500/30 transition-all text-left"
                                >
                                    {suggestion}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Submitting button */}
                <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                >
                    <Button 
                        type='submit' 
                        disabled={loading}
                        className='w-full h-[52px] bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] border-0 flex items-center justify-center gap-2 cursor-pointer'
                    >
                        {loading ? (
                            <>
                                <LoaderCircleIcon className='animate-spin h-5 w-5 text-white' />
                                <span>Generating content...</span>
                            </>
                        ) : (
                            <>
                                <span>Generate Draft</span>
                                <Zap className="h-4.5 w-4.5 fill-white text-white" />
                            </>
                        )}
                    </Button>
                </motion.div>

            </form>
        </div>
    )
}

export default FormSection
