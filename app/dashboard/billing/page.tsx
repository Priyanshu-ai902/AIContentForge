"use client";

import React, { useContext, useState } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  Check, 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Clock, 
  Lock, 
  ArrowRight, 
  TrendingUp
} from 'lucide-react';

const freeFeatures = [
  '13,000 monthly generation credits',
  'Access to 30+ AI writing templates',
  'Standard response generation speed',
  'Basic content export (copy-paste)',
  'Community forum access'
];

const premiumFeatures = [
  'Unlimited generation credits',
  '10x faster response speeds (Ultra-low latency)',
  'Access to all premium & custom AI templates',
  'Advanced AI rewriting & article expanders',
  'One-click format exports (JSON, Markdown)',
  'Priority 24/7 customer support assistance',
  'Early access to new feature releases'
];



export default function BillingPage() {
  const { totalUsage } = useContext(TotalUsageContext);
  const maxCredits = 13000;
  const creditsRemaining = Math.max(maxCredits - Number(totalUsage), 0);
  const usagePercentage = Math.min(Math.round((Number(totalUsage) / maxCredits) * 100), 100);
  


  return (
    <div className="w-full space-y-8 text-slate-100">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
          Billing & Subscriptions
        </h1>
        <p className="text-slate-400 text-sm mt-1">Manage your subscription plans, credits usage, and payment methods.</p>
      </div>

      {/* Current Plan Status Card */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 md:p-8 rounded-[20px] bg-slate-900/30 border border-slate-800/60 backdrop-blur-md mb-12 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center relative z-10">
          
          <div className="space-y-2">
            <span className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
              Active Plan
            </span>
            <h2 className="text-2xl font-bold mt-2">Free Trial Membership</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              You are currently using our free trial tier. Upgrade below to unlock unlimited generations.
            </p>
          </div>

          <div className="space-y-3 md:col-span-2 bg-slate-950/40 p-6 rounded-2xl border border-slate-800/40">
            <div className="flex justify-between items-center text-sm">
              <span className="text-slate-400 flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-purple-400" />
                Credits Consumed
              </span>
              <span className="font-extrabold text-cyan-400">{usagePercentage}% ({Number(totalUsage).toLocaleString()} / {maxCredits.toLocaleString()} Credits)</span>
            </div>

            {/* Credit Progress Bar */}
            <div className="h-3 bg-slate-950 w-full rounded-full overflow-hidden border border-slate-900">
              <motion.div
                className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${usagePercentage}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-1">
              <span className="text-xs text-slate-400">
                Credits Remaining: <strong className="text-slate-200">{creditsRemaining.toLocaleString()}</strong>
              </span>
              <span className="text-xs text-slate-500">
                Renews automatically next month
              </span>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Pricing Options Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-100">Upgrade to Premium</h2>
        <p className="text-slate-400 text-sm mt-2 max-w-lg mx-auto">
          Scale your content generation with infinite credits, ultra-high speed outputs, and VIP developer assistance.
        </p>
      </div>

      {/* Two Pricing Cards Side-by-Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
        
        {/* Free Plan Card */}
        <motion.div 
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="p-8 rounded-[20px] bg-slate-900/20 border border-slate-800/50 backdrop-blur-md flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-bold text-slate-100">Free Tier</h3>
            <p className="text-xs text-slate-400 mt-2">Excellent for testing out the core capabilities.</p>
            
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-100">$0</span>
              <span className="text-xs text-slate-400 ml-1">/ month</span>
            </div>

            <div className="w-full h-px bg-slate-800/40 my-6" />

            <ul className="space-y-3.5 text-xs text-slate-300">
              {freeFeatures.map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-slate-500 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700/60 rounded-xl h-11 text-sm font-semibold cursor-default">
            Current Active Plan
          </Button>
        </motion.div>

        {/* Premium Plan Card (Highlighted) */}
        <motion.div 
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="p-8 rounded-[20px] bg-gradient-to-b from-purple-950/20 to-slate-900/40 border-2 border-purple-500 text-slate-200 flex flex-col justify-between relative shadow-2xl shadow-purple-500/5"
        >
          {/* Most Popular Badge */}
          <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-extrabold text-[10px] uppercase tracking-wider shadow-lg shadow-purple-500/20">
            Most Popular
          </span>

          <div>
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-300 text-transparent bg-clip-text">Premium Creator</h3>
              <Sparkles className="h-5 w-5 text-purple-400 fill-purple-400/20" />
            </div>
            <p className="text-xs text-slate-400 mt-2">Unlimited power for professional content creators.</p>
            
            <div className="my-6">
              <span className="text-4xl font-extrabold text-slate-100">$9.99</span>
              <span className="text-xs text-slate-400 ml-1">/ month</span>
            </div>

            <div className="w-full h-px bg-purple-500/20 my-6" />

            <ul className="space-y-3.5 text-xs text-slate-200">
              {premiumFeatures.map((feat, i) => (
                <li key={i} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 text-purple-400 flex-shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <Button className="w-full mt-8 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold rounded-xl h-11 text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_25px_rgba(139,92,246,0.5)] border-0">
            Upgrade to Premium <ArrowRight className="h-4 w-4 ml-1.5" />
          </Button>
        </motion.div>

      </div>

     


    </div>
  );
}
