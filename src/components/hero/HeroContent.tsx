import React from 'react';
import AnimatedSection from '../AnimatedSection';
import { ArrowRight } from 'lucide-react';
import { Link } from '../../router';
import BrandName from '../BrandName';
import SkullLogo from '../SkullLogo';

const HeroContent: React.FC = () => (
  <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
    <AnimatedSection animation="scale-up">
      <div className="flex items-center justify-center mb-6 sm:mb-4 group">
        <div className="relative mr-3 sm:mr-4"><SkullLogo size="xl" /></div>
        <div className="relative overflow-hidden"><BrandName size="lg" /><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out" /></div>
      </div>
    </AnimatedSection>
    <AnimatedSection delay={200} animation="fade-up"><h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4"><span className="bg-gradient-to-r from-black via-white to-black dark:from-black-400 dark:via-white-300 dark:to-white-400 bg-clip-text text-transparent animate-shine-text-ultra-slow bg-[length:300%_100%]">Escape confusion. Find your path. Start building.</span></h2></AnimatedSection>
    <AnimatedSection delay={400} animation="fade-up"><p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6"><span className="bg-gradient-to-r from-gray-700 via-white to-gray-700 dark:from-white-400 dark:via-black-700 bg-clip-text text-transparent animate-shine-text-delayed-ultra-slow bg-[length:300%_100%]">elyntric helps confused beginners get a clear path to start online.</span></p></AnimatedSection>
    <AnimatedSection delay={600} animation="scale-up"><Link to="/ai" className="relative group bg-gradient-to-r from-cyan-500 to-gray-600 hover:from-black hover:to-cyan-500 text-black font-semibold py-3 px-6 sm:py-4 sm:px-8 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center justify-center"><span className="relative z-10 flex items-center">Ask To elynAI For Help!<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" /></span><div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></Link></AnimatedSection>
  </div>
);

export default HeroContent;
