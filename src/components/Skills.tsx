import React, { useState } from 'react';
import { skillsData } from '../data/skillsData';

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', label: 'All Skills' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
    { id: 'tools', label: 'Tools & DevOps' }
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-slate-950 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-slate-50 to-transparent dark:from-slate-900/30 dark:to-transparent"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
          <p className="text-slate-600 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            My technical toolkit has been curated and refined over years of building diverse projects.
            Here's what I bring to the table:
          </p>
        </div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {categories.map(category => (
            <button 
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id 
                  ? 'bg-blue-600 dark:bg-blue-500 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        {/* Skills grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map((skill) => (
            <div 
              key={skill.name}
              className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg shadow-sm hover:shadow-md transition-all hover:-translate-y-1 flex flex-col items-center group"
            >
              <div 
                className="w-16 h-16 flex items-center justify-center mb-4 rounded-full bg-white dark:bg-slate-800 shadow-sm group-hover:bg-blue-50 dark:group-hover:bg-blue-900/30 transition-colors"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h3 className="font-medium text-slate-900 dark:text-white text-center">{skill.name}</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center leading-tight px-1">
                {(skill as { description?: string }).description || 'Advanced proficiency in this technology'}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center text-slate-900 dark:text-white mb-12">Additional Capabilities</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Development Approach</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Responsive and mobile-first design</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Component-based architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Clean code practices</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Test-driven development</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Problem Solving</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Algorithm optimization</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Debugging complex issues</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Performance tuning</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Architecture design patterns</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-lg shadow-sm hover:shadow-md transition-all">
              <h4 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">Soft Skills</h4>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Clear communication</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Project management</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Team collaboration</span>
                </li>
                <li className="flex items-start">
                  <span className="inline-block w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 mr-2"></span>
                  <span>Client relationship management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;