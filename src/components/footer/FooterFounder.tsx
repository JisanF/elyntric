import React from 'react';
import { Mail } from 'lucide-react';
import { FaFacebook } from 'react-icons/fa';

const FooterFounder: React.FC = () => {
  return (
    <div className="space-y-4 lg:space-y-6">
      <h3 className="text-xl md:text-2xl lg:text-xl font-bold text-gray-800 dark:text-white">Founded by</h3>
      <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg lg:text-base leading-relaxed">
        <a 
          href="https://wa.me/+8801344224546" 
          target="_blank" 
          rel="noopener noreferrer"
          className="font-semibold text-gray-800 dark:text-white hover:text-green-500 dark:hover:text-green-400 transition-colors duration-300"
        >
          Jisan
        </a> — just trying to make things easier for people on the Internet. Turning complex ideas into simple, useful systems. One quiet innovative system at a time.
      </p>
      <div className="space-y-2 lg:space-y-3">
        <a 
          href="mailto:jisanyx@gmail.com"
          target="_blank"
          rel="noopener noreferrer" 
          className="relative flex items-center text-red-500 dark:text-red-400 hover:text-cyan-600 dark:hover:text-cyan-300 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
        >
          <Mail className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 mr-3 relative z-10" />
          <span className="relative z-10">email</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-red-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-red-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
        <a 
          href="https://www.facebook.com/JISANw"
          target="_blank"
          rel="noopener noreferrer" 
          className="relative flex items-center text-blue-500 hover:text-blue-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
        >
          <FaFacebook className="w-5 h-5 md:w-6 md:h-6 lg:w-5 lg:h-5 mr-3 relative z-10" />
          <span className="relative z-10">Facebook</span>
          <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 group-hover:w-full transition-all duration-500 ease-out"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-indigo-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
        </a>
      </div>
    </div>
  );
};

export default FooterFounder;
