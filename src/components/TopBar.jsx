import React from 'react';

const TopBar = () => {
  return (
    <div className="hidden md:flex justify-between items-center px-8 py-2 bg-gray-100 text-sm text-gray-700">
      <div className="font-medium">Service To Mankind Is Service To God</div>
      <div className="flex space-x-6 font-medium text-bgs-red">
        <a href="#admission" className="hover:underline">Admission Open</a>
        <a href="#apply" className="hover:underline">Apply Here</a>
        <a href="#enquire" className="hover:underline">Enquire Now</a>
      </div>
    </div>
  );
};

export default TopBar;
