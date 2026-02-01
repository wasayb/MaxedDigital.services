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
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const handleAuditClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isActivating) return;
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
      navigate('/contact');
    }, 400);
  };

  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'Process', path: '/how-it-works' },
    { name: 'About', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center transition-all duration-500 ${scrolled ? 'glass px-6 sm:px-8 py-3 rounded-full' : ''}`}>
          <div className="flex flex-col">
            <Link to="/" className="font-syne text-base md:text-2xl font-black tracking-tighter text-white group flex items-baseline gap-0.5">
              <span className="transition-transform group-hover:scale-105 duration-300 inline-block">MaxedDigital</span>
              <span className="text-blue-500 opacity-80 group-hover:opacity-100 transition-opacity text-[0.6em] md:text-base">.services</span>
            </Link>
            <div className="hidden md:flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-[7px] font-mono text-zinc-600 uppercase tracking-[0.4em]">System Status: Nominal</span>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all hover:text-blue-500 nav-link-underline ${
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
              onPointerCancel={() => setIsTouched(false)}
              onPointerLeave={() => setIsTouched(false)}
              className={`bg-white text-black px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5 shimmer-btn ${isActivating ? 'scale-90 !bg-blue-600 !text-white' : ''} ${isTouched ? 'scale-95 bg-zinc-200' : ''}`}
            >
              {isActivating ? 'Linking...' : 'Initialize Audit'}
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 relative z-[110] transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div 
        className={`md:hidden fixed inset-0 z-[90] flex items-center justify-center p-6 text-center transition-all duration-700 ease-in-out ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="absolute inset-0 glass bg-black/95 backdrop-blur-[60px] !rounded-none !border-none"></div>
        <div className="relative w-full space-y-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block text-3xl font-syne font-extrabold text-white hover:text-blue-500 transition-all transform tracking-tighter ${
                isOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 75}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <button
              onClick={handleAuditClick}
              onPointerDown={() => setIsTouched(true)}
              onPointerUp={() => setIsTouched(false)}
              onPointerCancel={() => setIsTouched(false)}
              onPointerLeave={() => setIsTouched(false)}
              className={`inline-block px-10 py-4 bg-blue-600 rounded-full text-base font-syne font-black text-white uppercase tracking-tighter shadow-2xl transition-all ${isTouched ? 'scale-95 bg-blue-700' : 'active:scale-95 interactive-scale'}`}
            >
              {isActivating ? 'Linking...' : 'Book My Slot'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;