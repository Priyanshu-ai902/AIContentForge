"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  LayoutGrid, 
  Zap, 
  BookOpen, 
  History, 
  Copy, 
  Cpu, 
  TrendingUp,
  Clock,
  ArrowRight,
  Github,
  Globe,
  Database
} from 'lucide-react'

const featuresList = [
  {
    title: 'AI Templates',
    desc: 'Access 30+ highly-tuned writing templates custom built for blogs, social channels, and marketing campaigns.',
    icon: LayoutGrid,
    glow: 'group-hover:border-purple-500/30 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.1)]'
  },
  {
    title: 'Smart Generation',
    desc: 'Leverage deep-context AI drafts powered by state-of-the-art Google Gemini models for human-like outputs.',
    icon: Sparkles,
    glow: 'group-hover:border-cyan-500/30 group-hover:shadow-[0_0_20px_rgba(20,184,166,0.1)]'
  },
  {
    title: 'Workspace Management',
    desc: 'Refine draft outputs in a side-by-side workspace with built-in format options, word counters, and layout modes.',
    icon: Globe,
    glow: 'group-hover:border-indigo-500/30 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.1)]'
  },
  {
    title: 'History Tracking',
    desc: 'Every single content generation is automatically stored, logged, and searchable client-side in real-time.',
    icon: History,
    glow: 'group-hover:border-emerald-500/30 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.1)]'
  },
  {
    title: 'One Click Copy & Export',
    desc: 'Instantly download your completed drafts as text files or copy them to your clipboard with clean success feedback.',
    icon: Copy,
    glow: 'group-hover:border-pink-500/30 group-hover:shadow-[0_0_20px_rgba(236,72,153,0.1)]'
  },
  {
    title: 'Ultra-Low Latency',
    desc: 'Generate thousands of words in under 5 seconds with our high-throughput API caching and direct DB updates.',
    icon: Cpu,
    glow: 'group-hover:border-amber-500/30 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.1)]'
  }
];

const showcaseGrid = [
  {
    image: '/workspace.png',
    title: 'AI Copywriting Canvas',
    desc: 'A focused, dual-panel workspace combining custom prompt guides with a dark rich text output canvas.'
  },
  {
    image: '/dashboard.png',
    title: 'Creator Control Center',
    desc: 'Monitor stats, review credit consumption rates, and search all writing tools from a unified hub.'
  },
  {
    image: '/template.png',
    title: 'Tailored Prompt Library',
    desc: 'Browse dozens of customized templates classified by marketing channels (YouTube, Blogs, Instagram).'
  },
  {
    image: '/history.png',
    title: 'Logs & Generation Archive',
    desc: 'Access your full catalog of outputs with search parameters, word metrics, and batch deletions.'
  }
];

const statsList = [
  { value: '40+ Templates', label: 'Ready-to-use content generation templates' },
  { value: 'Smart Workflows', label: 'Organize and manage content efficiently' },
  { value: 'Content History', label: 'Access previous generations anytime' },
  { value: 'Simple & Fast', label: 'Generate content in just a few clicks' }
];

