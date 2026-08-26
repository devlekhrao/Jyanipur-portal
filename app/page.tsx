'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

export default function EnterpriseLaunchpad() {
  const currentUser = { name: 'Pavan Kumar', role: 'Managing Director', initials: 'PK' };
  
  // Custom branded apps using your short names
  const enterpriseApps = [
    { shortName: 'CHAT', url: 'https://chat.jyanipur.com' },
    { shortName: 'ERP', url: 'https://erp.jyanipur.com' },
    { shortName: 'MAIL', url: 'https://mail.jyanipur.com' },
    { shortName: 'CAD', url: 'https://cad.jyanipur.com' },
    { shortName: 'HR', url: 'https://hr.jyanipur.com' },
    { shortName: 'IT', url: 'https://help.jyanipur.com' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#B35900]/20">
      
      {/* Minimalist Top Header */}
      <header className="h-20 px-8 flex items-center justify-between w-full max-w-[1400px] mx-auto">
        <div className="flex items-center gap-3">
          {/* Using your actual logo for the header too! */}
          <Image src="/logo.png" alt="Jyanipur Logo" width={32} height={32} className="object-contain" priority />
          <span className="font-extrabold text-xl tracking-[0.2em] uppercase text-slate-900 mt-1">Jyanipur</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-bold text-slate-900">{currentUser.name}</p>
            <p className="text-[11px] font-medium text-slate-500 uppercase tracking-widest">{currentUser.role}</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-slate-50 text-[#B35900] border border-slate-100 font-bold flex items-center justify-center text-sm">
            {currentUser.initials}
          </div>
        </div>
      </header>

      {/* Main Centered Content */}
      <main className="max-w-4xl mx-auto pt-20 sm:pt-32 px-6 flex flex-col items-center text-center">
        
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-10 tracking-tight">
          Good evening, Pavan.
        </h1>
        
        {/* Massive Universal Search Bar */}
        <div className="w-full max-w-2xl relative mb-20">
          <Search className="w-5 h-5 absolute left-6 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search for apps, people, or resources..." 
            className="w-full pl-14 pr-6 py-4 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-slate-300 rounded-full text-base outline-none transition-all shadow-sm focus:shadow-md"
          />
        </div>

        {/* Branded Pill Grid */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 w-full max-w-3xl">
          {enterpriseApps.map((app) => (
            <a 
              key={app.shortName} 
              href={app.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#B35900] hover:bg-[#8C4600] px-8 py-3.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer w-48"
            >
              {/* `brightness-0 invert` makes your colored logo pure white to pop against the Teak background */}
              <Image 
                src="/logo.png" 
                alt={`${app.shortName} Logo`} 
                width={28} 
                height={28} 
                className="object-contain brightness-0 invert" 
              />
              <span className="text-white text-xl font-bold tracking-widest uppercase mt-0.5">
                {app.shortName}
              </span>
            </a>
          ))}
        </div>

      </main>
    </div>
  );
}