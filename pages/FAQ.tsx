import React, { useState } from 'react';
import { FAQS, BRAND } from '../constants';

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-24 px-6 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-3xl mx-auto">
        <header className="text-center mb-16 md:mb-24">
          <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4">Clarification</div>
          <h1 className="section-title font-syne font-bold text-white mb-6 tracking-tighter uppercase leading-tight">Common <br /><span className="text-stroke">Inquiries.</span></h1>
          <p className="text-zinc-400 text-xs md:text-lg max-w-md mx-auto leading-relaxed">Everything you need to know about working with {BRAND.name} at high velocity.</p>
        </header>

        <div className="space-y-4 sm:space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass rounded-[1.5rem] overflow-hidden transition-all duration-500 group">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left p-6 sm:p-10 flex justify-between items-center hover:bg-zinc-900/20 transition-colors active:bg-zinc-900/40"
              >
                <span className="text-sm sm:text-lg md:text-xl font-bold text-white pr-6 sm:pr-8 leading-tight group-hover:text-blue-400 transition-colors">{faq.q}</span>
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-zinc-800 flex items-center justify-center transition-all flex-shrink-0 ${openIdx === idx ? 'bg-blue-600 border-blue-600 rotate-180' : ''}`}>
                    <svg
                    className={`w-3 h-3 sm:w-4 sm:h-4 transition-colors ${openIdx === idx ? 'text-white' : 'text-zinc-600'}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="px-6 sm:px-10 pb-8 sm:pb-10 text-zinc-400 text-xs sm:text-base leading-relaxed max-w-2xl border-t border-zinc-900/50 pt-6 mt-2">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-8 sm:p-20 glass rounded-[2.5rem] text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-blue-600/[0.02] group-hover:bg-blue-600/[0.04] transition-colors -z-10"></div>
          <h3 className="font-syne text-2xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight leading-tight">Still have <br /><span className="text-blue-500 italic">questions?</span></h3>
          <p className="text-zinc-500 mb-8 max-w-sm mx-auto text-[10px] sm:text-base font-medium">
            We're ready to discuss your specific business goals. Reach out directly or start the audit process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a href={`mailto:${BRAND.email}`} className="text-zinc-400 hover:text-blue-500 font-bold transition-all border-b border-zinc-800 hover:border-blue-500 pb-1 text-xs sm:text-base">
                {BRAND.email}
            </a>
            <span className="hidden sm:block text-zinc-800">/</span>
            <a href="#/contact" className="inline-block bg-white text-black px-8 py-3 rounded-full font-black text-[9px] sm:text-xs uppercase tracking-widest transition-all hover:bg-blue-600 hover:text-white shadow-xl active:scale-95 transform-gpu">
                Initialize Audit
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;