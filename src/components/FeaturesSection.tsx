
import React, { useEffect, useRef } from 'react';
import { DollarSign, Clock, Users, Layers } from 'lucide-react';

const features = [
  {
    icon: <DollarSign className="w-6 h-6 text-primary" />,
    title: 'Precise Cost Calculation',
    description: 'Calculate the exact cost of each slice needed to print your 3D object with precision.'
  },
  {
    icon: <Clock className="w-6 h-6 text-primary" />,
    title: 'Time Estimation',
    description: 'Get accurate estimates of time required to complete your 3D printing project.'
  },
  {
    icon: <Users className="w-6 h-6 text-primary" />,
    title: 'Labor Requirements',
    description: 'Determine the number of people needed to complete the project efficiently.'
  },
  {
    icon: <Layers className="w-6 h-6 text-primary" />,
    title: 'Slice Optimization',
    description: 'Optimize your slicing parameters to reduce costs and improve print quality.'
  }
];

const FeaturesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    itemRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      itemRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section 
      id="features" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-gray-50 opacity-0 translate-y-10 transition-all duration-700"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-50 text-primary rounded-full mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Everything you need for <span className="text-gradient">3D print costing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Our calculator helps you understand all the factors that influence the cost of your 3D printing projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={el => itemRefs.current[index] = el}
              className="glass-card rounded-xl p-6 opacity-0 translate-y-10 transition-all duration-700"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
