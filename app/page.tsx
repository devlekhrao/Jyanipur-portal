'use client';

import React from 'react';
import { MessageSquare, CreditCard, Mail, HardDrive, Users, LifeBuoy, ExternalLink, LayoutGrid } from 'lucide-react';

export default function AppLaunchpad() {
  const currentUser = { name: 'Pavan Kumar', role: 'Managing Director' };

  // This is your central link directory
  const enterpriseApps = [
    { 
      name: 'Jyanipur CHAT', 
      url: 'https://chat.jyanipur.com', 
      icon: MessageSquare, 
      desc: 'Real-time team communication and site updates.', 
      color: 'bg-blue-50 text-blue-600 border-blue-200' 
    },
    { 
      name: 'Jyanipur ERP', 
      url: 'https://erp.jyanipur.com', 
      icon: CreditCard, 
      desc: 'Financial ledger, Vendor Billing, and Purchase Orders.', 
      color: 'bg-[#B35900]/10 text-[#B35900] border-[#B35900]/30' 
    },
    { 
      name: 'Jyanipur MAIL', 
      url: 'https://mail.jyanipur.com', 
      icon: Mail, 
      desc: 'Official company email and calendar.', 
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200' 
    },
    { 
      name: 'CAD Vault', 
      url: 'https://cad.jyanipur.com', 
      icon: HardDrive, 
      desc: 'Secure cloud storage for AutoCAD drawings.', 
      color: 'bg-purple-50 text-purple-600 border-purple-200' 
    },
    { 
      name: 'HR & Payroll', 
      url: 'https://hr.jyanipur.com', 
      icon: Users, 
      desc: 'Employee attendance, leaves, and salary.', 
      color: 'bg-rose-50 text-rose-600 border-rose-200' 
    },
    { 
      name: 'IT Helpdesk', 
      url: 'https://help.jyanipur.com', 
      icon: LifeBuoy, 
      desc: 'Raise IT tickets for software access.', 
      color: 'bg-slate-100 text-slate-600 border-slate-300' 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900">
      
      {/* HEADER */}
      <header className="h-16 px-8 bg-white flex items-center justify-between border-b border-slate-200/60 sticky top-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#B35900] flex items-center justify-center shadow-sm">
            <LayoutGrid className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-widest uppercase text-[#B35900]">
            Jyanipur <span className="text-slate-800">Launchpad</span>
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs font-bold text-slate-800">{currentUser.name}</p>
            <p className="text-[10px] font-semibold text-slate-500">{currentUser.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-800 text-white font-bold flex items-center justify-center shadow-md border-2 border-white">
            {currentUser.name.charAt(0)}
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-extrabold text-slate-800 mb-3">Welcome to your Workspace</h1>
          <p className="text-sm text-slate-500">Select an application below to continue. Links will open securely in a new tab.</p>
        </div>

        {/* APP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseApps.map((app) => (
            <a 
              key={app.name}
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white p-6 rounded-2xl border border-slate-200/60 shadow-sm hover:shadow-md hover:border-[#B35900]/40 transition-all text-left flex flex-col h-full"
            >
              <div className="flex items-center justify-between mb-5">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center border ${app.color}`}>
                  <app.icon className="w-7 h-7" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-300 group-hover:text-[#B35900] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-2">{app.name}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{app.desc}</p>
            </a>
          ))}
        </div>
      </main>
      
    </div>
  );
}