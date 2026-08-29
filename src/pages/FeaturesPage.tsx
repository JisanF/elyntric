import React from 'react';
import { ArrowLeft, Brain, Target, Users, CheckCircle, Zap, Star, Headphones } from 'lucide-react';
import { Link } from '../router';
import AnimatedSection from '../components/AnimatedSection';

const features = [
  { icon: Brain, title: 'Smart Quiz', desc: 'AI-powered assessment to identify your strengths and optimal path forward', color: 'blue', link: '/quiz' },
  { icon: Target, title: 'Personalized Roadmaps', desc: 'Custom step-by-step plans designed specifically for your goals and experience level', color: 'green', link: '/quiz' },
  { icon: Users, title: 'Beginner Guidance', desc: 'Comprehensive support and mentoring for those just starting their online journey', color: 'blue', link: '/ai' },
  { icon: Target, title: 'Path Planning', desc: 'Strategic planning to help you navigate from confusion to clarity and success', color: 'purple', link: '/quiz' },
  { icon: Brain, title: 'Online Consulting', desc: 'One-on-one expert consultation to accelerate your online business growth', color: 'cyan', link: '/ai' },
  { icon: CheckCircle, title: 'Start Free', desc: 'Begin implementing your roadmap immediately with free resources and guidance', color: 'green', link: '/quiz' },
];

const colorMap: Record<string, { text: string; hover: string; bg: string }> = {
  blue: { text: 'text-blue-500', hover: 'group-hover:text-blue-400', bg: 'from-blue-500/0 via-blue-500/30 to-purple-500/0' },
  green: { text: 'text-green-500', hover: 'group-hover:text-green-400', bg: 'from-green-500/0 via-green-500/30 to-blue-500/0' },
  purple: { text: 'text-purple-500', hover: 'group-hover:text-purple-400', bg: 'from-purple-500/0 via-purple-500/30 to-pink-500/0' },
  cyan: { text: 'text-cyan-500', hover: 'group-hover:text-cyan-400', bg: 'from-cyan-500/0 via-cyan-500/30 to-blue-500/0' },
};

const FeaturesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white pt-20 px-4">
      <div className="max-w-6xl mx-auto py-12">
        <AnimatedSection animation="fade-up">
          <Link to="/" className="inline-flex items-center text-cyan-500 dark:text-cyan-400 hover:text-cyan-300 transition-colors mb-8 group">
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
        </AnimatedSection>

        <AnimatedSection animation="fade-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            How It Works
          </h1>
        </AnimatedSection>

        <AnimatedSection delay={200} animation="fade-up">
          <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Everything you need to go from confused beginner to confident builder — all in one place.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <AnimatedSection key={i} delay={i * 150} animation="fade-up">
                <Link
                  to={feature.link}
                  className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block h-full"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <div className="relative z-10">
                    <Icon className={`w-8 h-8 ${colors.text} mb-4 ${colors.hover} group-hover:scale-110 group-hover:rotate-12 transition-all duration-300`} />
                    <h3 className={`text-xl font-semibold mb-3 ${colors.hover} transition-colors duration-300`}>{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.desc}</p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>

        <AnimatedSection delay={600} animation="fade-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Thousands of beginners have found their path with Elyntric</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800">
              <Zap className="w-10 h-10 text-cyan-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast Start</h3>
              <p className="text-gray-600 dark:text-gray-300">Get your personalized roadmap in minutes, not months</p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border border-gray-200 dark:border-gray-800">
              <Headphones className="w-10 h-10 text-purple-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-600 dark:text-gray-300">Get help whenever you need it from elynAI</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={800} animation="scale-up">
          <div className="text-center">
            <Link
              to="/quiz"
              className="relative group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center justify-center"
            >
              <span className="relative z-10 flex items-center">
                Take the Quiz
                <ArrowLeft className="w-5 h-5 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default FeaturesPage;