export default function Home() {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 260, damping: 25 } }
  };

  return (
    <div className="bg-[#07090e] text-slate-100 min-h-screen overflow-x-hidden pt-20">
      
      {/* Background Radial Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[600px] bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/15 via-transparent to-transparent pointer-events-none z-0" />

      {/* SECTION 1 — HERO */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Left Text details */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-full lg:w-[45%] space-y-6 text-left"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/25 text-purple-400 text-xs font-bold w-fit">
              <Sparkles className="h-3.5 w-3.5 fill-purple-400/20 text-purple-400" />
              <span>AI-Powered Content Creation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-100">
              Create Content <br />
              <span className="bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">10x Faster</span> with AI
            </h1>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-lg">
              Generate blogs, social media content, YouTube descriptions, marketing copy, email drafts, headlines, and more from a single, unified creator workspace.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl px-6 h-12 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border-0 text-sm flex items-center gap-1.5 cursor-pointer">
                  Get Started for Free <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="bg-slate-900/50 hover:bg-slate-900 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl px-6 h-12 text-sm">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Right Showcase Browser Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="w-full lg:w-[55%] flex justify-center"
          >
            {/* Mac Browser Frame */}
            <div className="relative w-full max-w-[640px] rounded-2xl bg-slate-900/40 border border-slate-800/80 p-2.5 shadow-2xl shadow-purple-500/5 group">
              {/* Corner outer glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              {/* Browser Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/60 pb-2 mb-2 px-1">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-[10px] text-slate-600 bg-slate-950/60 border border-slate-900 rounded-md py-0.5 px-10 font-mono">
                  content-forge.com/dashboard
                </div>
                <div className="w-10" />
              </div>

              {/* Browser Image */}
              <div className="rounded-xl overflow-hidden border border-slate-950 relative">
                <Image 
                  src="/dashboard.png" 
                  alt="Content-Forge Dashboard Screenshot" 
                  width={900} 
                  height={560}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.01]" 
                />
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* SECTION 2 — FEATURES */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20 border-t border-slate-900">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineered for Fast Iteration
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Content-Forge strips away the complexity of traditional writing suites, letting you generate contextual content instantly.
          </p>
        </div>

        {/* 6 Features Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuresList.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800/60 backdrop-blur-sm hover:bg-slate-900/40 cursor-default transition-all duration-300 group"
              >
                <div className={`p-3 w-fit rounded-xl bg-slate-950 border border-slate-850 text-purple-400 mb-5 transition-all duration-300 ${feature.glow}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-slate-200 mb-2 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

      </section>

      {/* SECTION 3 — PRODUCT SHOWCASE */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20 border-t border-slate-900">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Everything in One Workspace
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Take a deep tour through our premium developer layouts, responsive analytics, and streamlined editor outputs.
          </p>
        </div>

        {/* 2x2 Showcase grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {showcaseGrid.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-5 rounded-2xl bg-slate-900/30 border border-slate-800/60 backdrop-blur-md flex flex-col justify-between group shadow-xl hover:border-purple-500/20 transition-all duration-300"
            >
              {/* Screenshots display inside glass frame */}
              <div className="rounded-xl overflow-hidden border border-slate-950 bg-slate-950 p-1 relative shadow-inner mb-5">
                <Image 
                  src={card.image} 
                  alt={card.title} 
                  width={720} 
                  height={450} 
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
                />
              </div>

              {/* Card Meta Description */}
              <div className="px-2">
                <h3 className="font-bold text-slate-200 text-lg mb-1.5 group-hover:text-purple-300 transition-colors">
                  {card.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </section>

      {/* SECTION 4 — WHY CONTENT-FORGE */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20 border-t border-slate-900">
        
        {/* Title */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-100 tracking-tight">
            Designed for Creators
          </h2>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed">
            Content-Forge provides essential features to streamline draft production without the clutter.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {statsList.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-slate-900/20 border border-slate-800/60 text-center relative overflow-hidden group shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/[0.01] to-cyan-500/[0.01] pointer-events-none" />
              
              {/* Stat title with gradient styling */}
              <motion.h3 
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: idx * 0.5, ease: "easeInOut" }}
                className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 text-transparent bg-clip-text"
              >
                {stat.value}
              </motion.h3>
              
              <p className="text-slate-400 text-xs mt-2 font-normal leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* SECTION 5 — FINAL CTA */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-16 rounded-[24px] bg-gradient-to-br from-[#0e121d]/80 via-slate-900/30 to-[#07090e] border border-slate-800/80 backdrop-blur-md text-center max-w-4xl mx-auto relative overflow-hidden shadow-2xl"
        >
          {/* Subtle overlay glow */}
          <div className="absolute -top-48 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-100">
              Ready to Create Better Content?
            </h2>
            <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              Unlock a full suite of AI generation drafts, format outputs, and history exports in under 30 seconds.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-4 pt-4">
              <Link href="/dashboard">
                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl px-8 h-12 shadow-[0_0_20px_rgba(139,92,246,0.25)] hover:shadow-[0_0_25px_rgba(139,92,246,0.45)] border-0 text-sm cursor-pointer">
                  Get Started Free
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button variant="outline" className="bg-slate-950/50 hover:bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl px-8 h-12 text-sm">
                  View Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SECTION 6 — FOOTER */}
      <footer className="relative z-10 border-t border-slate-900 bg-slate-950/50 backdrop-blur-md py-12 text-slate-400">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-12">
          
          {/* Logo Brand Info */}
          <div className="space-y-4 max-w-xs text-left">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                width={36}
                height={36}
                alt="Content-Forge logo"
                className="rounded-full"
              />
              <span className="font-extrabold text-2xl bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
                Content-Forge
              </span>
            </div>
            <p className="text-xs leading-relaxed text-slate-500">
              The premium creator workspace designed to streamline AI draft creation, edits, and archives in a unified SaaS interface.
            </p>
            <p className="text-[11px] text-slate-600 pt-2">
              © 2026 Content-Forge. All rights reserved.
            </p>
          </div>

          {/* Links structure columns */}
          <div className="flex flex-wrap gap-12 text-left">
            {/* Column 1: Product */}
            <div className="space-y-3 min-w-[100px]">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Product</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><Link href="/dashboard" className="hover:text-slate-300">Features</Link></li>
                <li><Link href="/dashboard" className="hover:text-slate-300">Templates</Link></li>
                <li><Link href="/dashboard/billing" className="hover:text-slate-300">Pricing</Link></li>
              </ul>
            </div>

            {/* Column 2: Resources */}
            <div className="space-y-3 min-w-[100px]">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Resources</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><a href="/dashboard" className="hover:text-slate-300">Documentation</a></li>
                <li><a href="/dashboard" className="hover:text-slate-300">Support</a></li>
              </ul>
            </div>

            {/* Column 3: Company */}
            <div className="space-y-3 min-w-[100px]">
              <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Company</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><a href="/dashboard" className="hover:text-slate-300">About</a></li>
                <li><a href="/dashboard" className="hover:text-slate-300">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Github Social Section */}
          <div className="flex flex-col items-start gap-3">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-wider">Open Source</h4>
            <a 
              href="https://github.com/Priyanshu-ai902/Form-CraftAI" 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-semibold transition-all"
            >
              <Github className="h-4.5 w-4.5" />
              <span>Follow on GitHub</span>
            </a>
          </div>

        </div>
      </footer>

    </div>
  )
}
