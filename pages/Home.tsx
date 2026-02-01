import React, { useState, useEffect, useRef, Suspense, lazy } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BRAND, SERVICES, TESTIMONIALS } from '../constants';

const HeroVisual = lazy(() => import('../components/HeroVisual'));

const PerformanceMatrix = () => {
  const [metrics, setMetrics] = useState({ throughput: 94.2, latency: 12, conversion: 8.4 });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics({
        throughput: 94 + Math.random() * 2,
        latency: 10 + Math.floor(Math.random() * 5),
        conversion: 8 + Math.random() * 1.5
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 reveal overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left w-full">
            <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-3">Core Telemetry</div>
            <h2 className="section-title font-syne font-black text-white uppercase leading-none">Performance <br /><span className="text-stroke">Matrix.</span></h2>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          <div className="glass p-5 md:p-8 border-l-4 border-l-blue-500 group transition-all duration-500 hover:bg-blue-600/5">
            <div className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-4">Network Throughput</div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-syne font-black text-white mb-2 tracking-tighter">
              {metrics.throughput.toFixed(1)}<span className="text-blue-500">%</span>
            </div>
            <div className="w-full bg-zinc-900/50 h-1 mt-4 rounded-full overflow-hidden">
              <div className="bg-blue-600 h-full transition-all duration-1000 ease-out" style={{ width: `${metrics.throughput}%` }}></div>
            </div>
          </div>

          <div className="glass p-5 md:p-8 border-l-4 border-l-zinc-800 group transition-all duration-500 hover:border-l-blue-500 hover:bg-blue-600/5">
            <div className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-4">UX Latency (ms)</div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-syne font-black text-white mb-2 tracking-tighter">
              {metrics.latency}<span className="text-blue-500">ms</span>
            </div>
            <div className="flex gap-1.5 mt-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className={`h-1 flex-1 rounded-full ${i < metrics.latency / 2 ? 'bg-blue-500' : 'bg-zinc-900'}`}></div>
              ))}
            </div>
          </div>

          <div className="glass p-5 md:p-8 border-l-4 border-l-zinc-800 group transition-all duration-500 hover:border-l-blue-500 hover:bg-blue-600/5">
            <div className="text-zinc-500 text-[9px] font-black uppercase tracking-widest mb-4">Conversion Yield</div>
            <div className="text-3xl md:text-5xl lg:text-6xl font-syne font-black text-white mb-2 tracking-tighter">
              {metrics.conversion.toFixed(2)}<span className="text-blue-500">x</span>
            </div>
            <div className="text-[9px] font-mono text-zinc-500 uppercase mt-4 tracking-widest">Growth Multiplier Active</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const TacticalButton: React.FC<{ to: string; children: React.ReactNode; className: string }> = ({ to, children, className }) => {
  const [isActivating, setIsActivating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const navigate = useNavigate();

  const handleActivation = (e: React.MouseEvent | React.TouchEvent) => {
    if (isActivating) return;
    setIsActivating(true);
    setTimeout(() => navigate(to), 700);
  };

  const isActive = isHovered || isActivating || isTouched;

  return (
    <button 
      onClick={handleActivation}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsTouched(false); }}
      onPointerDown={() => setIsTouched(true)}
      onPointerUp={() => setIsTouched(false)}
      onPointerCancel={() => setIsTouched(false)}
      onPointerLeave={() => setIsTouched(false)}
      className={`${className} relative transition-all duration-300 transform-gpu overflow-hidden select-none will-change-[transform,background-color,box-shadow,color] flex items-center justify-center ${
        isActive
          ? 'scale-[0.98] bg-white text-blue-600 shadow-[0_0_50px_rgba(255,255,255,0.4)]' 
          : 'active:scale-95'
      }`}
    >
      <div className={`w-full h-full flex items-center justify-center transition-[transform,opacity] duration-300 ease-out will-change-[transform,opacity] px-6 ${isActive ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {children}
      </div>
      <div className={`absolute inset-0 flex items-center justify-center font-syne font-black text-blue-600 uppercase tracking-tighter text-xs sm:text-sm transition-[transform,opacity] duration-300 ease-out will-change-[transform,opacity] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <span className={isActivating ? 'animate-pulse' : ''}>
          {isActivating ? 'Linking...' : 'Book My Slot'}
        </span>
      </div>
      <div className={`absolute bottom-0 left-0 h-1 w-full bg-blue-500/60 origin-left transition-transform duration-[700ms] ease-out will-change-transform ${isActivating ? 'scale-x-100' : 'scale-x-0'}`}></div>
    </button>
  );
};

