import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook, FaGithub, FaReddit, FaPinterest, FaTelegram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import BrandName from '../BrandName';
import SkullLogo from '../SkullLogo';

interface FooterBrandProps { scrollToSection: (sectionId: string) => void; }

const FooterBrand: React.FC<FooterBrandProps> = ({ scrollToSection }) => (
  <div className="space-y-4 lg:space-y-6">
    <div className="lg:col-span-3 space-y-6"><div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}><div className="relative mr-3"><SkullLogo size="md" /></div><div className="relative overflow-hidden"><BrandName size="md" /><div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out" /></div></div></div>
    <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-base leading-relaxed">Start building your online presence with confidence and clarity.</p>
    <div><a href="mailto:elyntric@gmail.com" target="_blank" rel="noopener noreferrer" className="relative flex items-center text-purple-500 dark:text-purple-400 hover:text-red-500 dark:hover:text-red-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"><Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 mr-3 relative z-10" /><span className="relative z-10">elyntric@gmail.com</span></a></div>
    <div className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-4 max-w-44 sm:max-w-48 lg:max-w-48"><a href="https://www.facebook.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-blue-500 flex justify-center"><FaFacebook className="w-6 h-6 hover:scale-110 transition-transform" /></a><a href="https://x.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-gray-800 dark:text-white flex justify-center"><FaXTwitter className="w-6 h-6 hover:scale-110 transition-transform" /></a><a href="https://www.pinterest.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-red-500 flex justify-center"><FaPinterest className="w-6 h-6 hover:scale-110 transition-transform" /></a><a href="https://www.reddit.com/user/elyntric" target="_blank" rel="noopener noreferrer" className="text-orange-500 flex justify-center"><FaReddit className="w-6 h-6 hover:scale-110 transition-transform" /></a><a href="https://github.com/elyntric" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 flex justify-center"><FaGithub className="w-6 h-6 hover:scale-110 transition-transform" /></a><a href="https://t.me/elyntric" target="_blank" rel="noopener noreferrer" className="text-blue-400 flex justify-center"><FaTelegram className="w-6 h-6 hover:scale-110 transition-transform" /></a></div>
  </div>
);

export default FooterBrand;
