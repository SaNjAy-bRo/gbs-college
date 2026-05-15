import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-bgs-dark text-slate-300 py-20 px-4 md:px-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        
        {/* Branding Column */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-xl border border-white/10 w-fit">
            <div className="w-12 h-12 shrink-0">
              <img src="/images/logo.png" alt="BGS College Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-bgs-red uppercase leading-tight tracking-tight">BGS College</span>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            BGS Global Institute Of Allied Health Sciences BGS Global Institute Of Nursing Sciences.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 rounded-full bg-[#4267B2] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
          </div>
        </div>

        {/* Contact Column */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
          <div className="space-y-6 text-sm">
            <div className="flex items-start space-x-4">
              <MapPin size={24} className="text-gray-400 shrink-0 mt-1" />
              <div>
                <p className="text-gray-500 text-xs mb-1">Visit Location</p>
                <p className="font-medium text-gray-200">BGS Health & Education City<br/>Kengeri, Bangalore - 560060</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Phone size={20} className="text-gray-400 shrink-0" />
              <div>
                <p className="text-gray-500 text-xs mb-1">Monday-Friday: 08am-5pm</p>
                <p className="font-medium text-gray-200">8050318884</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail size={20} className="text-gray-400 shrink-0" />
              <p className="font-medium text-gray-200">info@bgscollege.com</p>
            </div>
          </div>
        </div>

        {/* Courses Column */}
        <div>
          <h4 className="text-white font-bold text-lg mb-6">Programs</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#programs" className="hover:text-bgs-yellow transition-colors">Medical (MBBS, MD/MS)</a></li>
            <li><a href="#programs" className="hover:text-bgs-yellow transition-colors">Nursing Sciences</a></li>
            <li><a href="#programs" className="hover:text-bgs-yellow transition-colors">Allied Health Sciences</a></li>
            <li><a href="#programs" className="hover:text-bgs-yellow transition-colors">Physiotherapy (BPT)</a></li>
            <li><a href="#programs" className="hover:text-bgs-yellow transition-colors">Pharmaceutical Sciences</a></li>
          </ul>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
