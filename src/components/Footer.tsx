import React from 'react';
import AnimatedSection from './AnimatedSection';
import FooterBrand from './footer/FooterBrand';
import FooterCompany from './footer/FooterCompany';
import FooterFounder from './footer/FooterFounder';
import Newsletter from './Newsletter';
import { Link } from '../router';

interface FooterProps {
  scrollToSection: (sectionId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ scrollToSection }) => {
  return (
    <footer className="bg-white dark:bg-black text-gray-800 dark:text-white py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-8">
          
          {/* Brand Section - Takes 3 columns on large screens */}
          <AnimatedSection delay={0} animation="fade-up" className="lg:col-span-3">
            <FooterBrand scrollToSection={scrollToSection} />
          </AnimatedSection>

          {/* Company Section - Takes 2 columns on large screens */}
          <AnimatedSection delay={150} animation="fade-up" className="lg:col-span-2">
            <FooterCompany scrollToSection={scrollToSection} />
          </AnimatedSection>

          {/* Founded by Section - Takes 3 columns on large screens */}
          <AnimatedSection delay={300} animation="fade-up" className="lg:col-span-3">
            <FooterFounder />
          </AnimatedSection>

          {/* Newsletter Section - Takes 4 columns on large screens (biggest area) */}
          <AnimatedSection delay={450} animation="fade-up" className="lg:col-span-4">
            <Newsletter 
              apiKey="yhyXUNcMVt8hHYDwFlZOKQ" 
              formId="8286360" 
            />
          </AnimatedSection>

        </div>

        {/* Bottom Footer Section */}
        <AnimatedSection delay={600} animation="fade-up">
          <div className="border-t border-gray-200 dark:border-gray-800 pt-4 lg:pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
              <p className="text-gray-600 dark:text-gray-400 text-center md:text-left text-base md:text-lg lg:text-base">
                © 2025 Elyntric. All rights reserved.
              </p>
              <div className="flex flex-wrap justify-center md:justify-end space-x-3 lg:space-x-4">
                <Link
                  to="/about"
                  className="relative text-gray-600 dark:text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
                >
                  <span className="relative z-10">Privacy Policy</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </Link>
                <Link
                  to="/about"
                  className="relative text-gray-600 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
                >
                  <span className="relative z-10">Terms of Service</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/10 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </Link>
                <Link
                  to="/about"
                  className="relative text-gray-600 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 transition-all duration-300 text-base md:text-lg lg:text-base group overflow-hidden"
                >
                  <span className="relative z-10">Cookies</span>
                  <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 group-hover:w-full transition-all duration-500 ease-out"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/0 via-yellow-500/10 to-orange-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></div>
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;