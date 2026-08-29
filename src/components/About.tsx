import React from 'react';
import { ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from '../router';

const About: React.FC = () => {
  return (
    <section id="about" className="px-4 py-16 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-600 bg-clip-text text-transparent">
            About Elyntric
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={200} animation="fade-down">
          <p className="text-lg md:text-xl mb-8 text-gray-600 dark:text-gray-300">
            We understand the overwhelming confusion that comes with starting an online business. 
            That's why we created Elyntric - to cut through the noise and provide clear, actionable guidance.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={400} animation="slide-down">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Our mission is simple: help confused beginners find their path and start building their online presence 
            with confidence & clarity.
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={600} animation="fade-in">
          <div className="mt-12">
            <Link
              to="/about"
              className="relative group bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                see all
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;