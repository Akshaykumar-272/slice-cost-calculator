
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="font-medium text-lg tracking-tight">
              <span className="text-primary font-semibold">Slice</span>Cost
            </Link>
            <p className="text-sm text-gray-500 mt-2">
              Precise 3D printing cost calculator
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/calculator" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Calculator
            </Link>
            <a href="#features" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Features
            </a>
            <a href="#team" className="text-sm text-gray-600 hover:text-primary transition-colors">
              Team
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">
            &copy; {year} SliceCost. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
