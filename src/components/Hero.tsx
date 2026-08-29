import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Brain, ArrowRight } from 'lucide-react';
import { Link } from '../router';
const HeroBackground: React.FC = () => {
  return (
    <>
      <div className="absolute inset-0 overflow-hidden dark:block">
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 60 : 100)].map((_, i) => (
            <div
              key={`dark-star-${i}`}
              className="absolute bg-white rounded-full opacity-70"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-20"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(59,130,246,0.2) 50%, transparent 70%)',
              left: '10%',
              top: '20%',
              animation: 'nebula1 20s ease-in-out infinite',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full opacity-15"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.2) 50%, transparent 70%)',
              right: '15%',
              top: '30%',
              animation: 'nebula2 25s ease-in-out infinite reverse',
              filter: 'blur(50px)'
            }}
          />
          <div 
            className="absolute w-72 h-72 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.3) 0%, rgba(6,182,212,0.2) 50%, transparent 70%)',
              left: '60%',
              bottom: '20%',
              animation: 'nebula3 30s ease-in-out infinite',
              filter: 'blur(60px)'
            }}
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 6 : 11)].map((_, i) => (
            <div
              key={`dark-shooting-star-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full opacity-80"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shootingStar ${Math.random() * 3 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full opacity-5"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0deg, 
                rgba(6,182,212,0.3) 45deg, 
                transparent 90deg, 
                rgba(147,51,234,0.3) 135deg, 
                transparent 180deg, 
                rgba(236,72,153,0.3) 225deg, 
                transparent 270deg, 
                rgba(6,182,212,0.3) 315deg, 
                transparent 360deg)`,
              animation: 'galaxyRotate 60s linear infinite',
              borderRadius: '50%',
              filter: 'blur(100px)'
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden block dark:hidden">
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 50 : 80)].map((_, i) => (
            <div
              key={`light-star-${i}`}
              className="absolute bg-gray-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 rounded-full opacity-10"
            style={{
              background: 'radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(59,130,246,0.1) 50%, transparent 70%)',
              left: '10%',
              top: '20%',
              animation: 'nebula1 20s ease-in-out infinite',
              filter: 'blur(40px)'
            }}
          />
          <div 
            className="absolute w-80 h-80 rounded-full opacity-8"
            style={{
              background: 'radial-gradient(circle, rgba(147,51,234,0.2) 0%, rgba(236,72,153,0.1) 50%, transparent 70%)',
              right: '15%',
              top: '30%',
              animation: 'nebula2 25s ease-in-out infinite reverse',
              filter: 'blur(50px)'
            }}
          />
          <div 
            className="absolute w-72 h-72 rounded-full opacity-6"
            style={{
              background: 'radial-gradient(circle, rgba(34,197,94,0.2) 0%, rgba(6,182,212,0.1) 50%, transparent 70%)',
              left: '60%',
              bottom: '20%',
              animation: 'nebula3 30s ease-in-out infinite',
              filter: 'blur(60px)'
            }}
          />
        </div>

        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 7 : 12)].map((_, i) => (
            <div
              key={`light-shooting-star-${i}`}
              className="absolute w-1 h-1 bg-gray-500 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `shootingStar ${Math.random() * 3 + 4}s linear infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-full h-full opacity-3"
            style={{
              background: `conic-gradient(from 0deg, 
                transparent 0deg, 
                rgba(6,182,212,0.15) 45deg, 
                transparent 90deg, 
                rgba(147,51,234,0.15) 135deg, 
                transparent 180deg, 
                rgba(236,72,153,0.15) 225deg, 
                transparent 270deg, 
                rgba(6,182,212,0.15) 315deg, 
                transparent 360deg)`,
              animation: 'galaxyRotate 60s linear infinite',
              borderRadius: '50%',
              filter: 'blur(100px)'
            }}
          />
        </div>
      </div>
    </>
  );
};

const HeroContent: React.FC = () => {
  return (
    <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimatedSection animation="scale-up">
          <div className="flex items-center justify-center mb-4 group">
            <div className="relative mr-4">
              <Brain className="w-12 h-12 text-cyan-500 dark:text-cyan-400 group-hover:text-cyan-300 dark:group-hover:text-cyan-200 transition-all duration-100 z-10 relative" />
              <div className="absolute -inset-4 rounded-full bg-cyan-400/15 dark:bg-cyan-300/15 blur-2xl animate-ping pointer-events-none z-0" />
              <div className="absolute -inset-6 rounded-full bg-cyan-400/25 dark:bg-cyan-300/25 blur-[60px] opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-300 transition-all duration-100 pointer-events-none z-0" />
              <div className="absolute -inset-6 rounded-full bg-cyan-500/30 dark:bg-cyan-400/30 blur-[80px] opacity-0 group-hover:opacity-100 scale-100 group-hover:scale-500 transition-all duration-100 pointer-events-none z-0" />
            </div>
            <div className="relative overflow-hidden">
              <span className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-500 via-white-500 to-gray-600 dark:from-cyan-400 dark:via-white-400 dark:to-gray-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-white-300 group-hover:to-gray-400 dark:group-hover:from-cyan-200 dark:group-hover:via-white-200 dark:group-hover:to-gray-300 transition-all duration-500 group-hover:scale-105">
                Elyntric
              </span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={999} animation="fade-up">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 relative overflow-hidden">
            <span className="bg-gradient-to-r from-black via-white to-black dark:from-black-400 dark:via-white-300 dark:to-white-400 bg-clip-text text-transparent animate-shine-text-slow bg-[length:300%_100%]">
              Escape confusion. Find your path. Start building.
            </span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={999} animation="fade-up">
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-4 relative overflow-hidden">
            <span className="bg-gradient-to-r from-gray-700 via-white to-gray-700 dark:from-white-400 dark:via-black-700 bg-clip-text text-transparent animate-shine-text-delayed-slow bg-[length:300%_100%]">
              Elynctric helps confused beginners get a clear path to start online.
            </span>
          </p>
        </AnimatedSection>

        <AnimatedSection delay={600} animation="scale-up">
          <Link
            to="/ai"
            className="relative group bg-gradient-to-r from-cyan-500 to-gray-600 hover:from-black hover:to-cyan-500 text-black font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-cyan-500/25 transform hover:-translate-y-1 overflow-hidden inline-flex items-center justify-center"
          >
            <span className="relative z-10 flex items-center">
              Ask To elynAI For Help!
              <ArrowRight className="w-5 h-5 ml-2" />
            </span>
            <div className="absolute inset-0 bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none rounded-lg blur-md z-0" />
            <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-0" />
            <span className="absolute inset-0 rounded-lg z-20 pointer-events-none">
              <span className="absolute inset-0 rounded-lg border-2 border-transparent before:content-[''] before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-cyan-300 before:blur-md before:opacity-60 before:animate-rotate-glow" />
            </span>
          </Link>
        </AnimatedSection>
      </div>
  );
};

const Hero: React.FC = () => {
  return (
    <>
      <section id="hero" className="relative h-screen w-full overflow-hidden flex items-center justify-center px-4">
        <HeroBackground />
        <HeroContent />
      </section>
    </>
  );
};
export default Hero;