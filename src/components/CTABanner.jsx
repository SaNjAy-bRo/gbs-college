import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden w-full">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/6-1.jpg" 
          alt="Campus Background" 
          className="w-full h-full object-cover object-center"
        />
        {/* Rich Dark Overlay */}
        <div className="absolute inset-0 bg-bgs-dark/80 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-bgs-dark via-bgs-dark/90 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-bgs-yellow font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Take The Next Step</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-tight">
            Ready to Start Your <span className="text-bgs-yellow">Journey?</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
            Admissions are now open for the 2024-25 academic year. Secure your spot in one of India's leading medical and educational institutions and shape a brighter future.
          </p>
          
          <button className="bg-gradient-to-r from-bgs-yellow to-amber-500 text-bgs-dark font-extrabold px-10 py-5 rounded-full text-lg shadow-[0_0_20px_rgba(245,158,11,0.3)] hover:shadow-[0_0_40px_rgba(245,158,11,0.7)] transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 flex items-center group">
            Apply Now 
            <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
