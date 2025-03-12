
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          entry.target.classList.remove('opacity-0', 'translate-y-4');
        }
      },
      { threshold: 0.1 }
    );
    
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center pt-20 opacity-0 translate-y-4 transition-all duration-1000"
    >
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-8 animate-fade-in">
            3D Printing Cost Estimation Tool
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
            Calculate the exact cost of 
            <span className="text-gradient block mt-2">3D printing slices</span>
          </h1>
          
          <p className="max-w-2xl text-lg md:text-xl text-gray-600 mb-12 text-balance animate-fade-in" style={{ animationDelay: '400ms' }}>
            Precisely determine material costs, labor requirements, and time estimates for your 3D printing projects with our advanced slice-based calculator.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <Link 
              to="/calculator" 
              className="group relative px-8 py-4 bg-primary text-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center justify-center font-medium">
                Try Me 
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
            </Link>
            
            <a 
              href="#features" 
              className="px-8 py-4 bg-gray-100 text-gray-800 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
