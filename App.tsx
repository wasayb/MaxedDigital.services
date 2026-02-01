import React, { useEffect, useState, useLayoutEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Performance Optimization: Route-based Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const HowItWorks = lazy(() => import('./pages/HowItWorks'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Contact = lazy(() => import('./pages/Contact'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Changed behavior from 'smooth' to 'auto' for instant response
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto'
    });
  }, [pathname]);
  return null;
};

// Simplified Loading State for smooth transitions
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin"></div>
  </div>
);

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(false);
    // Instant entry for high-velocity feel
    const timeout = setTimeout(() => setIsReady(true), 10);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`transition-all duration-250 cubic-bezier(0.23, 1, 0.32, 1) transform-gpu min-h-screen flex flex-col ${isReady ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      {children}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col selection:bg-blue-500/30 selection:text-blue-200">
        <ScrollToTop />
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<PageLoader />}>
            <PageWrapper>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/case-study/:slug" element={<CaseStudy />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
              </Routes>
            </PageWrapper>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;