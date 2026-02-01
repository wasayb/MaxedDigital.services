import React from 'react';
import LeadForm from '../components/LeadForm';
import { BRAND } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 relative overflow-hidden px-4 sm:px-6">
      {/* Decorative Parallax Background Elements */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/[0.03] blur-[150px] rounded-full -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          <div className="lg:col-span-5 space-y-8 md:space-y-16 reveal">
            <div className="text-center lg:text-left">
              <div className="text-blue-500 font-black text-[9px] uppercase tracking-[0.4em] mb-6">Phase One: Intake</div>
              <h1 className="section-title font-syne font-extrabold text-white mb-6 tracking-tighter uppercase leading-[1.05]">
                Secure <br /><span className="text-blue-500">Your Audit.</span>
              </h1>
              <p className="text-zinc-500 text-sm md:text-xl font-medium leading-relaxed max-w-lg mx-auto lg:mx-0">
                We qualify every partnership rigorously. Submit your current architecture details to receive a custom conversion blueprint within 24 hours.
              </p>
            </div>

            <div className="space-y-6 md:space-y-10 pt-4 max-w-sm mx-auto lg:mx-0">
              <div className="flex gap-4 sm:gap-8 group items-center lg:items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-900/50 border border-zinc-900 rounded-[1rem] flex items-center justify-center text-blue-500 flex-shrink-0 transition-all duration-500 shadow-2xl">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-syne font-bold text-sm sm:text-lg mb-1 uppercase tracking-tight">Direct Comms</h4>
                  <a href={`mailto:${BRAND.email}`} className="text-zinc-500 hover:text-blue-500 transition-colors font-medium text-xs sm:text-lg lowercase block break-all">{BRAND.email}</a>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-8 group items-center lg:items-start">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-zinc-900/50 border border-zinc-900 rounded-[1rem] flex items-center justify-center text-blue-500 flex-shrink-0 transition-all duration-500 shadow-2xl">
                  <svg className="w-5 h-5 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-syne font-bold text-sm sm:text-lg mb-1 uppercase tracking-tight">Instagram</h4>
                  <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-blue-500 transition-colors font-medium text-xs sm:text-lg lowercase block">@maxeddigital.services</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 reveal w-full" style={{ transitionDelay: '200ms' }}>
            <LeadForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;