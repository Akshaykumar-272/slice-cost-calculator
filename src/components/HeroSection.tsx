
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-6 max-w-4xl mx-auto text-balance">
              <span className="text-gradient">3D Printing</span> Slice Cost Calculator
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Accurately calculate the cost of each slice for your 3D printing projects, including labor costs and resource requirements.
            </p>
          </div>
          
          <div className="flex justify-center mb-16 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/printing-config" 
              className="px-8 py-3 bg-primary rounded-lg text-white font-medium transition-all hover:shadow-lg hover:bg-primary/90 flex items-center justify-center"
            >
              Try Me
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          
          <div className="relative w-full max-w-4xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="/placeholder.svg" 
                alt="3D printing slice calculator" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
