import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const updateProgress = () => {
      // Update scroll progress bar
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
      const scrolled = scrollPx / winHeightPx * 100;
      setScrollProgress(scrolled);
      
      // Update active section
      const sectionsElements = sections.map(section => ({
        id: section.id,
        element: document.getElementById(section.id),
      })).filter(section => section.element !== null);
      
      const currentSection = sectionsElements.find(section => {
        if (!section.element) return false;
        const rect = section.element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', updateProgress);
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Top scroll progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div 
          className="h-full bg-blue-600 dark:bg-blue-400 transition-all duration-100"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>
      
      {/* Side navigation dots */}
      <div className="fixed right-5 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col items-center space-y-5">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group flex items-center`}
              aria-label={`Scroll to ${section.label} section`}
            >
              <span className={`mr-3 text-sm font-medium transition-opacity duration-200 ${
                activeSection === section.id
                  ? 'opacity-100 text-blue-600 dark:text-blue-400'
                  : 'opacity-0 group-hover:opacity-100 text-slate-700 dark:text-slate-300'
              }`}>
                {section.label}
              </span>
              <span className={`block w-3 h-3 rounded-full transition-all duration-200 ${
                activeSection === section.id
                  ? 'bg-blue-600 dark:bg-blue-400 scale-125'
                  : 'bg-slate-400 dark:bg-slate-600 group-hover:bg-slate-500 dark:group-hover:bg-slate-500'
              }`}></span>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default ScrollProgress;