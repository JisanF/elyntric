import React from 'react';
import { Brain, Mail } from 'lucide-react';
import { FaFacebook, FaGithub, FaReddit, FaPinterest, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import BrandName from '../BrandName';

interface FooterBrandProps {
  scrollToSection: (sectionId: string) => void;
}

const FooterBrand: React.FC<FooterBrandProps> = ({ scrollToSection }) => {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Brand Logo */}
      <div className="lg:col-span-3 space-y-6">
            <div 
              className="flex items-center cursor-pointer group"
              onClick={() => scrollToSection('hero')}
            >
              <div className="relative mr-3">
                <Brain className="w-8 h-8 text-cyan-500 dark:text-cyan-400 group-hover:text-cyan-300 dark:group-hover:text-cyan-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-cyan-400/30 dark:bg-cyan-300/30 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-150"></div>
                <div className="absolute inset-0 bg-cyan-500/20 dark:bg-cyan-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-200 animate-pulse"></div>
              </div>
              <div className="relative overflow-hidden">
                <BrandName size="md" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </div>
          </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-base leading-relaxed">
        Start building your online presence with confidence and clarity.
      </p>

      {/* Email */}
      <div>
        <a 
          href="mailto:elyntric@gmail.com" target="_blank"
          rel="noopener noreferrer"
          className="relative flex items-center text-purple-500 dark:text-purple-400 hover:text-red-500 dark:hover:text-red-400 active:scale-95 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden transform"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 mr-3 relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300" />
          <span className="relative z-10">elyntric@gmail.com</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-red-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
      </div>

      {/* Social Media Icons */}
      <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-4 max-w-44 sm:max-w-48 lg:max-w-48">
        <a href="https://www.facebook.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-400 transition-colors flex justify-center">
          <FaFacebook className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
        <a href="https://x.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors flex justify-center">
          <FaXTwitter className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
        <a href="https://www.pinterest.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-400 transition-colors flex justify-center">
          <FaPinterest className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
        <a href="https://www.reddit.com/user/elyntric" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:text-orange-400 transition-colors flex justify-center">
          <FaReddit className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
        <a href="https://github.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors flex justify-center">
          <FaGithub className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
        <a href="https://t.me/elyntric" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors flex justify-center">
          <FaTelegram className="w-6 h-6 sm:w-7 sm:h-7 lg:w-6 lg:h-6 hover:scale-110 active:scale-95 transition-transform duration-200 transform" />
        </a>
      </div>
    </div>
  );
};

export default FooterBrand;
