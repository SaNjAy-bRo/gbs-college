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
                <a href="tel:07259350707" className="font-medium text-gray-200 hover:text-bgs-yellow transition-colors">07259350707</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16" className="hover:text-[#25D366] transition-colors">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </span>
              <div>
                <p className="text-gray-500 text-xs mb-1">WhatsApp Chat</p>
                <a href="https://wa.me/917259350707" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-200 hover:text-[#25D366] transition-colors">07259350707</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Mail size={20} className="text-gray-400 shrink-0" />
              <a href="mailto:info@bgscollege.com" className="font-medium text-gray-200 hover:text-bgs-yellow transition-colors">info@bgscollege.com</a>
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
