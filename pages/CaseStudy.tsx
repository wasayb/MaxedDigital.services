import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { TESTIMONIALS, BRAND } from '../constants';

const CaseStudy: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = TESTIMONIALS.find(t => t.slug === slug);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-32 px-6">
        <div className="text-center">
          <h1 className="text-4xl font-syne font-black text-white mb-4 uppercase tracking-tighter">ENTITY NOT FOUND</h1>
          <p className="text-zinc-500 mb-8">The requested performance NDA record does not exist in our active database.</p>
          <Link to="/" className="text-blue-500 font-bold uppercase tracking-widest text-[10px] border-b border-blue-500/30 pb-1">Return to Headquarters</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10 pointer-events-none"></div>

      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="mb-12 md:mb-16">
          <Link to="/" className="text-[9px] font-black text-zinc-600 uppercase tracking-[0.4em] hover:text-blue-500 transition-colors mb-8 inline-block">
            ← Back to Performance Data
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-8">
            <div className="max-w-xl">
              <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-4">Performance NDA</div>
              <h1 className="section-title font-syne font-bold text-white tracking-tighter uppercase leading-none break-words">
                {data.industry} <br />
                <span className="text-stroke">Acceleration.</span>
              </h1>
            </div>
            <div className="p-5 md:p-6 glass rounded-2xl flex flex-col items-center justify-center min-w-[120px] md:min-w-[160px] border border-blue-500/20 w-fit">
              <span className="text-blue-500 font-syne font-black text-2xl md:text-4xl">ROI</span>
              <span className="text-[9px] text-zinc-500 font-black uppercase tracking-widest">Verified</span>
            </div>
          </div>

          {/* NDA Disclaimer Notice */}
          <div className="mt-10 p-5 md:p-6 bg-blue-500/5 border border-blue-500/10 rounded-2xl flex items-start gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center flex-shrink-0 text-blue-500">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 118 0 4 4 0 01-8 0zM3 20a6 6 0 0112 0v1H3v-1z" />
              </svg>
            </div>
            <p className="text-[10px] md:text-xs text-zinc-400 leading-relaxed font-medium uppercase tracking-wider">
              <span className="text-blue-500 font-black">Confidentiality Protocol:</span> We can't share the specific client and company name due to a strict NDA, but here's how we helped them achieve these results.
            </p>
          </div>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Main Content Area */}
          <div className="md:col-span-2 space-y-10 md:space-y-16">
            <section className="glass p-6 md:p-10 rounded-2xl md:rounded-[3rem]">
              <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                The Challenge
              </h3>
              <p className="text-zinc-300 text-sm md:text-lg leading-relaxed font-medium">
                {data.problem} This friction point was creating significant revenue leakage and suppressing the client's ability to scale marketing spend effectively.
              </p>
            </section>

            <section className="glass p-6 md:p-10 rounded-2xl md:rounded-[3rem]">
              <h3 className="text-blue-500 font-black text-[10px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                Our Solution
              </h3>
              <p className="text-zinc-300 text-sm md:text-lg leading-relaxed mb-8">
                {data.solution} We implemented our proprietary behavioral architecture, focusing on cognitive load reduction and high-velocity UI feedback loops.
              </p>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                <div className="p-4 md:p-6 glass rounded-xl border border-white/5">
                  <div className="text-white font-bold text-[9px] md:text-xs uppercase tracking-widest mb-1">Architecture</div>
                  <div className="text-zinc-600 text-[8px] md:text-[9px] font-mono">Edge-Native Stack</div>
                </div>
                <div className="p-4 md:p-6 glass rounded-xl border border-white/5">
                  <div className="text-white font-bold text-[9px] md:text-xs uppercase tracking-widest mb-1">Psychology</div>
                  <div className="text-zinc-600 text-[8px] md:text-[9px] font-mono">Conversion Engineering</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Stats */}
          <div className="space-y-6 md:space-y-8">
            <div className="glass p-6 md:p-8 rounded-2xl border-l-blue-500/60 border-l-4">
              <h4 className="text-white font-syne font-black text-base md:text-xl uppercase mb-6 tracking-tight">Outcome</h4>
              <div className="space-y-6">
                <div>
                  <div className="text-2xl md:text-3xl font-syne font-bold text-blue-500 mb-1">24/7</div>
                  <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest leading-none">Performance Monitoring</div>
                </div>
                <div>
                  <div className="text-2xl md:text-3xl font-syne font-bold text-white mb-1">{data.impact.split(';')[0]}</div>
                  <div className="text-[9px] text-zinc-600 font-black uppercase tracking-widest leading-none">Core Metric Lift</div>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 glass rounded-2xl">
              <div className="text-zinc-600 text-[8px] font-black uppercase tracking-widest mb-4 italic">Executive Quote</div>
              <p className="text-zinc-400 text-xs italic leading-relaxed">
                "{data.quote}"
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="mt-20 md:mt-24 pt-12 md:pt-16 border-t border-zinc-900 text-center">
          <h3 className="font-syne text-xl md:text-3xl font-bold text-white mb-8 uppercase tracking-tighter">Mirror these results for your business.</h3>
          <Link to="/contact" className="inline-block px-8 md:px-12 py-4 md:py-5 bg-blue-600 hover:bg-white hover:text-blue-600 rounded-full text-white font-black text-[10px] md:text-xs uppercase tracking-widest transition-all shadow-2xl shadow-blue-500/20">
            Request Similar Architecture
          </Link>
          <p className="mt-8 text-[8px] md:text-[9px] text-zinc-700 font-black uppercase tracking-[0.4em]">Confidentiality Guaranteed | Non-Disclosure Agreements Ready</p>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;