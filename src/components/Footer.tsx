import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 relative">
      <button 
        onClick={scrollToTop}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-xl font-bold">
              <span className="text-blue-400">D</span>
              <span className="text-white">hruv</span>
              <span className="text-slate-300">Dutkar</span>
            </div>
            <p className="text-slate-400 mt-2 max-w-md">
              Full Stack Developer specializing in creating exceptional digital experiences
              with a focus on performance, usability, and design.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-x-12 gap-y-4">
            <div className="space-y-2">
              <h3 className="text-sm uppercase text-slate-400 tracking-wider font-medium">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-slate-300 hover:text-blue-400 transition-colors">Home</a></li>
                <li><a href="#about" className="text-slate-300 hover:text-blue-400 transition-colors">About</a></li>
                <li><a href="#skills" className="text-slate-300 hover:text-blue-400 transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-slate-300 hover:text-blue-400 transition-colors">Projects</a></li>
                <li><a href="#contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h3 className="text-sm uppercase text-slate-400 tracking-wider font-medium">Connect</h3>
              <ul className="space-y-2">
                <li><a href="https://github.com/DhruvDutkar-28" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/dhruv-dutkar-8aaa60273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">LinkedIn</a></li>
                <li><a href="https://x.com/Dhruv__08?s=08" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">Twitter</a></li>
                <li><a href="https://www.instagram.com/dhruvdutkar?igsh=MXJtdGh0NGh5NGdzaw==" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition-colors">Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Dhruv Dutkar. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm mt-4 sm:mt-0">
            Designed & Built with <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;