import React from 'react';

interface FooterCompanyProps {
  scrollToSection: (sectionId: string) => void;
}

const FooterCompany: React.FC<FooterCompanyProps> = ({ scrollToSection }) => {
  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-gray-800 dark:text-white">Company</h3>
      <div className="space-y-3 lg:space-y-4">
        <a 
          href="https://elyntric.vercel.app/about"
          className="relative block text-gray-600 dark:text-gray-300 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
        >
          <span className="relative z-10">About</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
        <button 
          onClick={() => scrollToSection('how-it-works')} 
          className="relative block text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden text-left"
        >
          <span className="relative z-10">How It Works</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>
        <button 
          onClick={() => scrollToSection('reviews')} 
          className="relative block text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden text-left"
        >
          <span className="relative z-10">Reviews</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </button>
        <a 
          href="https://www.instagram.com/elyntricc" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative block text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-pink-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
        >
          <span className="relative z-10">Success Stories</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-red-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
        <a 
          href="https://www.youtube.com/@elyntricc" 
          target="_blank"
          rel="noopener noreferrer"
          className="relative block text-gray-600 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
        >
          <span className="relative z-10">Blog</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/10 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
      </div>
    </div>
  );
};

export default FooterCompany;