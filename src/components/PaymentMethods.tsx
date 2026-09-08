import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const PaymentMethods: React.FC = () => {
  return (
    <section className="px-4 py-16 bg-white dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto text-center">
        <AnimatedSection animation="fade-up">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Payment Methods</h2>
        </AnimatedSection>
        <AnimatedSection delay={200} animation="fade-up">
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            We accept multiple payment methods for your convenience
          </p>
        </AnimatedSection>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* PayPal */}
          <AnimatedSection delay={0} animation="slide-up">
            <div className="relative group bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <span className="text-6xl font-bold text-blue-500 group-hover:text-blue-400 transition-colors duration-300 group-hover:scale-105 transform">Pp</span>
                <span className="text-gray-800 dark:text-white font-semibold text-lg group-hover:text-blue-400 transition-colors duration-300">PayPal</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-blue-400/30 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>

          {/* Stripe */}
          <AnimatedSection delay={150} animation="slide-down">
            <div className="relative group bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <span className="text-6xl font-bold text-purple-400 group-hover:text-purple-300 transition-colors duration-300 group-hover:scale-105 transform">S</span>
                <span className="text-gray-800 dark:text-white font-semibold text-lg group-hover:text-purple-400 transition-colors duration-300">Stripe</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/30 to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>

          {/* Apple Pay */}
          <AnimatedSection delay={300} animation="slide-up">
            <div className="relative group bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-500/0 via-gray-500/10 to-gray-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <svg className="w-14 h-14 text-gray-700 dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-gray-800 dark:text-white font-semibold text-lg group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">Apple Pay</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400/0 via-gray-400/40 to-gray-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>

          {/* Google Pay */}
          <AnimatedSection delay={450} animation="slide-down">
            <div className="relative group bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-300 dark:border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/10 to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10 flex flex-col items-center space-y-4">
                <span className="text-6xl font-bold text-red-500 group-hover:text-red-400 transition-colors duration-300 group-hover:scale-105 transform">G</span>
                <span className="text-gray-800 dark:text-white font-semibold text-lg group-hover:text-red-400 transition-colors duration-300">Google Pay</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400/0 via-red-400/30 to-red-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600} animation="fade-up">
          <a
            href="https://elyntric.gumroad.com/l/X"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Get the Full Guide
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </span>
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </a>
        </AnimatedSection>

        <AnimatedSection delay={750} animation="fade-up">
          <p className="text-gray-600 dark:text-gray-400 text-sm mt-6">
            All payments are processed securely with industry-standard encryption
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default PaymentMethods;
