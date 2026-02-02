import React, { useRef, useState, useEffect } from 'react';
import { SERVICES } from '../constants';
import { Link } from 'react-router-dom';
import { Service } from '../types';

const ParallaxServiceCard: React.FC<{ service: Service; idx: number }> = ({ service, idx }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={cardRef}
      className={`h-full glass rounded-[2.5rem] overflow-hidden flex flex-col transition-all duration-1000 ease-out hover:scale-[1.02] group relative will-change-transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
      }`}
      style={{ transitionDelay: `${idx * 75}ms` }}
    >
      <div className="p-6 md:p-12 flex flex-col h-full flex-grow relative z-10">
        <div className="flex justify-between items-center mb-6">
          <div className="text-blue-500 font-mono text-[8px] uppercase tracking-[0.3em] px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md backdrop-blur-sm">
            MOD-0{idx + 1}
          </div>
          <div className="text-[7px] font-mono text-zinc-600 uppercase">Load: {30 + Math.floor(Math.random() * 40)}%</div>
        </div>

        <h3 className="font-syne text-lg md:text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors duration-500 uppercase tracking-tighter leading-tight">
          {service.title}
        </h3>
        
        <p className="text-zinc-500 mb-6 text-xs md:text-sm leading-relaxed font-medium">
          {service.outcome}
        </p>
        
        <div className="mt-auto">
          <div className="grid grid-cols-2 gap-px bg-white/5 border border-white/5 mb-6 rounded-lg overflow-hidden backdrop-blur-sm">
            <div className="bg-white/[0.02] p-3 group-hover:bg-white/[0.04] transition-colors">
              <div className="text-[7px] text-zinc-600 uppercase mb-1">Throughput</div>
              <div className="text-[10px] font-black text-white">99.9%</div>
            </div>
            <div className="bg-white/[0.02] p-3 group-hover:bg-white/[0.04] transition-colors">
              <div className="text-[7px] text-zinc-600 uppercase mb-1">Tier</div>
              <div className="text-[10px] font-black text-blue-500">High</div>
            </div>
          </div>

          <div className="text-zinc-700 text-[8px] font-black uppercase tracking-[0.4em] mb-4">Functional Outputs</div>
          <ul className="space-y-2 mb-8">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-center gap-2 text-zinc-400 text-[9px] font-bold uppercase tracking-widest group-hover:text-zinc-200 transition-colors">
                <div className="w-1 h-1 bg-blue-500/20 group-hover:bg-blue-500 rounded-full transition-all"></div>
                {item}
              </li>
            ))}
          </ul>
          
          <Link to="/contact" className="w-full inline-flex items-center justify-center px-6 py-4 bg-white/[0.03] border border-white/5 rounded-xl hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all text-zinc-500 text-[9px] font-black uppercase tracking-widest active:scale-95 transform-gpu backdrop-blur-md">
            Initialize Module →
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-blue-500/0 group-hover:from-blue-500/[0.03] group-hover:to-blue-500/[0.03] transition-all duration-1000 -z-10"></div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <header className="max-w-4xl mb-16 reveal">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
            <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em]">Module Arsenal</div>
          </div>
          <h1 className="section-title font-syne font-black text-white mb-6 tracking-tighter uppercase leading-[0.9]">Strategic <br /><span className="text-stroke">Assets.</span></h1>
          <p className="text-zinc-500 text-base md:text-xl leading-relaxed max-w-3xl">
            Surgically engineered units designed to eliminate friction and maximize conversion throughput. v2.0 performance standards active.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, idx) => (
            <ParallaxServiceCard key={idx} service={service} idx={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;