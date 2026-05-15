import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Legacy from './components/Legacy';
import About from './components/About';
import MissionVision from './components/MissionVision';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import CTABanner from './components/CTABanner';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="font-sans antialiased text-slate-800 bg-white selection:bg-bgs-red/20">
      {/* For an Ad Landing Page, we hide distracting top bars and full navs */}
      <Header />
      
      <main>
        <Hero />
        <Programs />
        <Legacy />
        <About />
        <MissionVision />
        <Facilities />
        <Gallery />
        <CTABanner />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
