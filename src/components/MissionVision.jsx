import React from 'react';
import { Target, Lightbulb } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-20 md:py-32 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-10">
          
          {/* Mission Card */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Target size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-bgs-dark mb-6">Our Mission</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To cultivate a globally recognized educational institution that delivers comprehensive learning experiences, integrating ethical values, intellectual development, and social responsibility across all disciplines.
            </p>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl p-10 md:p-14 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300 group">
            <div className="w-16 h-16 bg-amber-50 text-amber-500 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
              <Lightbulb size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-bgs-dark mb-6">Our Vision</h2>
            <p className="text-slate-600 text-lg leading-relaxed font-medium">
              To provide learning opportunities that foster students in ethical values & intelligent development in all streams of education, empowering them to become sensible and contributing members of society.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;
