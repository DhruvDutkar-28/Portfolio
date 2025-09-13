import React from 'react';
import { Calendar, Award, Briefcase, GraduationCap, User } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-slate-50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-300">
              <img 
                src="https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg" 
                alt="Dhruv working on code" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border-4 border-blue-600 dark:border-blue-500 rounded-lg"></div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
              Full Stack Developer 
            </h3>
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              I'm Dhruv Dutkar, a passionate Full Stack Developer with 1+ years of experience crafting digital solutions that blend technical excellence with outstanding user experiences. My journey in tech has been driven by a simple philosophy: technology should solve real problems while being intuitive and enjoyable to use.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">
              I specialize in building responsive web applications using modern JavaScript frameworks, and implementing database solutions. Beyond coding, I'm deeply interested in user experience design and constantly strive to create interfaces that are both beautiful and functional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center">
                <User className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-slate-900 dark:text-white"><span className="font-medium">Name:</span> Dhruv Dutkar</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-slate-900 dark:text-white"><span className="font-medium">Experience:</span> 1+ Years</span>
              </div>
              <div className="flex items-center">
                <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-slate-900 dark:text-white"><span className="font-medium">Available:</span> Full-time</span>
              </div>
              <div className="flex items-center">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-slate-900 dark:text-white"><span className="font-medium">Degree:</span> Computer Engineering</span>
              </div>
            </div>
            
            <a
              href="/Dhruv_Dutkar_CVv.pdf"
              download="Dhruv_Dutkar_Resume.pdf"
              className="btn-primary"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-12">
            My <span className="text-blue-600 dark:text-blue-400">Journey</span>
          </h3>

          <div className="relative">
            {/* Timeline connector */}
            <div className="absolute left-0 sm:left-1/2 transform sm:-translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900"></div>

            {/* Timeline items */}
            <div className="space-y-12">
              {/* Item 1 - Current Position */}
              <div className="relative flex flex-col sm:flex-row items-center">
                <div className="flex-1 sm:text-right sm:pr-8 pb-6 sm:pb-0">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Developer</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">2024 - Present</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">Developing web applications, working with modern technologies, and contributing to team projects in a professional environment.</p>
                </div>
                <div className="absolute left-0 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 sm:pl-8"></div>
              </div>

              {/* Item 2 - Learning Phase */}
              <div className="relative flex flex-col sm:flex-row items-center">
                <div className="flex-1 sm:text-right sm:pr-8 order-1 sm:order-1 pb-6 sm:pb-0"></div>
                <div className="absolute left-0 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 flex items-center justify-center order-2">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 sm:pl-8 order-3">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Self-Learning & Projects</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">2023 - 2024</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">Built personal projects, learned modern web technologies, and developed skills in full-stack development through hands-on experience.</p>
                </div>
              </div>

              {/* Item 3 - Education */}
              <div className="relative flex flex-col sm:flex-row items-center">
                <div className="flex-1 sm:text-right sm:pr-8 pb-6 sm:pb-0">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">Computer Engineering</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">2020 - 2024</p>
                  <p className="text-slate-700 dark:text-slate-300 mt-2">Completed Bachelor's degree in Computer Engineering, gaining strong foundation in programming, algorithms, and software development.</p>
                </div>
                <div className="absolute left-0 sm:left-1/2 transform -translate-y-1/2 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-500 border-4 border-white dark:border-slate-900 flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1 sm:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;