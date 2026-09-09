import React, { useState, useEffect } from 'react';
import { Users, Star, Headphones, ArrowRight } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from '../router';

declare global {
  interface Window {
    REVIEW_NUMBERS: {
      userStarted: number;
      premiumBuyer: number;
    };
  }
}

const Reviews: React.FC = () => {
  const [userStarted, setUserStarted] = useState(0);
  const [premiumBuyer, setPremiumBuyer] = useState(0);

  useEffect(() => {

    if (window.REVIEW_NUMBERS) {
      setUserStarted(window.REVIEW_NUMBERS.userStarted);
      setPremiumBuyer(window.REVIEW_NUMBERS.premiumBuyer);
    }
  }, []);

  return (
    <section id="reviews" className="px-4 py-16 md:py-24 bg-gray-50 dark:bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 bg-clip-text text-transparent">
              Our Reviews
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={200} animation="scale-up">
            <p className="text-xl text-gray-600 dark:text-gray-400">
              elyntric is supported by incredible partners and sponsors who make it possible for a team of talented designers and engineers to maintain the framework full-time.
            </p>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <AnimatedSection delay={0} animation="fade-in">
            <div className="relative group text-center overflow-hidden p-4 sm:p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 flex flex-col justify-start items-center">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-purple-200 group-hover:to-blue-200 dark:group-hover:from-purple-800/70 dark:group-hover:to-blue-800/70 group-hover:scale-110 transition-all duration-300 border border-purple-300 dark:border-purple-500/30 transform">
                  <div className="relative">
                    <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600 dark:text-purple-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 group-hover:scale-110 transition-all duration-300 transform" />
                    <div className="absolute inset-0 bg-purple-600/20 dark:bg-purple-400/20 rounded-full blur-md group-hover:bg-purple-700/30 dark:group-hover:bg-purple-300/30 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">User Started: {userStarted.toLocaleString()}</h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 min-h-[50px]">
                  Growing community of entrepreneurs building their online presence
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/0 via-purple-400/35 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-lg"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={200} animation="scale-down">
            <div className="relative group text-center overflow-hidden p-4 sm:p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/20 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 flex flex-col justify-start items-center">
                <div className="bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/50 dark:to-orange-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-yellow-200 group-hover:to-orange-200 dark:group-hover:from-yellow-800/70 dark:group-hover:to-orange-800/70 transition-all duration-300 border border-yellow-300 dark:border-yellow-500/30">
                  <div className="relative">
                    <Star className="w-10 h-10 text-yellow-600 dark:text-yellow-400 group-hover:text-yellow-700 dark:group-hover:text-yellow-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-yellow-600/20 dark:bg-yellow-400/20 rounded-full blur-md group-hover:bg-yellow-700/30 dark:group-hover:bg-yellow-300/30 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors duration-300">Premium Buyer: {premiumBuyer.toLocaleString()}</h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 min-h-[50px]">
                  Exclusive members getting personalized guidance and advanced strategies
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/30 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-lg"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={400} animation="scale-up">
            <div className="relative group text-center overflow-hidden p-4 sm:p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-all duration-300 h-full flex flex-col justify-between">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
              <div className="relative z-10 flex flex-col justify-start items-center">
                <div className="bg-gradient-to-br from-cyan-100 to-blue-100 dark:from-cyan-900/50 dark:to-blue-900/50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-cyan-200 group-hover:to-blue-200 dark:group-hover:from-cyan-800/70 dark:group-hover:to-blue-800/70 transition-all duration-300 border border-cyan-300 dark:border-cyan-500/30">
                  <div className="relative">
                    <Headphones className="w-10 h-10 text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors duration-300" />
                    <div className="absolute inset-0 bg-cyan-600/20 dark:bg-cyan-400/20 rounded-full blur-md group-hover:bg-cyan-700/30 dark:group-hover:bg-cyan-300/30 transition-all duration-300"></div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-300">24/7 Customer Support</h3>
                <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 min-h-[50px]">
                  Get instant help and guidance whenever you need it on your journey
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/35 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-lg"></div>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600} animation="fade-up">
          <div className="text-center">
            <Link
              to="/quiz"
              className="relative group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-pink-500/25 dark:hover:shadow-pink-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center"
            >
              <span className="relative z-10 flex items-center">
                Join Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400/0 via-pink-400/30 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Reviews;