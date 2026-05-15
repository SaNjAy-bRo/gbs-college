import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "Medical",
      description: "Advanced clinical practice and modern scientific medicine education designed for the healthcare leaders of tomorrow.",
      image: "/images/1.jpg",
      tag: "MBBS, MD/MS"
    },
    {
      title: "Nursing",
      description: "Comprehensive care training focused on individuals, families, and communities to attain optimal health and quality of life.",
      image: "/images/3.jpg",
      tag: "B.Sc, M.Sc"
    },
    {
      title: "Allied Health",
      description: "Diagnostic, technical, and therapeutic education to make the healthcare system function seamlessly.",
      image: "/images/5.jpg",
      tag: "BPT, Pharma"
    }
  ];

  return (
    <section id="programs" className="py-20 md:py-32 bg-bgs-light relative">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-16 max-w-3xl mx-auto">
          <span className="text-bgs-red font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Excellence. Transformation. Growth.</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-bgs-dark tracking-tight leading-tight mb-6">
            Explore Our Diverse Opportunities
          </h2>
          <p className="text-slate-600 text-lg">
            Choose from a wide range of specialized programs designed to equip you with the skills demanded by modern healthcare systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="group border-0 shadow-sm hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden bg-white translate-y-0 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgs-dark/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white/20 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full border border-white/30">
                    {program.tag}
                  </span>
                </div>
              </div>
              <CardContent className="p-8 text-left">
                <h4 className="text-2xl font-bold text-bgs-dark mb-3 group-hover:text-bgs-red transition-colors duration-300">{program.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
