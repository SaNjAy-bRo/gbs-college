import React from 'react';

const NavBar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Medical', href: '#' },
    { name: 'Courses', href: '#' },
    { name: 'Colleges', href: '#' },
    { name: 'Academics', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Placement', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav className="hidden md:block bg-bgs-red w-full shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-start items-center h-14">
          <div className="flex space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white hover:text-gray-200 px-1 py-2 text-sm lg:text-base font-semibold transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
