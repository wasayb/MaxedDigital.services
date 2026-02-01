import React, { Suspense, lazy } from 'react';
import { BRAND } from '../constants';

const ArchitectureVisualizer = lazy(() => import('../components/ArchitectureVisualizer'));

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="reveal text-center lg:text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[9px] font-black mb-6 uppercase tracking-[0.4em]">Intelligence Report</div>
            <h1 className="section-title font-syne font-extrabold text-white mb-6 tracking-tighter uppercase leading-[1.05]">ROI OVER <br /><span className="text-blue-500">VANITY.</span></h1>
            <p className="text-zinc-500 text-sm md:text-lg mb-6 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
              At {BRAND.name}, we treat digital architecture as a financial instrument. If your website isn't actively generating measurable yield, it's a liability, not an asset.
            </p>
            <p className="text-zinc-500 text-sm md:text-lg mb-10 leading-relaxed max-w-xl font-medium mx-auto lg:mx-0">
              We’ve optimized our agency logic for speed, eliminating redundant meetings to focus 100% of our energy on engineering conversion pipelines.
            </p>
            
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
              <div className="p-5 sm:p-8 glass rounded-[2rem] group transition-all duration-700 flex flex-col items-center lg:items-start">
                <div className="text-2xl sm:text-4xl md:text-5xl font-syne font-bold text-white mb-1 group-hover:text-blue-500 transition-colors tracking-tighter">14</div>
                <div className="text-zinc-600 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] mb-4">Day Cycle</div>
                <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=400&auto=format&fit=crop" 
                    alt="High Velocity Execution" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-2 left-2 flex gap-1">
                    <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-blue-500/50 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
              <div className="p-5 sm:p-8 glass rounded-[2rem] group transition-all duration-700 flex flex-col items-center lg:items-start">
                <div className="text-2xl sm:text-4xl md:text-5xl font-syne font-bold text-white mb-1 group-hover:text-blue-500 transition-colors tracking-tighter">100%</div>
                <div className="text-zinc-600 text-[8px] sm:text-[9px] font-black uppercase tracking-[0.2em] mb-4">In-House</div>
                <div className="w-full aspect-video rounded-xl overflow-hidden relative bg-zinc-900 border border-white/5 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop" 
                    alt="Surgical Precision Team" 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700 ease-out transform-gpu"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-2 left-2">
                    <span className="text-[6px] font-mono text-zinc-500 uppercase tracking-widest">SECURE_WORKSTATION_ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative aspect-square reveal max-w-lg mx-auto lg:max-w-none w-full" style={{ transitionDelay: '250ms' }}>
            <div className="absolute inset-0 bg-blue-500/5 blur-[140px] rounded-full"></div>
            <div className="relative w-full h-full glass rounded-[3rem] overflow-hidden group shadow-2xl">
               <div className="absolute top-6 left-6 z-20 pointer-events-none">
                  <span className="text-[7px] font-black text-blue-500/60 uppercase tracking-[0.4em] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-ping"></span>
                    CORE_BLUEPRINT
                  </span>
               </div>
               <div className="w-full h-full transform-gpu">
                 <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-blue-500/20">Booting...</div>}>
                   <ArchitectureVisualizer />
                 </Suspense>
               </div>
            </div>
            
            <div className="absolute -bottom-2 -right-2 glass p-3 rounded-[1rem] shadow-2xl z-30 group transition-all">
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
                    <span className="text-[7px] font-black text-white uppercase tracking-[0.2em]">System Nominal</span>
                </div>
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-40 py-12 md:py-24 border-t border-zinc-900 reveal">
           <h2 className="section-title font-syne font-bold text-white mb-10 md:mb-20 text-center tracking-tighter uppercase leading-[1.1]">Built for <span className="text-stroke">Performance.</span></h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
             <div className="glass p-6 md:p-12 rounded-[2rem] transition-all duration-500 group">
               <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6 flex items-center justify-center text-blue-500 group-hover:border-blue-500/40 transition-all">
                  <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
               </div>
               <h4 className="text-lg md:text-2xl font-syne font-bold text-white mb-3 uppercase tracking-tighter">Velocity First</h4>
               <p className="text-zinc-500 text-xs md:text-base leading-relaxed font-medium">We optimize for momentum. Our 14-day sprint ensures your market window never closes while you wait on assets.</p>
             </div>
             <div className="glass p-6 md:p-12 rounded-[2rem] transition-all duration-500 group">
               <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6 flex items-center justify-center text-blue-500 group-hover:border-blue-500/40 transition-all">
                  <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
               </div>
               <h4 className="text-lg md:text-2xl font-syne font-bold text-white mb-3 uppercase tracking-tighter">Profit Centric</h4>
               <p className="text-zinc-500 text-xs md:text-base leading-relaxed font-medium">Every design choice is cross-referenced with conversion data to ensure maximum capital efficiency.</p>
             </div>
             <div className="glass p-6 md:p-12 rounded-[2rem] transition-all duration-500 group">
               <div className="w-10 h-10 md:w-14 md:h-14 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6 flex items-center justify-center text-blue-500 group-hover:border-blue-500/40 transition-all">
                  <svg className="w-5 h-5 md:w-7 md:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-1.17-10.84a9.08 9.08 0 012.34-3.571m0 0A9.917 9.917 0 0112 2c1.907 0 3.698.533 5.223 1.464m-5.223 0A9.97 9.97 0 0115.332 7.51m0 0a8.1 8.1 0 01-.733 4.49M15.332 7.51a30.58 30.58 0 01-2.332 0c-1.127 0-2.241.039-3.342.145m0 0a8.997 8.997 0 011.069 5.41m0 0c0 1.243-.207 2.438-.59 3.558L12 11z" />
                  </svg>
               </div>
               <h4 className="text-lg md:text-2xl font-syne font-bold text-white mb-3 uppercase tracking-tighter">Surgical Stack</h4>
               <p className="text-zinc-500 text-xs md:text-base leading-relaxed font-medium">We deploy high-fidelity code bases that are clean, ultra-fast, and built to scale alongside your enterprise.</p>
             </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;