import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Specialization from './components/Specialization';
import Process from './components/Process';
import About from './components/About';
import ToolkitAndEducation from './components/ToolkitAndEducation';
import Studio from './components/Studio';
import Insights from './components/Insights';
import Portfolio from './components/Portfolio';
import Reviews from './components/Reviews';
import RiskFreeCTA from './components/RiskFreeCTA';
import FAQ from './components/FAQ';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import BackToTop from './components/BackToTop';
import './App.css';

import { LanguageProvider } from './context/LanguageContext';
import useScrollReveal from './hooks/useScrollReveal';

function AppInner() {
  useScrollReveal();

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Specialization /></div>
        <div className="reveal"><Process /></div>
        <div className="reveal"><Portfolio /></div>
        <div className="reveal"><ToolkitAndEducation /></div>
        <div className="reveal"><Studio /></div>
        <div className="reveal"><Insights /></div>
        <div className="reveal"><Reviews /></div>
        <div className="reveal"><Testimonials /></div>
        <div className="reveal"><RiskFreeCTA /></div>
        <div className="reveal"><FAQ /></div>
      </main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}

export default App;
