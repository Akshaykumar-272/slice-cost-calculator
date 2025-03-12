
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ease-in-out",
        scrolled 
          ? "bg-white/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="font-medium text-lg tracking-tight">
          <span className="text-primary font-semibold">Slice</span>Cost
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
            Home
          </Link>
          <Link to="/calculator" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
            Calculator
          </Link>
          <a href="#features" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
            Features
          </a>
          <a href="#team" className="text-sm font-medium text-gray-800 hover:text-primary transition-colors">
            Team
          </a>
        </nav>
        <Link 
          to="/calculator" 
          className="text-sm font-medium px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
        >
          Try Now
        </Link>
      </div>
    </header>
  );
};

export default Header;
