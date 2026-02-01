import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 max-w-3xl mx-auto text-zinc-400 leading-relaxed">
      <h1 className="font-syne text-4xl md:text-5xl font-bold text-white mb-10 tracking-tighter uppercase">Terms of Engagement</h1>
      
      <div className="space-y-8">
        <section className="glass p-8 md:p-10">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-xs">1. Scope of Services</h2>
          <p className="text-sm md:text-base">
            MaxedDigital.services provides digital optimization and design services. Our standard 14-day delivery cycle begins once all required assets and discovery information are provided by the client.
          </p>
        </section>

        <section className="glass p-8 md:p-10">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-xs">2. Payment Terms</h2>
          <p className="text-sm md:text-base">
            Project fees are structured in milestone-based installments. For international clients, we utilize <strong>USDT (Tether) pegged to the USD via Binance</strong> or similar secure wallet transfers to ensure instant settlement and lower transaction friction.
          </p>
        </section>

        <section className="glass p-8 md:p-10">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-xs">3. Client Responsibilities</h2>
          <p className="text-sm md:text-base">
            Clients must provide timely feedback and access to necessary platforms. Delays in providing feedback may result in the suspension of the 14-day delivery guarantee.
          </p>
        </section>

        <section className="glass p-8 md:p-10">
          <h2 className="text-xl font-bold text-white mb-4 uppercase tracking-widest text-xs">4. Liability</h2>
          <p className="text-sm md:text-base">
            While we strive for maximum ROI and conversion results, digital performance is subject to external market factors. MaxedDigital.services is not liable for indirect or consequential damages.
          </p>
        </section>
      </div>

      <div className="pt-10 border-t border-zinc-900 mt-12">
        <p className="text-[10px] font-bold uppercase tracking-widest text-zinc-600">Last updated: {new Date().toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default TermsOfService;