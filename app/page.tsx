'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Search, Bell, Clock, FileText, Banknote, 
  Megaphone, UserCircle, ChevronRight 
} from 'lucide-react';

export default function EnterpriseHub() {
  const currentUser = { name: 'Pavan Kumar', role: 'Managing Director', initials: 'PK' };
  
  // Custom branded apps
  const enterpriseApps = [
    { shortName: 'CHAT', url: 'https://chat.jyanipur.com' },
    { shortName: 'ERP', url: 'https://erp.jyanipur.com' },
    { shortName: 'MAIL', url: 'https://mail.jyanipur.com' },
    { shortName: 'CAD', url: 'https://cad.jyanipur.com' },
    { shortName: 'HR', url: 'https://hr.jyanipur.com' },
    { shortName: 'IT', url: 'https://help.jyanipur.com' },
  ];

  // Quick Action Links (T&E, Payslips)
  const quickActions = [
    { icon: Clock, name: 'Time & Expense (T&E)' },
    { icon: Banknote, name: 'Payslips & Tax Forms' },
    { icon: FileText, name: 'Leave Requests' },
    { icon: UserCircle, name: 'Employee Directory' },
  ];

  // News Feed
  const updates = [
    { date: 'Oct 26', title: 'Q3 Townhall Meeting Scheduled for Friday', tag: 'Notice' },
    { date: 'Oct 24', title: 'New T&E Submission Guidelines for Site Visits', tag: 'Finance' },
    { date: 'Oct 22', title: 'Diwali Bonus & October Payslips Generated', tag: 'HR' },
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-900 selection:bg-[#B35900]/20">
      
      {/* --- MODERN TOP NAV --- */}
      <header className="h-16 bg-white border-b border-slate-200 px-6 sm:px-10 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-3">
          {/* YOUR ACTUAL LOGO IS BACK */}
          <div className="w-8 h-8 relative flex items-center justify-center">
            <Image src="/logo.png" alt="Jyanipur Logo" fill className="object-contain" priority />
          </div>
          <span className="font-extrabold text-xl tracking-[0.2em] uppercase text-slate-900 mt-1">Jyanipur</span>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="relative text-slate-400 hover:text-[#B35900] transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
          </button>
          <div className="h-5 w-[1px] bg-slate-200 hidden sm:block"></div>
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-slate-900 leading-tight">{currentUser.name}</p>
              <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{currentUser.role}</p>
            </div>
            <div className="w-9 h-9 rounded-full bg-[#B35900] text-white border-2 border-white font-bold flex items-center justify-center text-sm shadow-sm ring-1 ring-slate-100">
              {currentUser.initials}
            </div>
          </div>
        </div>
      </header>

      {/* --- MAIN HUB CONTENT --- */}
      <main className="max-w-[1200px] mx-auto pt-12 pb-24 px-6">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-8">
            Good evening, Pavan.
          </h1>
          
          {/* Universal Search Bar */}
          <div className="w-full max-w-2xl mx-auto relative group">
            <Search className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#B35900] transition-colors" />
            <input 
              type="text" 
              placeholder="Search for apps, T&E sheets, people, or resources..." 
              className="w-full pl-14 pr-6 py-4 bg-white hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#B35900]/50 rounded-full text-base outline-none transition-all shadow-sm focus:shadow-md"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Left Column (Apps & Quick Actions) */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Quick Actions (T&E, Payslips) */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">HR & Finance</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {quickActions.map((action) => (
                  <button key={action.name} className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-xl hover:border-[#B35900]/40 hover:shadow-sm transition-all group">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-50 text-slate-600 group-hover:bg-[#B35900]/10 group-hover:text-[#B35900] transition-colors">
                        <action.icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900">{action.name}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#B35900] transition-colors" />
                  </button>
                ))}
              </div>
            </div>

            {/* Core Enterprise Apps (Teak Pills) */}
            <div>
              <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Workspace Launchpad</h2>
              <div className="flex flex-wrap gap-4">
                {enterpriseApps.map((app) => (
                  <a 
                    key={app.shortName} 
                    href={app.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#B35900] hover:bg-[#8C4600] px-7 py-3 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex-1 sm:flex-none min-w-[160px]"
                  >
                    {/* Note: Ensure logo.png is in your public folder! */}
                    <div className="w-5 h-5 relative flex items-center justify-center">
                      <Image src="/logo.png" alt={`${app.shortName} Logo`} fill className="object-contain brightness-0 invert" />
                    </div>
                    <span className="text-white text-lg font-bold tracking-widest uppercase mt-0.5">
                      {app.shortName}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column (News Pulse) */}
          <div className="lg:col-span-1">
            <h2 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Company Pulse</h2>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <Megaphone className="w-5 h-5 text-[#B35900]" />
                <h3 className="font-bold text-slate-800">Latest Updates</h3>
              </div>
              <div className="space-y-5">
                {updates.map((update, i) => (
                  <div key={i} className="group cursor-pointer border-b border-slate-100 last:border-0 pb-4 last:pb-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[9px] font-bold text-[#B35900] bg-[#B35900]/10 px-2 py-0.5 rounded uppercase tracking-wider">{update.tag}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{update.date}</span>
                    </div>
                    <p className="text-sm font-semibold text-slate-700 group-hover:text-[#B35900] transition-colors leading-relaxed">
                      {update.title}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-4 py-2 bg-slate-50 hover:bg-slate-100 text-slate-600 text-xs font-bold rounded-lg transition-colors border border-slate-200">
                View All Announcements
              </button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}