import React from 'react';
import { Brain, Target, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from '../router';

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="px-4 py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h2>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Smart Quiz Card */}
          <AnimatedSection delay={0} animation="slide-left">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 active:scale-95 transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block transform"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600 dark:text-blue-400 mb-3 sm:mb-4 group-hover:text-blue-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 transform" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-blue-400 transition-colors duration-300">Smart Quiz</h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  AI-powered assessment to identify your strengths and optimal path forward
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>

          {/* Personalized Roadmaps Card */}
          <AnimatedSection delay={150} animation="slide-right">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Target className="w-8 h-8 text-green-600 dark:text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">Personalized Roadmaps</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Custom step-by-step plans designed specifically for your goals and experience level
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>

          {/* Beginner Guidance Card */}
          <AnimatedSection delay={300} animation="fade-up">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Users className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-400 transition-colors duration-300">Beginner Guidance</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Comprehensive support and mentoring for those just starting their online journey
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>

          {/* Path Planning Card */}
          <AnimatedSection delay={450} animation="fade-up">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Target className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4 group-hover:text-purple-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-purple-400 transition-colors duration-300">Path Planning</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Strategic planning to help you navigate from confusion to clarity and success
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>

          {/* Online Consulting Card */}
          <AnimatedSection delay={600} animation="slide-left">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <Brain className="w-8 h-8 text-cyan-600 dark:text-cyan-400 mb-4 group-hover:text-cyan-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors duration-300">Online Consulting</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  One-on-one expert consultation to accelerate your online business growth
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>

          {/* Start Free Card */}
          <AnimatedSection delay={750} animation="slide-right">
            <Link
              to="/x"
              className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400 mb-4 group-hover:text-green-300 transition-colors duration-300" />
                <h3 className="text-xl font-semibold mb-3 group-hover:text-green-400 transition-colors duration-300">Start Free</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Begin implementing your roadmap immediately with free resources and guidance
                </p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </Link>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;