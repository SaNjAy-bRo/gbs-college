import React, { useState, useEffect } from 'react';
import { PhoneCall } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Bar with Marquee */}
      <div className={`w-full transition-all duration-500 ease-in-out origin-top ${scrolled ? 'h-0 opacity-0 overflow-hidden' : 'opacity-100'}`}>
        {/* Vibrant Red Line */}
        <div className="h-2 md:h-2.5 bg-[#E31E24] w-full"></div>
        {/* Professional Golden Yellow Marquee */}
        <div className="bg-[#FFC72C] text-gray-900 py-2 md:py-2.5 overflow-hidden flex items-center whitespace-nowrap group relative shadow-sm">
          <div className="animate-marquee flex-shrink-0 flex items-center justify-around min-w-full gap-8 pr-8 group-hover:[animation-play-state:paused]">
            <span className="text-xs md:text-[13px] font-bold tracking-widest uppercase">
              Welcome to BGS College &nbsp;|&nbsp; Admissions Open for 2024-25 &nbsp;|&nbsp; Programs: MBBS, MD/MS, Allied Health Sciences &nbsp;|&nbsp; A Center of Excellence in Medical Education
            </span>
          </div>
          <div className="animate-marquee flex-shrink-0 flex items-center justify-around min-w-full gap-8 pr-8 group-hover:[animation-play-state:paused]" aria-hidden="true">
            <span className="text-xs md:text-[13px] font-bold tracking-widest uppercase">
              Welcome to BGS College &nbsp;|&nbsp; Admissions Open for 2024-25 &nbsp;|&nbsp; Programs: MBBS, MD/MS, Allied Health Sciences &nbsp;|&nbsp; A Center of Excellence in Medical Education
            </span>
          </div>
        </div>
      </div>

      {/* Main Floating Nav */}
      <div className={`transition-all duration-300 ${scrolled ? 'py-2' : 'py-3 md:py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className={`flex justify-between items-center px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20' 
            : 'bg-white/95 shadow-md'
        }`}>
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-bgs-red flex items-center justify-center bg-white text-bgs-red font-bold text-lg md:text-xl shrink-0 shadow-sm">
              BGS
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-lg md:text-xl font-bold text-bgs-dark uppercase leading-tight tracking-tight">BGS College</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <a 
              href="tel:8050318884" 
              className="group flex items-center space-x-2 bg-gradient-to-r from-bgs-red to-rose-600 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 font-bold"
            >
              <PhoneCall size={18} className="fill-white group-hover:animate-pulse" />
              <span className="text-sm md:text-base tracking-wide">8050318884</span>
            </a>
          </div>
        </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
