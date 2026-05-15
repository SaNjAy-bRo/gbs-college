import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });

  const images = [
    { src: "/images/4.jpg", title: "Campus Aerial View", span: "md:col-span-2 md:row-span-2" },
    { src: "/images/2.jpg", title: "BGS Admin Block", span: "col-span-1" },
    { src: "/images/1.jpg", title: "BGS Main Building", span: "col-span-1" },
    { src: "/images/3.jpg", title: "BGS GIMS Block", span: "col-span-1" },
    { src: "/images/5.jpg", title: "Lecture Hall", span: "col-span-1" },
    { src: "/images/6-1.jpg", title: "Campus Greenery", span: "md:col-span-2" },
    { src: "/images/10.jpg", title: "Architecture & Planning", span: "col-span-1" },
    { src: "/images/image1-1.jpg", title: "Engineering Block", span: "col-span-1" },
  ];

  const openLightbox = (index) => setLightbox({ open: true, index });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });
  const goNext = (e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index + 1) % images.length })); };
  const goPrev = (e) => { e.stopPropagation(); setLightbox(prev => ({ ...prev, index: (prev.index - 1 + images.length) % images.length })); };

  return (
    <>
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-bgs-red font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Moments That Inspire</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-bgs-dark tracking-tight leading-tight">
              Explore Our Vibrant Campus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {images.map((img, i) => (
              <div 
                key={i} 
                className={`${img.span} rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group relative cursor-pointer`}
                onClick={() => openLightbox(i)}
              >
                <img 
                  src={img.src} 
                  alt={img.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bgs-dark/90 via-bgs-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <h4 className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{img.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Overlay */}
      {lightbox.open && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-in fade-in"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-2.5 rounded-full transition-all duration-200 border border-white/20"
          >
            <X size={24} />
          </button>

          {/* Previous Button */}
          <button 
            onClick={goPrev}
            className="absolute left-2 md:left-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 border border-white/20"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <div className="max-w-5xl max-h-[85vh] w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[lightbox.index].src} 
              alt={images[lightbox.index].title}
              className="max-w-full max-h-[75vh] object-contain rounded-xl shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="text-white font-bold text-xl">{images[lightbox.index].title}</h3>
              <p className="text-slate-400 text-sm mt-1">{lightbox.index + 1} / {images.length}</p>
            </div>
          </div>

          {/* Next Button */}
          <button 
            onClick={goNext}
            className="absolute right-2 md:right-6 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200 border border-white/20"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default Gallery;
