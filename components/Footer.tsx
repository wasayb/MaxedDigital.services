import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#020204] border-t border-zinc-900 py-20 overflow-hidden">
      {/* Premium Mesh Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3Cturbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[80%] h-full bg-blue-600/10 blur-[160px] rounded-full animate-[pulse_10s_infinite_alternate] mix-blend-screen"></div>
        <div className="absolute -top-1/2 -right-1/4 w-[60%] h-full bg-blue-900/10 blur-[160px] rounded-full animate-[pulse_15s_infinite_alternate-reverse] mix-blend-screen"></div>
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-400/5 blur-[100px] rounded-full animate-[bounce_20s_infinite_alternate]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 lg:gap-24">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="font-syne text-xl sm:text-2xl font-black text-white group inline-block whitespace-nowrap mb-6">
              MaxedDigital<span className="text-blue-500 group-hover:text-blue-400 transition-colors">.services</span>
            </Link>
            <p className="text-zinc-500 max-w-sm leading-relaxed mb-8">
              {BRAND.tagline}. We architect high-yield digital machines that prioritize performance over pixels.
            </p>
            <div className="flex flex-col space-y-4">
              <a href={`mailto:${BRAND.email}`} className="text-xs font-black text-zinc-600 hover:text-blue-500 transition-all uppercase tracking-[0.3em] flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                {BRAND.email}
              </a>
              <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-zinc-600 hover:text-blue-500 transition-all uppercase tracking-[0.3em] flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                @maxeddigital.hq
              </a>
            </div>
            <div className="mt-10 flex flex-col space-y-3">
               <span className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-700">Financial Protocol</span>
               <div className="flex items-center gap-3">
                  <div className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-lg text-[9px] font-black text-blue-500 uppercase tracking-widest shadow-xl">USDT Settlement Active</div>
               </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10">Navigation</h4>
            <ul className="space-y-5">
              <li><Link to="/services" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">Process</Link></li>
              <li><Link to="/about" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">About</Link></li>
              <li><Link to="/faq" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-black text-white uppercase tracking-[0.4em] mb-10">Governance</h4>
            <ul className="space-y-5">
              <li><Link to="/privacy" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm font-medium text-zinc-500 hover:text-blue-500 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-black text-zinc-700 uppercase tracking-[0.3em]">© 2022 MaxedDigital.services</p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3 group">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-[9px] font-black text-zinc-700 uppercase tracking-[0.3em] group-hover:text-blue-500 transition-colors">Engineered for Velocity</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;