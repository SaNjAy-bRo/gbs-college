import React from 'react';
import { Award, Globe2, BookOpen, Users } from 'lucide-react';

const Legacy = () => {
  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative">
            {/* Background decorative blob */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-bgs-yellow/20 rounded-full blur-[60px]"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 z-10">
              <img 
                src="/images/4.jpg" 
                alt="BGS Educational Campus Aerial View" 
                className="w-full h-auto object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-bgs-dark/40 to-transparent"></div>
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-4 animate-bounce-slow" style={{ animation: 'bounce 3s infinite', animationTimingFunction: 'cubic-bezier(0.8, 0, 1, 1)'}}>
              <style>{`
                @keyframes bounce {
                  0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
                  50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
                }
              `}</style>
              <div className="bg-bgs-red/10 p-3 rounded-full text-bgs-red">
                <Award size={32} />
              </div>
              <div>
                <p className="text-3xl font-extrabold text-bgs-dark">500+</p>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">Institutions</p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-bgs-red font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Excellence Beyond Boundaries</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-bgs-dark tracking-tight leading-tight">
                A Legacy of Educational Brilliance
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Shri Swamigalu's ideology resulted in the development of the great Sri Adichunchanagiri Shikshana Trust. Furnished with a completely equipped educational campus, we foster educational requirements from Pre-School to professional degree courses.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="mt-1 bg-bgs-light p-2 rounded-lg text-bgs-red shrink-0"><Globe2 size={24} /></div>
                <div>
                  <h4 className="font-bold text-bgs-dark mb-1">Global Placement</h4>
                  <p className="text-sm text-slate-600">Guaranteed placement in prestigious institutions across the globe.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 bg-bgs-light p-2 rounded-lg text-bgs-red shrink-0"><BookOpen size={24} /></div>
                <div>
                  <h4 className="font-bold text-bgs-dark mb-1">Modern Learning</h4>
                  <p className="text-sm text-slate-600">iPad intensive and technology-oriented learning environment.</p>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Legacy;
