import React from 'react';
import { PROCESS } from '../constants.tsx';
import TacticalButton from '../components/TacticalButton.tsx';

const HowItWorks: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 relative min-h-screen">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-4xl mb-24 md:mb-32 reveal text-center md:text-left mx-auto md:mx-0">
          <div className="inline-flex items-center gap-4 mb-8 group cursor-default">
            <span className="w-3 h-3 bg-blue-500 rounded-full animate-ping"></span>
            <div className="text-blue-500 font-black text-[11px] uppercase tracking-[0.5em] group-hover:tracking-[0.7em] transition-all">Deployment Methodology</div>
          </div>
          <h1 className="hero-title font-extrabold text-white mb-10 tracking-tighter uppercase leading-[0.85] cursor-default">Execution <br /><span className="text-stroke hover:text-white transition-colors duration-1000">Logistics.</span></h1>
          <p className="text-zinc-400 text-sm md:text-lg lg:text-xl max-w-2xl font-medium leading-relaxed opacity-90 mx-auto md:mx-0">
            Our 14-day performance framework is engineered for speed and surgical precision. We eliminate administrative friction to prioritize high-yield architecture.
          </p>
        </header>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-blue-500/10 to-transparent -translate-x-1/2 opacity-30"></div>

          <div className="space-y-16 md:space-y-32">
            {PROCESS.map((step, idx) => (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start md:items-center gap-10 lg:gap-12 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} reveal`}>
                
                <div className="flex-1 w-full z-10 pl-16 md:pl-0">
                  <div className={`glass p-6 sm:p-10 md:p-12 hover:translate-y-[-8px] transition-all duration-1000 group relative overflow-hidden ${idx % 2 === 0 ? 'md:ml-16' : 'md:mr-16 md:text-right'}`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    
                    <div className={`inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-[10px] font-black uppercase tracking-[0.5em] mb-6 ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                      PHASE 0{idx + 1}
                    </div>
                    
                    <h3 className="text-xl md:text-3xl lg:text-4xl font-syne font-black text-white mb-4 uppercase tracking-tighter transition-colors group-hover:text-blue-400 leading-tight">
                      {step.step}
                    </h3>
                    
                    <p className="text-zinc-400 leading-relaxed font-medium text-xs md:text-lg opacity-90 group-hover:opacity-100 transition-opacity">
                      {step.detail}
                    </p>
                    
                    <div className={`mt-8 md:mt-10 flex items-center gap-4 ${idx % 2 === 0 ? '' : 'md:justify-end'}`}>
                       <span className="text-[9px] font-black text-zinc-600 uppercase tracking-widest group-hover:text-blue-500/60 transition-colors">Operational Integrity: 100%</span>
                       <div className="w-2 h-2 rounded-full bg-blue-500/30 group-hover:bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] animate-pulse transition-all"></div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 md:w-16 md:h-16 bg-zinc-950 border border-zinc-900 text-white font-syne font-black rounded-full z-20 shadow-[0_0_30px_rgba(0,0,0,0.9)] group-hover:border-blue-500 group-hover:text-blue-500 transition-all duration-700">
                  <div className="absolute inset-0 rounded-full border border-blue-500/10 scale-125 animate-pulse"></div>
                  <span className="text-base md:text-xl">{idx + 1}</span>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>

        <section className="mt-24 md:mt-40 grid grid-cols-1 lg:grid-cols-3 gap-6 reveal">
          {[
            { title: "Velocity Reports", desc: "Weekly Friday briefings with detailed behavior analysis and performance benchmarks." },
            { title: "Direct Uplink", desc: "Zero middlemen. Direct communication channel with your senior architecture lead." },
            { title: "Zero Bloat QA", desc: "Surgical 50-point inspection ensuring maximum speed and conversion logic integrity." }
          ].map((item, i) => (
            <div key={i} className="glass p-8 md:p-12 group hover:bg-white/[0.04] transition-all duration-700">
              <div className="w-12 h-12 bg-zinc-900/50 border border-zinc-800 rounded-2xl mb-8 flex items-center justify-center text-blue-500 group-hover:border-blue-500/60 group-hover:bg-blue-600/10 transition-all duration-500 shadow-xl">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
              </div>
              <h4 className="text-xl md:text-2xl font-syne font-black text-white mb-4 uppercase tracking-tight group-hover:text-blue-400 transition-colors leading-tight">{item.title}</h4>
              <p className="text-zinc-500 text-xs md:text-base leading-relaxed font-medium group-hover:text-zinc-400 transition-colors opacity-80">{item.desc}</p>
            </div>
          ))}
        </section>

        <div className="mt-24 md:mt-40 text-center reveal">
          <TacticalButton to="/contact" className="group relative px-10 sm:px-16 py-6 sm:py-8 bg-blue-600 rounded-full font-black text-lg md:text-xl overflow-hidden transition-all inline-block shadow-3xl shadow-blue-600/40 active:scale-95 transform-gpu mx-auto">
            <span className="relative z-10 text-white uppercase tracking-tighter">Initialize My 14-Day Cycle</span>
          </TacticalButton>
          <div className="mt-10 space-y-3">
            <p className="text-sm md:text-base text-zinc-500 font-black uppercase tracking-widest">
              GLOBAL CAPACITY: <span className="text-blue-500">8 PARTNERS / MONTH</span>
            </p>
            <p className="text-[9px] md:text-xs text-zinc-700 font-bold uppercase tracking-[0.5em]">5 SLOTS REMAINING IN CURRENT PIPELINE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;