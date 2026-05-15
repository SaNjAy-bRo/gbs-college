import React from 'react';

const Ticker = () => {
  return (
    <div className="bg-bgs-yellow text-bgs-dark py-2 overflow-hidden flex whitespace-nowrap border-b border-yellow-400">
      {/* 
        Using a simple CSS animation for the ticker. 
        In Tailwind v4, we can just use inline styles for the keyframes or standard utility if configured.
        We'll do a simple infinite marquee.
      */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 30s linear infinite;
        }
      `}</style>
      
      <div className="animate-marquee font-medium text-sm md:text-base">
        <span className="mx-4 font-bold">Welcome to BGS Group of Institutions</span> | 
        <span className="mx-4 font-bold">Admissions Open for 2024-25</span> | 
        <span className="mx-4">Programs: MBBS, MD/MS, Allied Health Sciences</span> | 
        <span className="mx-4">A Center of Excellence in Medical Education</span> | 
        
        {/* Duplicate for seamless looping */}
        <span className="mx-4 font-bold">Welcome to BGS Group of Institutions</span> | 
        <span className="mx-4 font-bold">Admissions Open for 2024-25</span> | 
        <span className="mx-4">Programs: MBBS, MD/MS, Allied Health Sciences</span> | 
        <span className="mx-4">A Center of Excellence in Medical Education</span> |
        
        {/* Duplicate again */}
        <span className="mx-4 font-bold">Welcome to BGS Group of Institutions</span> | 
        <span className="mx-4 font-bold">Admissions Open for 2024-25</span> | 
        <span className="mx-4">Programs: MBBS, MD/MS, Allied Health Sciences</span> | 
        <span className="mx-4">A Center of Excellence in Medical Education</span>
      </div>
    </div>
  );
};

export default Ticker;
