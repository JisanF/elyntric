import React from 'react';
import { Brain, ArrowLeft, Target, Users, Shield, Zap, CheckCircle } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';
import BrandName from '../components/BrandName';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-20 px-4">
      <div className="max-w-4xl mx-auto py-12">
        <AnimatedSection animation="fade-up">
          <Link to="/" className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <div className="flex items-center justify-center mb-8 group">
            <div className="relative mr-4">
              <Brain className="w-12 h-12 text-cyan-500 dark:text-cyan-400 group-hover:text-cyan-300 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
              <div className="absolute -inset-4 rounded-full bg-cyan-400/15 dark:bg-cyan-300/15 blur-2xl animate-ping pointer-events-none" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              About <BrandName size="xl" />
            </h1>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="fade-up">
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            We understand the overwhelming confusion that comes with starting an online business.
            That's why we created elyntric — to cut through the noise and provide clear, actionable guidance.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={400} animation="fade-up">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            Our mission is simple: help confused beginners find their path and start building their online presence
            with confidence and clarity.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <AnimatedSection delay={0} animation="slide-left">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <Target className="w-8 h-8 text-green-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Goal</h3>
              <p className="text-gray-600 dark:text-gray-300">Give every beginner a clear, step-by-step path to start their online journey.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={150} animation="slide-right">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <Users className="w-8 h-8 text-blue-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Who We Help</h3>
              <p className="text-gray-600 dark:text-gray-300">People new to the online world who feel lost and don't know where to begin.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={300} animation="slide-left">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <Shield className="w-8 h-8 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Our Promise</h3>
              <p className="text-gray-600 dark:text-gray-300">Transparent, honest guidance — no scams, no gimmicks, just real help.</p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={450} animation="slide-right">
            <div className="bg-gray-50 dark:bg-gray-900/50 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <Zap className="w-8 h-8 text-cyan-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">How We Do It</h3>
              <p className="text-gray-600 dark:text-gray-300">AI-powered tools, personalized roadmaps, and one-on-one guidance.</p>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600} animation="fade-up">
          <div className="text-center">
            <Link
              to="/quiz"
              className="relative group bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-400 hover:to-cyan-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Get Started
                <CheckCircle className="w-5 h-5 ml-2" />
              </span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800} animation="fade-up">
          <div className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800">
            <h3 className="text-xl font-semibold mb-4">Privacy Policy</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              We respect your privacy. We do not sell or share your personal data with third parties.
              Any information you provide is used solely to improve your experience on elyntric.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-8">Terms of Service</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              By using elyntric, you agree to use the platform honestly and responsibly.
              We provide guidance and tools, but your results depend on your own effort.
            </p>
            <h3 className="text-xl font-semibold mb-4 mt-8">Cookies</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              We use minimal cookies to remember your theme preference and improve your browsing experience.
              No tracking cookies are used.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AboutPage;