const AnimatedTestimonialCard: React.FC<{ testimonial: typeof TESTIMONIALS[0]; index: number }> = ({ testimonial, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

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
      style={{ transitionDelay: `${index * 100}ms` }}
      className={`group glass p-5 md:p-8 flex flex-col h-full hover:translate-y-[-8px] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
    >
      <div className="flex justify-between items-start mb-6">
        <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-[8px] font-black text-blue-500 uppercase tracking-widest">NDA: Verified</div>
        <div className="flex gap-1.5">
          {[1,2,3].map(i => <div key={i} className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>)}
        </div>
      </div>
      <div className="flex-grow">
        <h3 className="text-white font-syne font-bold text-lg md:text-xl lg:text-2xl mb-3 uppercase tracking-tighter group-hover:text-blue-400 transition-colors leading-tight">{testimonial.industry}</h3>
        <p className="text-zinc-400 text-[11px] md:text-xs mb-5 opacity-90 leading-relaxed font-medium">{testimonial.impact}</p>
        <div className="p-4 bg-zinc-950/40 border border-zinc-900 rounded-2xl text-zinc-300 text-xs italic leading-relaxed">
          "{testimonial.quote}"
        </div>
      </div>
      <Link to={`/case-study/${testimonial.slug}`} className="mt-8 text-[9px] font-black text-blue-500 uppercase tracking-widest hover:translate-x-3 transition-transform inline-flex items-center gap-2">
        NDA Deep-Dive <span className="text-base">→</span>
      </Link>
    </div>
  );
};

const Home: React.FC = () => {
  const [outcomeIdx, setOutcomeIdx] = useState(0);
  const outcomes = ["CONVERSION", "REVENUE", "GROWTH", "AUTHORITY"];

  useEffect(() => {
    const interval = setInterval(() => setOutcomeIdx(prev => (prev + 1) % outcomes.length), 2500);
    return () => clearInterval(interval);
  }, []);

  const industries = ["FINTECH", "SAAS", "REAL ESTATE", "CONSULTING", "HEALTHCARE", "LAW FIRMS"];

  return (
    <div className="relative overflow-x-hidden w-full">
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 z-[-1]">
          <Suspense fallback={null}><HeroVisual /></Suspense>
        </div>
        
        <div className="max-w-7xl mx-auto w-full relative z-10 reveal">
          <div className="text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-500 text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-6 group cursor-default shadow-lg shadow-blue-500/5">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 animate-ping"></span>
              Performance Engine v2.0
            </div>
            
            <h1 className="hero-title font-syne font-extrabold text-white tracking-tighter mb-6 cursor-default uppercase">
              MAX OUT <br />
              YOUR <span className="text-blue-500 inline-block min-w-[100px] md:min-w-[150px] transition-all duration-300">{outcomes[outcomeIdx]}</span> <br />
              <span className="text-stroke hover:text-white transition-colors duration-1000">MACHINES.</span>
            </h1>
            
            <p className="text-sm md:text-lg lg:text-xl text-zinc-400 max-w-2xl font-medium leading-relaxed mb-10 opacity-95 mx-auto lg:mx-0 px-2 sm:px-0">
              {BRAND.subheadline} Refactored for speed and mechanical profit.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-6 w-full max-w-md mx-auto lg:mx-0">
              <TacticalButton to="/contact" className="group relative w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 rounded-full font-black text-xs md:text-sm lg:text-base shadow-2xl shadow-blue-600/30">
                <span className="relative z-10 text-white uppercase tracking-tighter">{BRAND.primaryCTA}</span>
              </TacticalButton>
              <Link to="/how-it-works" className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 border border-zinc-800 hover:border-blue-500 hover:bg-zinc-900/40 rounded-full font-black text-xs md:text-sm lg:text-base transition-all text-center uppercase tracking-tighter text-zinc-500 flex items-center justify-center hover:bg-zinc-800/60 active:scale-95">
                Methodology
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16 border-y border-zinc-900 bg-black/40 backdrop-blur-xl reveal overflow-hidden">
        <div className="marquee overflow-hidden flex whitespace-nowrap group">
          <div className="marquee-content flex gap-10 sm:gap-16 animate-[scroll_45s_linear_infinite]">
            {industries.concat(industries).map((tag, i) => (
              <div key={i} className="flex items-center gap-6 text-zinc-800 hover:text-blue-500 transition-colors font-syne font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter">
                <span>{tag}</span>
                <div className="w-2 md:w-4 h-2 md:h-4 bg-blue-500 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PerformanceMatrix />

      <section className="py-16 md:py-24 px-4 sm:px-6 reveal">
        <div className="max-w-7xl mx-auto">
          <header className="mb-12 text-center md:text-left">
            <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4">Performance Data</div>
            <h2 className="section-title font-syne font-black text-white tracking-tighter uppercase leading-none">Case <span className="text-stroke">History.</span></h2>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {TESTIMONIALS.map((t, idx) => <AnimatedTestimonialCard key={t.slug} testimonial={t} index={idx} />)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 px-4 sm:px-6 reveal overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="glass p-8 sm:p-20 md:p-24 text-center relative overflow-hidden group">
            <h2 className="section-title font-syne font-black text-white mb-10 sm:mb-12 tracking-tighter uppercase leading-[0.95] transform group-hover:scale-[1.01] transition-transform duration-1000">
              READY TO <br /><span className="text-blue-500 italic">INTAKE?</span>
            </h2>
            <TacticalButton to="/contact" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-syne font-black text-xs md:text-sm lg:text-base hover:bg-blue-600 hover:text-white transition-all shadow-4xl uppercase tracking-tighter mx-auto">
              Secure My Slot
            </TacticalButton>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
};

export default Home;