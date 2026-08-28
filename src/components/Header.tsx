import React from 'react';
import {
  Brain,
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
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-400 dark:to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-300 group-hover:via-blue-300 group-hover:to-purple-400 dark:group-hover:from-cyan-200 dark:group-hover:via-blue-200 dark:group-hover:to-purple-300 transition-all duration-500 group-hover:scale-105">
                  Elyntric
                </span>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 group-hover:w-full transition-all duration-700 ease-out"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              </div>
            </div>
          </div>                                                          

          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-cyan-400 dark:hover:text-cyan-400 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-purple-500/0 dark:from-cyan-400/0 dark:via-cyan-400/40 dark:to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-blue-500/15 to-purple-600/15 dark:from-cyan-400/25 dark:via-blue-400/25 dark:to-purple-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button
              onClick={() => scrollToSection('how-it-works')}
              className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-blue-400 dark:hover:text-blue-400 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>How It Work</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-cyan-500/0 dark:from-blue-400/0 dark:via-blue-400/40 dark:to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/15 via-cyan-500/15 to-purple-600/15 dark:from-blue-400/25 dark:via-cyan-400/25 dark:to-purple-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button
              onClick={() => scrollToSection('reviews')}
              className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-400 dark:hover:text-purple-400 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Review</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/30 to-pink-500/0 dark:from-purple-400/0 dark:via-purple-400/40 dark:to-pink-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/15 via-pink-500/15 to-cyan-600/15 dark:from-purple-400/25 dark:via-pink-400/25 dark:to-cyan-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-orange-400 dark:hover:text-orange-400 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/30 to-red-500/0 dark:from-orange-400/0 dark:via-orange-400/40 dark:to-red-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/15 via-red-500/15 to-pink-600/15 dark:from-orange-400/25 dark:via-red-400/25 dark:to-pink-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </button>

            <a
              href="https://elyntric.vercel.app/about"
              className="relative group px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-green-400 dark:hover:text-green-400 transition-all duration-300 overflow-hidden flex items-center space-x-2"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>About</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/30 to-cyan-500/0 dark:from-green-400/0 dark:via-green-400/40 dark:to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/15 via-cyan-500/15 to-blue-600/15 dark:from-green-400/25 dark:via-cyan-400/25 dark:to-blue-400/25 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="relative group p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-all duration-300 overflow-hidden transform"
              aria-label="Toggle theme"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse rounded-full"></div>
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-500 relative z-10 group-hover:rotate-180 transition-transform duration-500" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              )}
            </button>

            <a
              href="https://elyntric.vercel.app/quiz"
              className="relative group px-4 sm:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 active:scale-95 text-white font-semibold rounded-lg transition-all duration-300 overflow-hidden shadow-lg hover:shadow-cyan-500/25 flex items-center space-x-2 transform"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span className="hidden sm:inline">Start</span>
                <span className="sm:hidden">Go</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/0 via-cyan-400/30 to-blue-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
              <div className="absolute inset-0 bg-white/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10 transition-transform duration-200" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300 relative z-10 transition-transform duration-200" />
              )}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/85 dark:bg-black/85 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-200 ease-out">
            <div className="px-4 py-4 space-y-2">
              <button
                onClick={() => scrollToSection('hero')}
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150 flex items-center space-x-2"
              >
                <Home className="w-4 h-4" />
                <span>Go Home</span>
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
              >
                <span className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>How This Works!</span>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
              >
                <span className="flex items-center space-x-2">
                  <Star className="w-4 h-4" />
                  <span>Project Reviews</span>
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150"
              >
                <span className="flex items-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>Support Need?</span>
                </span>
              </button>
              <a
                href="https://elyntric.vercel.app/about"
                className="w-full text-left px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors duration-150 flex items-center space-x-2"
              >
                <User className="w-4 h-4" />
                <span>About Us</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
export default Header;