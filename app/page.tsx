'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, LayoutGrid, MessageSquare, CreditCard, Mail, 
  HardDrive, Users, LifeBuoy, Clock, FileText, Banknote, 
  Megaphone, ChevronRight, BookOpen, UserCircle, Bell
} from 'lucide-react';

export default function EnterpriseDashboard() {
  const currentUser = { name: 'Pavan Kumar', role: 'Managing Director', initials: 'PK' };
  
  // Core Apps (The big pills in the center)
  const enterpriseApps = [
    { name: 'CHAT', url: 'https://chat.jyanipur.com', icon: MessageSquare },
    { name: 'ERP', url: 'https://erp.jyanipur.com', icon: CreditCard },
    { name: 'MAIL', url: 'https://mail.jyanipur.com', icon: Mail },
    { name: 'CAD', url: 'https://cad.jyanipur.com', icon: HardDrive },
    { name: 'HR', url: 'https://hr.jyanipur.com', icon: Users },
    { name: 'IT', url: 'https://help.jyanipur.com', icon: LifeBuoy },
  ];

  // News & Updates Feed
  const updates = [
    { date: 'Oct 26', title: 'Q3 Townhall Meeting Scheduled for Friday', category: 'Announcement' },
    { date: 'Oct 24', title: 'New T&E Submission Guidelines for Site Visits', category: 'Finance' },
    { date: 'Oct 22', title: 'Diwali Bonus & October Payslips Generated', category: 'HR' },
  ];

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-sans text-slate-900 overflow-hidden selection:bg-[#B35900]/20">
      
      {/* --- ENTERPRISE SIDEBAR --- */}
      <aside className="w-[280px] bg-white border-r border-slate-200 flex-shrink-0 flex flex-col relative z-20 shadow-sm">
        
        {/* Brand Header */}
        <div className="h-20 px-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 rounded bg-[#B35900] flex items-center justify-center">
            <LayoutGrid className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-xl tracking-[0.2em] uppercase text-slate-900 mt-1">Jyanipur</span>
        </div>

        <div className="flex-1 py-6 px-4 space-y-6 overflow-y-auto custom-scrollbar">
          
          {/* Section: Employee Self Service */}
          <div>
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">My HR & Finance</p>
            <div className="space-y-1">
              <SidebarLink icon={<Clock className="w-4 h-4" />} text="Time & Expense (T&E)" />
              <SidebarLink icon={<Banknote className="w-4 h-4" />} text="Payslips & Tax Forms" />
              <SidebarLink icon={<FileText className="w-4 h-4" />} text="Leave Requests" />
              <SidebarLink icon={<UserCircle className="w-4 h-4" />} text="Employee Directory" />
            </div>
          </div>

          {/* Section: Core Systems */}
          <div>
            <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-2">Core Systems</p>
            <div className="space-y-1">
              <SidebarLink icon={<CreditCard className="w-4 h-4" />} text="Jyanipur ERP Portal" />
              <SidebarLink icon={<HardDrive className="w-4 h-4" />} text="CAD Document Vault" />
              <SidebarLink icon={<BookOpen className="w-4 h-4" />} text="Company Policies" />
              <SidebarLink icon={<LifeBuoy className="w-4 h-4" />} text="IT Service Desk" />
            </div>
          </div>
          
          {/* Section: Company News Widget directly in Sidebar */}
          <div className="mt-8 bg-slate-50 border border-slate-100 rounded-xl p-4">
            <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Megaphone className="w-4 h-4 text-[#B35900]" /> Latest Updates
            </h3>
            <div className="space-y-3">
              {updates.map((update, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] font-bold text-[#B35900] bg-[#B35900]/10 px-1.5 py-0.5 rounded uppercase tracking-wider">{update.category}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{update.date}</span>
                  </div>
                  <p className="text-xs font-semibold text-slate-700 group-hover:text-[#B35900] transition-colors leading-relaxed">
                    {update.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </aside>

      {/* --- MAIN WORKSPACE --- */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-slate-50/50">
        
        {/* Top Header */}
        <header className="h-20 px-8 flex items-center justify-end w-full border-b border-slate-200 bg-white">
          <div className="flex items-center gap-5">
            <button className="relative p-2 text-slate-400 hover:text-slate-600 transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1.5 w-2 h-2 bg-rose-500 rounded-full border border-white"></span>
            </button>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-sm font-bold text-slate-900">{currentUser.name}</p>
                <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">{currentUser.role}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-100 text-[#B35900] border border-slate-200 font-bold flex items-center justify-center text-sm shadow-sm">
                {currentUser.initials}
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto pt-16 sm:pt-24 px-8 flex flex-col items-center">
          
          <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-8 tracking-tight">
            Good evening, Pavan.
          </h1>
          
          {/* Universal Search Bar */}
          <div className="w-full max-w-2xl relative mb-16">
            <Search className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search apps, employees, documents, or policies..." 
              className="w-full pl-14 pr-6 py-4 bg-white hover:bg-slate-50 focus:bg-white border border-slate-200 focus:border-[#B35900]/50 rounded-full text-base outline-none transition-all shadow-sm focus:shadow-md"
            />
          </div>

          {/* Quick Launch Pills */}
          <div className="w-full max-w-3xl">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6 text-center">Quick Launch</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {enterpriseApps.map((app) => (
                <a 
                  key={app.name} 
                  href={app.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-[#B35900] hover:bg-[#8C4600] px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer w-44"
                >
                  <app.icon className="w-5 h-5 text-white/90 group-hover:text-white transition-colors" />
                  <span className="text-white text-base font-bold tracking-widest uppercase mt-0.5">
                    {app.name}
                  </span>
                </a>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

// Helper component for clean sidebar links
function SidebarLink({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-2.5 text-slate-600 hover:bg-[#B35900]/10 hover:text-[#B35900] rounded-lg font-medium text-sm transition-colors group">
      <div className="flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>
      <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
    </button>
  );
}