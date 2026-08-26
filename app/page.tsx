'use client';

import React, { useState, useEffect } from 'react';
import { MessageSquare, CreditCard, Mail, HardDrive, Users, LifeBuoy, ExternalLink, Grid3X3, ArrowUpRight } from 'lucide-react';

export default function AppLaunchpad() {
  const currentUser = { name: 'Pavan Kumar', role: 'Managing Director' };
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  // Initialize time on client to avoid hydration mismatch
  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    if (!currentTime) return 'Welcome,';
    const hour = currentTime.getHours();
    if (hour < 12) return 'Good morning,';
    if (hour < 18) return 'Good afternoon,';
    return 'Good evening,';
  };

  const enterpriseApps = [
    { 
      name: 'Jyanipur CHAT', 
      url: 'https://chat.jyanipur.com', 
      icon: MessageSquare, 
      desc: 'Real-time team communication, calls, and site updates.', 
      hoverColor: 'group-hover:bg-blue-600',
      iconColor: 'text-blue-600 group-hover:text-white',
      bgLight: 'bg-blue-50'
    },
    { 
      name: 'Jyanipur ERP', 
      url: 'https://erp.jyanipur.com', 
      icon: CreditCard, 
      desc: 'Financial ledger, Vendor Billing, and Purchase Orders.', 
      hoverColor: 'group-hover:bg-[#B35900]',
      iconColor: 'text-[#B35900] group-hover:text-white',
      bgLight: 'bg-[#B35900]/10'
    },
    { 
      name: 'Jyanipur MAIL', 
      url: 'https://mail.jyanipur.com', 
      icon: Mail, 
      desc: 'Official company email, contacts, and calendar.', 
      hoverColor: 'group-hover:bg-emerald-500',
      iconColor: 'text-emerald-600 group-hover:text-white',
      bgLight: 'bg-emerald-50'
    },
    { 
      name: 'CAD Vault', 
      url: 'https://cad.jyanipur.com', 
      icon: HardDrive, 
      desc: 'Secure cloud storage for AutoCAD drawings and 3D renders.', 
      hoverColor: 'group-hover:bg-purple-500',
      iconColor: 'text-purple-600 group-hover:text-white',
      bgLight: 'bg-purple-50'
    },
    { 
      name: 'HR & Payroll', 
      url: 'https://hr.jyanipur.com', 
      icon: Users, 
      desc: 'Employee attendance, leave management, and salary.', 
      hoverColor: 'group-hover:bg-rose-500',
      iconColor: 'text-rose-600 group-hover:text-white',
      bgLight: 'bg-rose-50'
    },
    { 
      name: 'IT Helpdesk', 
      url: 'https://help.jyanipur.com', 
      icon: LifeBuoy, 
      desc: 'Raise IT tickets for software access or hardware issues.', 
      hoverColor: 'group-hover:bg-slate-700',
      iconColor: 'text-slate-700 group-hover:text-white',
      bgLight: 'bg-slate-100'
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 relative overflow-hidden flex flex-col">
      
      {/* --- BACKGROUND EFFECTS --- */}
      {/* Subtle Dot Grid */}
      <div className="absolute inset-0 z-0" style={{ backgroundImage: 'radial-gradient(#CBD5E1 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.4 }}></div>
      {/* Soft Teak Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#B35900]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] translate-y-1/3 -translate-x-1/4 z-0 pointer-events-none"></div>

      {/* --- HEADER --- */}
      <header className="h-20 px-8 lg:px-12 flex items-center justify-between border-b border-white/40 bg-white/40 backdrop-blur-xl sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#B35900] to-[#8C4600] flex items-center justify-center shadow-lg shadow-[#B35900]/20">
            <Grid3X3 className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-[0.15em] uppercase text-[#B35900] leading-none">Jyanipur</span>
            <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mt-1">Enterprise Workspace</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-extrabold text-slate-800">{currentUser.name}</p>
            <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">{currentUser.role}</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-slate-900 text-white font-bold flex items-center justify-center shadow-md border-[3px] border-white text-lg">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 z-10 flex flex-col justify-center">
        
        <div className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {getGreeting()} <span className="text-[#B35900]">{currentUser.name.split(' ')[0]}</span>.
            </h1>
            <p className="text-base text-slate-500 max-w-xl leading-relaxed">
              Select a module below to launch your secure session. All applications will open in an isolated enterprise tab.
            </p>
          </div>
          
          {/* Live Clock Display */}
          {currentTime && (
            <div className="bg-white/60 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/60 shadow-sm flex flex-col items-end">
              <span className="text-2xl font-extrabold text-slate-800 tracking-tight">
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
                {currentTime.toLocaleDateString([], { weekday: 'long', month: 'short', day: 'numeric' })}
              </span>
            </div>
          )}
        </div>

        {/* --- APP GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {enterpriseApps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-[2rem] border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(179,89,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col h-full cursor-pointer"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent group-hover:via-[#B35900] transition-colors duration-500"></div>
              
              <div className="flex items-start justify-between mb-8 relative z-10">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-colors duration-300 ${app.bgLight} ${app.hoverColor}`}>
                  <app.icon className={`w-8 h-8 transition-colors duration-300 ${app.iconColor}`} />
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-[#B35900] transition-colors duration-300">
                   <ArrowUpRight className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <div className="relative z-10 mt-auto">
                <h3 className="text-xl font-extrabold text-slate-800 mb-2 group-hover:text-[#B35900] transition-colors">{app.name}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{app.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </main>
      
    </div>
  );
}