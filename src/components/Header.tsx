import React from 'react';
import {
  ArrowRight,
  Moon,
  Sun,
  Home,
  Menu,
  X,
  Star,
  User,
  Mail,
  Zap,
  Cog
} from 'lucide-react';
import { Link } from '../router';
import BrandName from './BrandName';
import SkullLogo from './SkullLogo';

interface HeaderProps {
  isDarkMode: boolean;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
  toggleTheme: () => void;
  scrollToSection: (sectionId: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  isDarkMode,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  toggleTheme,
  scrollToSection
}) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 dark:bg-black/85 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="lg:col-span-3 space-y-6">
            <div className="flex items-center cursor-pointer group" onClick={() => scrollToSection('hero')}>
              <div className="relative mr-3">
                <SkullLogo size="md" />
              </div>
              <div className="relative overflow-hidden">
                <BrandName size="md" />
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-400 transition-all duration-300 overflow-hidden"><span className="relative z-10 flex items-center space-x-2"><Home className="w-4 h-4" /><span>Home</span></span><div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-purple-600/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></button>
            <button onClick={() => scrollToSection('how-it-works')} className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-400 transition-all duration-300 overflow-hidden"><span className="relative z-10 flex items-center space-x-2"><Zap className="w-4 h-4" /><span>How It Work</span></span><div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-cyan-500/15 to-purple-600/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></button>
            <button onClick={() => scrollToSection('reviews')} className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-400 transition-all duration-300 overflow-hidden"><span className="relative z-10 flex items-center space-x-2"><Star className="w-4 h-4" /><span>Review</span></span><div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-500/15 to-cyan-600/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></button>
            <button onClick={() => scrollToSection('contact')} className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-400 transition-all duration-300 overflow-hidden"><span className="relative z-10 flex items-center space-x-2"><Mail className="w-4 h-4" /><span>Contact</span></span><div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-red-500/15 to-pink-600/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></button>
            <Link to="/about" className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-400 transition-all duration-300 overflow-hidden flex items-center space-x-2"><span className="relative z-10 flex items-center space-x-2"><User className="w-4 h-4" /><span>About</span></span><div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/30 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-gradient-to-r from-green-400/15 via-cyan-500/15 to-blue-600/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></Link>
          </div>

          <div className="flex items-center space-x-4">
            <button onClick={toggleTheme} className="relative group p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all duration-300 overflow-hidden" aria-label="Toggle theme"><div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-full" />{isDarkMode ? <Sun className="w-5 h-5 text-yellow-500 relative z-10 group-hover:rotate-180 transition-transform duration-500" /> : <Moon className="w-5 h-5 text-gray-600 relative z-10 group-hover:rotate-12 transition-transform duration-300" />}</button>
            <Link to="/quiz" className="relative group px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 transform"><span className="relative z-10 flex items-center space-x-2"><span className="hidden sm:inline">Start</span><span className="sm:hidden">Go</span><ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span><div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" /><div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" /></Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden relative group p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-colors duration-200">{isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10" /> : <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10" />}</button>
          </div>
        </div>

        {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white/85 dark:bg-black/85 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-lg"><div className="px-4 py-4 space-y-2"><button onClick={() => scrollToSection('hero')} className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-2"><Home className="w-4 h-4" /><span>Go Home</span></button><button onClick={() => scrollToSection('how-it-works')} className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"><span className="flex items-center space-x-2"><Zap className="w-4 h-4" /><span>How This Works!</span></span></button><button onClick={() => scrollToSection('reviews')} className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"><span className="flex items-center space-x-2"><Star className="w-4 h-4" /><span>Project Reviews</span></span></button><button onClick={() => scrollToSection('contact')} className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"><span className="flex items-center space-x-2"><Mail className="w-4 h-4" /><span>Support Need?</span></span></button><Link to="/about" className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors flex items-center space-x-2"><User className="w-4 h-4" /><span>About Us</span></Link></div></div>}
      </nav>
    </header>
  );
};

export default Header;
