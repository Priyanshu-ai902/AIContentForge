"use client";

import { UserProfile } from '@clerk/nextjs';
import React, { useState, useContext } from 'react';
import { TotalUsageContext } from '@/app/(context)/TotalUsageContext';
import { 
  User, 
  CreditCard, 
  Settings as SettingsIcon, 
  ShieldCheck, 
  Sparkles, 
  Save, 
  Bell, 
  HelpCircle,
  FileText
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Settings() {
  const { totalUsage } = useContext(TotalUsageContext);
  const [activeTab, setActiveTab] = useState<'profile' | 'billing' | 'preferences'>('profile');
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Mock preferences state
  const [aiModel, setAiModel] = useState('gemini-flash');
  const [language, setLanguage] = useState('en');
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [weeklyReports, setWeeklyReports] = useState(false);

  const maxCredits = 13000;
  const creditsRemaining = Math.max(maxCredits - Number(totalUsage), 0);

  const tabs = [
    { id: 'profile', name: 'Profile Details', icon: User },
    { id: 'billing', name: 'Billing & Usage', icon: CreditCard },
    { id: 'preferences', name: 'AI Preferences', icon: SettingsIcon },
  ] as const;

  const handleSavePreferences = (e: React.FormEvent) => {
    e.preventDefault();
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  return (
    <div className="w-full space-y-8 text-slate-100">
      
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-purple-400 via-indigo-300 to-cyan-400 text-transparent bg-clip-text">
          Account Settings
        </h1>
        <p className="text-slate-400 text-sm mt-1">Manage your identity, settings preferences, and subscription details.</p>
      </div>

      {/* Premium Settings Glassmorphism Container */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 bg-slate-900/30 border border-slate-800/60 backdrop-blur-md rounded-[20px] shadow-2xl p-6 md:p-8 min-h-[650px] relative overflow-hidden">
        
        {/* Decorative corner glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/[0.02] rounded-full blur-3xl pointer-events-none" />
        
        {/* Left vertical navigation */}
        <div className="space-y-1.5 lg:border-r lg:border-slate-800/40 lg:pr-6 z-10">
          <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider px-3 mb-3">Settings Navigation</p>
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-semibold transition-all duration-200 relative
                ${isActive 
                  ? 'bg-gradient-to-r from-purple-500/10 to-cyan-500/5 text-purple-400 border border-purple-500/20 shadow-md shadow-purple-500/5' 
                  : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/40'}`}
              >
                <Icon className={`h-4.5 w-4.5 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                <span>{tab.name}</span>
                {isActive && (
                  <motion.div 
                    layoutId="settingsActiveIndicator"
                    className="absolute left-0 top-3 bottom-3 w-[2.5px] bg-purple-500 rounded-r-full"
                    transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Center content wrapper */}
        <div className="lg:col-span-3 lg:pl-4 z-10 flex flex-col justify-start min-h-[500px]">
          <AnimatePresence mode="wait">
            
            {/* Tab: Profile (Clerk Integration) */}
            {activeTab === 'profile' && (
              <motion.div
                key="profile-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full flex justify-center lg:justify-start"
              >
                <div className="w-full max-w-2xl bg-slate-950/40 p-6 rounded-2xl border border-slate-800/40 shadow-xl overflow-x-hidden">
                  <UserProfile 
                    routing="hash" 
                    appearance={{
                      variables: {
                        colorPrimary: '#8B5CF6',
                        colorBackground: 'transparent',
                        colorText: '#F8FAFC',
                        colorTextSecondary: '#94A3B8',
                        colorInputBackground: '#030712',
                        colorInputText: '#F8FAFC',
                      },
                      elements: {
                        card: 'bg-transparent border-0 shadow-none p-0 m-0 w-full max-w-full',
                        rootBox: 'w-full max-w-full bg-transparent',
                        navbar: 'hidden', 
                        navbarMobileMenuButton: 'hidden',
                        scrollBox: 'bg-transparent shadow-none w-full max-w-full',
                        pageScrollBox: 'p-0 w-full',
                        contentArea: 'p-0 m-0 w-full max-w-full bg-transparent',
                        profileSection: 'border-b border-slate-800/40 pb-6 mb-6',
                        headerTitle: 'text-slate-100 font-bold text-xl',
                        headerSubtitle: 'text-slate-400 text-xs',
                        formButtonPrimary: 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white rounded-xl border-0 h-10 px-4 text-xs font-semibold shadow-lg shadow-purple-500/20 cursor-pointer',
                        formFieldInput: 'bg-slate-950 border border-slate-850 text-slate-100 rounded-xl focus:border-purple-500/60 focus:ring-purple-500/20 text-sm',
                        formFieldLabel: 'text-slate-300 text-xs font-semibold mb-1',
                        badge: 'bg-purple-500/20 text-purple-400 border border-purple-500/30 rounded-lg text-xs font-medium',
                        accordionTriggerButton: 'text-purple-400 hover:text-purple-300 text-xs font-semibold',
                        identityPreviewText: 'text-slate-200 text-sm',
                        identityPreviewEditButton: 'text-purple-400 hover:text-purple-300 text-xs font-semibold',
                        formButtonReset: 'text-slate-400 hover:text-slate-200 text-xs font-semibold',
                      }
                    }}
                  />
                </div>
              </motion.div>
            )}

            {/* Tab: Billing Summary & Details */}
            {activeTab === 'billing' && (
              <motion.div
                key="billing-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-6 max-w-2xl"
              >
                <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/40 shadow-xl space-y-5">
                  <div className="flex justify-between items-center border-b border-slate-800/60 pb-4">
                    <div>
                      <h3 className="font-bold text-lg text-slate-100">Subscription Status</h3>
                      <p className="text-xs text-slate-400 mt-1">Review your credits and billing limits.</p>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      Free Trial Active
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900">
                      <p className="text-xs text-slate-400">Total Credits Available</p>
                      <h4 className="text-xl font-extrabold text-slate-100 mt-1">{maxCredits.toLocaleString()}</h4>
                    </div>
                    <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-900">
                      <p className="text-xs text-slate-400">Credits Consumed</p>
                      <h4 className="text-xl font-extrabold text-purple-400 mt-1">{Number(totalUsage).toLocaleString()}</h4>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400">Monthly Usage</span>
                      <span className="font-bold text-purple-400">{Math.round((Number(totalUsage) / maxCredits) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-slate-950 rounded-full overflow-hidden border border-slate-900">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                        style={{ width: `${Math.min(Math.round((Number(totalUsage) / maxCredits) * 100), 100)}%` }}
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <a href="/dashboard/billing">
                      <button className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold py-2.5 px-4 rounded-xl transition-all shadow-md shadow-purple-500/10 border-0 flex items-center gap-1.5 cursor-pointer">
                        <CreditCard className="h-3.5 w-3.5" />
                        Go to Billing Dashboard
                      </button>
                    </a>
                  </div>
                </div>

                <div className="bg-slate-950/40 p-6 rounded-2xl border border-slate-800/40 shadow-xl space-y-4">
                  <h3 className="font-bold text-sm text-slate-100 flex items-center gap-2">
                    <FileText className="h-4 w-4 text-slate-400" />
                    Invoice History
                  </h3>
                  <div className="w-full text-xs text-slate-400 text-center py-8">
                    No invoices generated yet. Invoices appear when upgrading to a paid tier.
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab: Preferences */}
            {activeTab === 'preferences' && (
              <motion.div
                key="preferences-tab"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                className="w-full max-w-2xl bg-slate-950/40 p-6 rounded-2xl border border-slate-800/40 shadow-xl"
              >
                <div className="border-b border-slate-800/60 pb-4 mb-6">
                  <h3 className="font-bold text-lg text-slate-100">AI Preferences</h3>
                  <p className="text-xs text-slate-400 mt-1">Configure default settings for content creation models.</p>
                </div>

                <form onSubmit={handleSavePreferences} className="space-y-6">
                  {/* Select AI Model */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Default AI Engine</label>
                    <select
                      value={aiModel}
                      onChange={(e) => setAiModel(e.target.value)}
                      className="w-full p-3 bg-slate-950 border border-slate-800/60 rounded-xl text-slate-200 focus:border-purple-500/60 focus:ring-purple-500/20 focus:outline-none text-xs"
                    >
                      <option value="gemini-flash">Gemini 1.5 Flash (Recommended - Fastest)</option>
                      <option value="gemini-pro">Gemini 1.5 Pro (High Accuracy - Slower)</option>
                      <option value="claude-35">Claude 3.5 Sonnet (Advanced Writing - Premium)</option>
                    </select>
                  </div>

                  {/* Select Language */}
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Output Language</label>
                    <select
                      value={language}
                      onChange={(e) => setLanguage(e.target.value)}
                      className="w-full p-3 bg-slate-950 border border-slate-800/60 rounded-xl text-slate-200 focus:border-purple-500/60 focus:ring-purple-500/20 focus:outline-none text-xs"
                    >
                      <option value="en">English (US/UK)</option>
                      <option value="es">Spanish (Español)</option>
                      <option value="fr">French (Français)</option>
                      <option value="de">German (Deutsch)</option>
                      <option value="ja">Japanese (日本語)</option>
                    </select>
                  </div>

                  {/* Notification switches */}
                  <div className="space-y-4 pt-2">
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider">Email Notifications</label>
                    
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-900/60">
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-slate-200">Weekly usage summaries</p>
                        <p className="text-[10px] text-slate-500">Get report of credits consumed and creations.</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={weeklyReports}
                        onChange={(e) => setWeeklyReports(e.target.checked)}
                        className="h-4 w-4 accent-purple-500 rounded cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950/40 border border-slate-900/60">
                      <div className="space-y-0.5">
                        <p className="text-xs font-semibold text-slate-200">Product & feature updates</p>
                        <p className="text-[10px] text-slate-500">Receive alerts when new templates are released.</p>
                      </div>
                      <input 
                        type="checkbox" 
                        checked={emailNotifications}
                        onChange={(e) => setEmailNotifications(e.target.checked)}
                        className="h-4 w-4 accent-purple-500 rounded cursor-pointer"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-800/40">
                    <span className="text-xs text-green-400 font-medium">
                      {saveSuccess && "Preferences saved successfully!"}
                    </span>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold py-2.5 px-5 rounded-xl transition-all shadow-lg shadow-purple-500/20 border-0 flex items-center gap-1.5 cursor-pointer"
                    >
                      <Save className="h-4 w-4" />
                      Save Preferences
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>

    </div>
  );
}

export default Settings;
