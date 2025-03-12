
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Calculator = () => {
  useEffect(() => {
    // Scroll to top when the page loads
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <Link 
            to="/" 
            className="inline-flex items-center text-sm text-gray-600 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to home
          </Link>
          
          <div className="glass-card rounded-xl p-8 md:p-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">3D Printing Slice Calculator</h1>
            <p className="text-gray-600 mb-8">
              Our calculator helps you determine the exact cost of each slice needed for your 3D printing project, 
              along with labor costs and resources required.
            </p>
            
            <div className="space-y-8">
              <p className="text-lg font-medium">Calculator coming soon...</p>
              <p className="text-gray-600">
                We're currently developing this feature. Check back soon for the complete calculator functionality.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Calculator;
