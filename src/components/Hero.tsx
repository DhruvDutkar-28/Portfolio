import React, { useEffect, useState } from 'react';
import { ArrowDownCircle, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const [typing, setTyping] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  
  const textOptions = [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Innovator"
  ];

  useEffect(() => {
    const text = textOptions[currentTextIndex];
    let timer: NodeJS.Timeout;
    
    if (typing) {
      if (displayText.length < text.length) {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length + 1));
        }, 100);
      } else {
        timer = setTimeout(() => setTyping(false), 1500);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(text.substring(0, displayText.length - 1));
        }, 50);
      } else {
        setCurrentTextIndex((currentTextIndex + 1) % textOptions.length);
        setTyping(true);
      }
    }
    
    return () => clearTimeout(timer);
  }, [displayText, typing, currentTextIndex, textOptions]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-blue-950 transition-colors duration-500" />
      
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-200 dark:bg-blue-900/30 rounded-full blur-3xl opacity-70" />
      <div className="absolute top-1/3 -left-20 w-80 h-80 bg-indigo-200 dark:bg-indigo-900/20 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-200 dark:bg-cyan-900/20 rounded-full blur-3xl opacity-40" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4 tracking-wide">
              Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Dhruv Dutkar
            </h1>
            <div className="h-12 mb-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-300">
                <span>{displayText}</span>
                <span className="animate-blink">|</span>
              </h2>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl leading-relaxed">
              Crafting exceptional digital experiences with clean code and innovative solutions. 
              Passionate about creating technology that makes a difference.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <a 
                href="#contact" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                Get in Touch
              </a>
              <a 
                href="#projects" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
              >
                View My Work
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://github.com/DhruvDutkar-28" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/dhruv-dutkar-8aaa60273?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href="mailto:dhruv.dutkar@example.com"
                className="text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>
          
<div className="order-1 lg:order-2 relative">
  {/* Circle Image */}
  <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden shadow-xl mx-auto">
    <img 
      src="images/dhruv.png" 
      alt="Dhruv Dutkar" 
      className="w-full h-full object-cover"
    />
  </div>

  {/* Badge */}
  <div className="absolute -bottom-6 right-16 w-24 h-24 bg-teal-500 dark:bg-teal-400 rounded-full flex items-center justify-center text-white transform rotate-12 shadow-lg">
    <div className="transform -rotate-12 font-bold tracking-tight">
      1+ Years
    </div>
  </div>
</div>


        </div>
      </div>
      
      <button 
        onClick={scrollToNextSection}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle size={36} />
      </button>
    </section>
  );
};

export default Hero;