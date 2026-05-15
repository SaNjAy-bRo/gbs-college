import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-bgs-dark pt-32 pb-16 overflow-hidden">
      {/* Background Image with Deep Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/2.jpg" 
          alt="BGS Admin Block" 
          className="w-full h-full object-cover object-center opacity-80 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bgs-dark/90 via-bgs-dark/60 to-bgs-dark/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-bgs-dark via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-5 py-2 mb-8">
          <span className="flex h-2.5 w-2.5 rounded-full bg-bgs-yellow animate-pulse"></span>
          <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">Admissions Open 2024-25</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] tracking-tight mb-8">
          Shape Your Future at <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-bgs-yellow to-amber-300">
            BGS College
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl leading-relaxed">
          <span className="md:hidden">Join the legacy of excellence. World-class infrastructure & guaranteed placements.</span>
          <span className="hidden md:inline">Join the legacy of excellence. World-class infrastructure, guaranteed placements, and a commitment to your professional growth in healthcare and science.</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center mb-16 w-full max-w-[280px] sm:max-w-none mx-auto">
          <a href="#apply" className="inline-flex items-center justify-center bg-bgs-yellow text-bgs-dark font-extrabold px-6 py-3.5 sm:px-10 sm:py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.6)] group transform hover:-translate-y-1 w-full sm:w-auto text-[15px] sm:text-base">
            Apply Now
            <ArrowRight className="ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform" size={18} />
          </a>
          <a href="#courses" className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold px-6 py-3.5 sm:px-10 sm:py-4 rounded-full hover:bg-white/20 transition-all duration-300 w-full sm:w-auto text-[15px] sm:text-base">
            Explore Programs
          </a>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 text-sm md:text-base text-slate-300 font-medium">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-bgs-yellow" />
            <span>500+ Institutions</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-bgs-yellow" />
            <span>Global Placements</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={20} className="text-bgs-yellow" />
            <span>World-Class Campus</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
