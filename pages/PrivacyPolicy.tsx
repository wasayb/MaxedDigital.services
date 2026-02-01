import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-zinc-400 leading-relaxed relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-blue-500/5 blur-[120px] -z-10 rounded-full"></div>

      <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-10 tracking-tighter uppercase">Privacy Protocol</h1>
      
      <div className="space-y-8">
        <section className="glass p-8 md:p-10 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg">
              <svg className="w-6 h-6 animate-[bounce_3s_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-xs">1. Data Collection</h2>
          </div>
          <p className="text-sm md:text-base mb-6 md:pl-16">
            We collect information that you provide directly to us through our lead generation forms, including your name, business details, website URL, and contact information. This data is used solely to evaluate your business for our conversion services.
          </p>
        </section>

        <section className="glass p-8 md:p-10 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-xs">2. Use of Information</h2>
          </div>
          <p className="text-sm md:text-base mb-6 md:pl-16">
            The information we collect is used to reach out regarding your inquiry, provide your free conversion audit, and customize our proposals. We do not sell or share your data with third-party marketers.
          </p>
        </section>

        <section className="glass p-8 md:p-10 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg">
              <svg className="w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-xs">3. Security</h2>
          </div>
          <p className="text-sm md:text-base mb-6 md:pl-16">
            We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or alteration. All form submissions are encrypted and stored on secure servers.
          </p>
        </section>

        <section className="glass p-8 md:p-10 group">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-zinc-950/40 border border-white/5 flex items-center justify-center text-blue-500 group-hover:border-blue-500/50 transition-all duration-500 shadow-lg">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white uppercase tracking-widest text-xs">4. Your Rights</h2>
          </div>
          <p className="text-sm md:text-base mb-6 md:pl-16">
            You have the right to request access to the data we hold about you or request its deletion at any time by contacting us at maxeddigital.services@gmail.com.
          </p>
        </section>
      </div>
      
      <div className="pt-10 border-t border-zinc-900 mt-12">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;