import React from 'react';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-bgs-dark text-white relative overflow-hidden">
      {/* Background Patterns */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-b from-bgs-yellow to-transparent blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          
          {/* YouTube Video Embed */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/10 aspect-video">
              <iframe
                src="https://www.youtube.com/embed/6gq-TNFSJDI?rel=0"
                title="About BGS College"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-bgs-yellow font-bold text-sm tracking-[0.2em] uppercase mb-4 block">Inspire. Educate. Transform.</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                About BGS College
              </h2>
            </div>
            
            <div className="w-20 h-1 bg-gradient-to-r from-bgs-red to-rose-600 rounded-full"></div>
            
            <p className="text-slate-300 text-lg leading-relaxed">
              Born out of the educational perception of His Holiness Jagadguru Padmabushana followed by Sri Sri Sri Dr. Balagangadharanatha Maha Swamiji and President Adichunchanagiri Shikshana, we are dedicated to holistic education.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
