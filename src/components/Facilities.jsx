import React from 'react';

const Facilities = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-bgs-red font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Path to Success</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-bgs-dark tracking-tight leading-tight">
                Gateway to Brighter Futures
              </h2>
            </div>
            
            <p className="text-slate-600 text-lg leading-relaxed">
              Our campus features modern buildings, advanced labs, and an elegant administrative block that houses support services for students. With cutting-edge technology, comprehensive libraries, and comfortable accommodations, we provide the ideal setting for success. 
            </p>
            <p className="text-slate-600 text-lg leading-relaxed">
              Our sports facilities and green spaces create a balanced environment where academic excellence and personal growth flourish.
            </p>
          </div>

          {/* DiveIn Virtual Tour */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200"
              style={{ position: 'relative', paddingBottom: '75%', height: 0 }}
            >
              <iframe
                src="https://viewer.divein.studio/story/tR8-W95"
                title="BGS Admin Block Virtual Tour"
                allow="gyroscope; accelerometer; xr-spatial-tracking; fullscreen"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Facilities;
