import React, { useState, useEffect } from 'react';
import { LeadFormData } from '../types';

const LeadForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    businessName: '',
    websiteUrl: '',
    monthlyRevenue: '',
    growthGoal: '',
    timeline: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scanStep, setScanStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const scanLabels = [
    "Initializing Secure Uplink...",
    "Scanning Domain Architecture...",
    "Analyzing Conversion Heatmaps...",
    "Benchmarking Against Competitors...",
    "Finalizing Performance Report..."
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let step = 0;
    const interval = setInterval(() => {
      if (step < scanLabels.length - 1) {
        step++;
        setScanStep(step);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setIsSubmitting(false);
          setSubmitted(true);
        }, 800);
      }
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="glass p-8 md:p-16 rounded-[2rem] md:rounded-[3rem] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-pulse"></div>
        <div className="w-16 h-16 md:w-28 md:h-28 bg-blue-600/20 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-[0_0_40px_rgba(59,130,246,0.3)] border border-blue-500/40">
          <svg className="w-8 h-8 md:w-14 md:h-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl md:text-4xl font-syne font-black text-white mb-4 uppercase tracking-tighter leading-tight">TRANSMISSION RECEIVED</h3>
        <p className="text-zinc-400 text-sm md:text-xl leading-relaxed max-w-sm mx-auto mb-10 font-medium">
          Your data is being processed through our performance filters. A senior architect will deliver your conversion blueprint within <span className="text-white font-bold">24 hours</span>.
        </p>
        <div className="pt-8 border-t border-zinc-900 flex justify-center gap-6 md:gap-10">
            <div className="flex flex-col items-center">
                <span className="text-[8px] md:text-[10px] text-zinc-600 uppercase font-black tracking-[0.2em] mb-1">Queue Status</span>
                <span className="text-[10px] md:text-xs text-blue-500 font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
                  Active
                </span>
            </div>
            <div className="w-px h-10 md:h-12 bg-zinc-800"></div>
            <div className="flex flex-col items-center">
                <span className="text-[8px] md:text-[10px] text-zinc-600 uppercase font-black tracking-[0.2em] mb-1">Access Level</span>
                <span className="text-[10px] md:text-xs text-blue-500 font-bold uppercase tracking-widest">Priority 1</span>
            </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8 glass p-6 sm:p-10 md:p-16 rounded-[1.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden group">
      {/* Decorative Technical Border Snippets */}
      <div className="absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 border-t border-r border-blue-500/20 rounded-tr-[1.5rem] md:rounded-tr-[4rem]"></div>
      <div className="absolute bottom-0 left-0 w-12 md:w-16 h-12 md:h-16 border-b border-l border-blue-500/20 rounded-bl-[1.5rem] md:rounded-bl-[4rem]"></div>
      
      {isSubmitting ? (
        <div className="py-16 md:py-32 flex flex-col items-center text-center">
           <div className="relative w-24 h-24 md:w-48 md:h-48 mb-10">
              <div className="absolute inset-0 border-[6px] md:border-[8px] border-zinc-900 rounded-full"></div>
              <div className="absolute inset-0 border-[6px] md:border-[8px] border-blue-500 rounded-full border-t-transparent animate-spin"></div>
              <div className="absolute inset-3 md:inset-4 border border-blue-500/20 rounded-full border-dashed animate-[spin_12s_linear_infinite]"></div>
              <div className="absolute inset-0 flex items-center justify-center font-syne font-black text-blue-500 text-xl md:text-4xl tracking-tighter">
                {Math.round((scanStep + 1) / scanLabels.length * 100)}%
              </div>
           </div>
           <h3 className="text-xl md:text-3xl font-syne font-black text-white mb-4 uppercase tracking-tighter animate-pulse">{scanLabels[scanStep]}</h3>
           <div className="flex gap-2">
              {[0,1,2,3].map(i => (
                <div key={i} className="w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 150}ms` }}></div>
              ))}
           </div>
           <p className="mt-8 text-zinc-600 text-[8px] md:text-[10px] uppercase font-black tracking-[0.4em]">Establishing Secure Node Connection...</p>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span className="text-[9px] md:text-[11px] font-black uppercase tracking-[0.4em] text-zinc-500">Intake System v4.0</span>
            </div>
            <div className="hidden sm:block px-3 py-1 bg-zinc-950/50 border border-zinc-900 rounded-full text-[8px] font-mono text-blue-500/50 uppercase tracking-widest">
              Uptime: 99.9%
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Operator Name</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none transition-all placeholder:text-zinc-800 text-sm font-medium"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Entity Reference</label>
                <input
                  required
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Company Ltd."
                  className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none transition-all placeholder:text-zinc-800 text-sm font-medium"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Target Domain</label>
              <input
                required
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://yourbusiness.com"
                className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none transition-all placeholder:text-zinc-800 text-sm font-medium"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Revenue Stream</label>
                <div className="relative">
                  <select
                    required
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none appearance-none cursor-pointer text-sm font-medium"
                  >
                    <option value="" className="bg-zinc-950">Select Volume</option>
                    <option value="10k-50k" className="bg-zinc-950">$10k - $50k</option>
                    <option value="50k-250k" className="bg-zinc-950">$50k - $250k</option>
                    <option value="250k+" className="bg-zinc-950">$250k+</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Velocity Priority</label>
                <div className="relative">
                  <select
                    required
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none appearance-none cursor-pointer text-sm font-medium"
                  >
                    <option value="" className="bg-zinc-950">Select Speed</option>
                    <option value="immediate" className="bg-zinc-950">High / 14 Days</option>
                    <option value="1-month" className="bg-zinc-950">Standard / 30 Days</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-[0.3em] text-zinc-500 px-1">Core KPI Objective</label>
              <input
                required
                type="text"
                name="growthGoal"
                value={formData.growthGoal}
                onChange={handleChange}
                placeholder="e.g. Triple monthly call volume"
                className="w-full bg-black/40 border border-zinc-800 hover:border-blue-500/40 focus:border-blue-500 rounded-xl px-5 py-4 text-white focus:outline-none transition-all placeholder:text-zinc-800 text-sm font-medium"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group relative w-full bg-blue-600 hover:bg-blue-500 text-white font-syne font-black py-5 md:py-6 rounded-xl transition-all flex items-center justify-center gap-3 shadow-2xl shadow-blue-600/30 uppercase tracking-[0.2em] text-xs md:text-sm transform active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/5 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                <span>Initialize Performance Audit</span>
                <span className="text-xl group-hover:translate-x-1.5 transition-transform">→</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-3 text-zinc-700 py-2">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
              <span className="text-[8px] font-black uppercase tracking-[0.3em]">End-to-End Encrypted</span>
            </div>
          </div>
        </>
      )}
    </form>
  );
};

export default LeadForm;