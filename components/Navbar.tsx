import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { BRAND } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isActivating, setIsActivating] = useState(false);
  const [isTouched, setIsTouched] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleAuditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isActivating) return;
    setIsActivating(true);
    // Removed artificial delay for instant navigation
    navigate('/contact');
    // Cleanup state immediately after navigation triggers
    setIsActivating(false);
  };

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu ${scrolled ? 'py-3 md:py-4' : 'py-6 md:py-8'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`flex justify-between items-center transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu ${scrolled ? 'glass px-6 sm:px-8 py-2 md:py-3 rounded-full' : ''}`}>
            <div className="flex flex-col">
              <Link to="/" className="font-syne text-base md:text-2xl font-black tracking-tighter text-white group flex items-baseline gap-0.5">
                <span className="transition-transform group-hover:scale-105 duration-300 ease-out inline-block transform-gpu">MaxedDigital</span>
                <span className="text-blue-500 opacity-80 group-hover:opacity-100 transition-all duration-300 text-[0.8em] md:text-lg">.services</span>
              </Link>
            </div>
            
            <div className="hidden md:flex space-x-8 lg:space-x-10 items-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-200 cubic-bezier(0.23, 1, 0.32, 1) hover:text-blue-500 transform-gpu hover:translate-y-[-1px] ${
                    location.pathname === link.path ? 'text-blue-500' : 'text-zinc-500'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={handleAuditClick}
                onPointerDown={() => setIsTouched(true)}
                onPointerUp={() => setIsTouched(false)}
                className={`bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all duration-200 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu hover:scale-105 hover:shadow-xl hover:shadow-white/10 active:scale-95 ${isActivating ? 'scale-90 !bg-blue-600 !text-white' : ''} ${isTouched ? 'scale-95 bg-zinc-200' : ''}`}
              >
                {isActivating ? 'Linking...' : 'Initialize Audit'}
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-3 relative z-[110] transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) rounded-full flex items-center justify-center transform-gpu active:scale-90 ${isOpen ? 'bg-blue-600 text-white shadow-lg' : 'text-white'}`}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`md:hidden fixed inset-0 z-[95] flex flex-col transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/98 backdrop-blur-[40px] transform-gpu"></div>
        
        <div className="relative z-10 flex flex-col h-full overflow-y-auto">
          <div className="px-8 pt-24 pb-4"></div>

          <div className="flex-grow flex flex-col items-start px-8 space-y-6">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block text-4xl sm:text-5xl font-syne font-black text-white hover:text-blue-500 transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) transform transform-gpu tracking-tighter ${
                  isOpen ? 'translate-x-0 opacity-100' : '-translate-x-5 opacity-0'
                }`}
                style={{ transitionDelay: `${isOpen ? 50 + idx * 30 : 0}ms` }}
              >
                {link.name}
              </Link>
            ))}
            
            <div className={`pt-8 transition-all duration-300 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
              <button
                onClick={handleAuditClick}
                className="inline-block px-10 py-4 bg-blue-600 rounded-full text-lg font-syne font-black text-white uppercase tracking-tighter shadow-2xl active:scale-95 transition-all duration-200"
              >
                {isActivating ? 'Linking...' : 'Initialize Audit'}
              </button>
            </div>
          </div>

          <div className={`p-10 mt-auto border-t border-white/5 flex flex-col items-start gap-6 transition-all duration-500 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '250ms' }}>
            <div className="flex flex-col gap-1">
              <span className="text-[8px] font-black text-zinc-700 uppercase tracking-[0.4em]">Direct Uplinks</span>
              <div className="flex gap-6">
                <a href={BRAND.instagram} target="_blank" rel="noopener noreferrer" className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-all duration-200">Instagram</a>
                <a href={`mailto:${BRAND.email}`} className="text-[10px] font-black text-zinc-500 hover:text-white uppercase tracking-[0.2em] transition-all duration-200">Email</a>
              </div>
            </div>
            
            <div className="flex items-center gap-2 bg-zinc-950/50 px-3 py-1.5 rounded-lg border border-zinc-900 transition-all duration-300 transform-gpu hover:border-zinc-700">
              <span className="w-1 h-1 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.4)]"></span>
              <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-[0.3em]">Status: Optimal</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;