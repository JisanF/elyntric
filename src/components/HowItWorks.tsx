import React from 'react';
import { Target, Users, CheckCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';
import { Link } from '../router';
import SkullLogo from './SkullLogo';

const HowItWorks: React.FC = () => {
  const cards = [
    { title: 'Smart Quiz', text: 'AI-powered assessment to identify your strengths and optimal path forward', color: 'blue', icon: <SkullLogo size="md" /> },
    { title: 'Personalized Roadmaps', text: 'Custom step-by-step plans designed specifically for your goals and experience level', color: 'green', icon: <Target className="w-8 h-8 text-green-600 dark:text-green-400" /> },
    { title: 'Beginner Guidance', text: 'Comprehensive support and mentoring for those just starting their online journey', color: 'blue', icon: <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" /> },
    { title: 'Path Planning', text: 'Strategic planning to help you navigate from confusion to clarity and success', color: 'purple', icon: <Target className="w-8 h-8 text-purple-600 dark:text-purple-400" /> },
    { title: 'Online Consulting', text: 'One-on-one expert consultation to accelerate your online business growth', color: 'cyan', icon: <SkullLogo size="md" /> },
    { title: 'Start Free', text: 'Begin implementing your roadmap immediately with free resources and guidance', color: 'green', icon: <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" /> },
  ];

  return <section id="how-it-works" className="px-4 py-16 bg-gray-50 dark:bg-gray-900/50"><div className="max-w-6xl mx-auto"><AnimatedSection animation="fade-up"><h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">How It Works</h2></AnimatedSection><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{cards.map((card, index) => <AnimatedSection key={card.title} delay={index * 150} animation={index % 2 === 0 ? 'slide-left' : 'slide-right'}><Link to="/x" className="relative group bg-white dark:bg-gray-800/50 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700 block"><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" /><div className="relative z-10">{card.icon}<h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">{card.title}</h3><p className="text-gray-600 dark:text-gray-300">{card.text}</p></div></Link></AnimatedSection>)}</div></div></section>;
};

export default HowItWorks;
