import React from 'react';

// You can replace these placeholder React components with actual icons from lucide-react
// For simplicity, I'm using simple SVG-based components

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <circle cx="12" cy="12" r="4"></circle>
    <line x1="12" y1="22" x2="12" y2="16"></line>
    <line x1="12" y1="8" x2="12" y2="2"></line>
    <line x1="4.93" y1="4.93" x2="8.34" y2="8.34"></line>
    <line x1="15.66" y1="15.66" x2="19.07" y2="19.07"></line>
    <line x1="19.07" y1="4.93" x2="15.66" y2="8.34"></line>
    <line x1="8.34" y1="15.66" x2="4.93" y2="19.07"></line>
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-6"></path>
    <path d="M8 18V8l14 4-10 4"></path>
    <path d="M6 8l-4 4 4 4"></path>
  </svg>
);

const HTMLIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 16l-3 -9l3 -4l7 -2l7 2l3 4l-3 9l-7 2z"></path>
    <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
  </svg>
);

const CSSIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14l8 4l8 -4"></path>
    <path d="M4 10l8 4l8 -4"></path>
    <path d="M12 2l.01 16"></path>
  </svg>
);

const JSIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 4 19 4 19 20 5 20 5 4"></polyline>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="12" y1="8" x2="12" y2="16"></line>
    <line x1="9" y1="12" x2="15" y2="12"></line>
  </svg>
);

const TSIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 4 19 4 19 20 5 20 5 4"></polyline>
    <line x1="9" y1="8" x2="15" y2="8"></line>
    <line x1="12" y1="8" x2="12" y2="16"></line>
  </svg>
);

const MongoDBIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 12h4l3 8l3 -16h4"></path>
  </svg>
);

const PostgreSQLIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="8" rx="8" ry="3"></ellipse>
    <path d="M4 8v8c0 1.657 3.582 3 8 3s8 -1.343 8 -3v-8"></path>
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7.5 4h9m-9 8h9m-8 8l7-11"></path>
  </svg>
);

const FirebaseIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 17l8 -14l2 3l-8 11z"></path>
    <path d="M12 12.5l4 7.5h-12.5l8.5 -9.5z"></path>
  </svg>
);

const DockerIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="8" x2="20" y2="8"></line>
    <line x1="4" y1="12" x2="20" y2="12"></line>
    <line x1="4" y1="16" x2="20" y2="16"></line>
  </svg>
);

const GitIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="12" r="3"></circle>
    <circle cx="6" cy="6" r="3"></circle>
    <circle cx="6" cy="18" r="3"></circle>
    <line x1="6" y1="9" x2="6" y2="15"></line>
    <path d="M18 9a9 9 0 0 0 -9 9"></path>
  </svg>
);

const NextJSIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2l10 6.5v7l-10 6.5l-10 -6.5v-7l10 -6.5"></path>
    <path d="M12 22l0 -15"></path>
    <path d="M18 12.5l-6 3.5"></path>
  </svg>
);

const TailwindIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16v7h-7v5h-9z"></path>
  </svg>
);

const ReduxIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
    <path d="M15.59 13.59L12 17.17 8.41 13.59 7 15l5 5 5-5-1.41-1.41z"></path>
    <path d="M7 10l5-5 5 5-1.41 1.41L12 7.83l-3.59 3.59L7 10z"></path>
  </svg>
);

const AWSIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12h2l7 -9v16l7 -7h4"></path>
  </svg>
);

// Skill type definition
interface Skill {
  name: string;
  icon: React.ReactNode;
  level: number;
  category: string;
  color: string;
  description: string;
}

// Skills data
export const skillsData: Skill[] = [
  {
    name: 'React',
    icon: <ReactIcon />,
    level: 95,
    category: 'frontend',
    color: '#61DAFB',
    description: 'Building dynamic user interfaces with component-based architecture and modern hooks'
  },
  {
    name: 'JavaScript',
    icon: <JSIcon />,
    level: 90,
    category: 'frontend',
    color: '#F7DF1E',
    description: 'Crafting interactive web experiences with ES6+ features and asynchronous programming'
  },
  
  {
    name: 'HTML5',
    icon: <HTMLIcon />,
    level: 95,
    category: 'frontend',
    color: '#E34F26',
    description: 'Structuring semantic web content with modern markup and accessibility standards'
  },
  {
    name: 'CSS3',
    icon: <CSSIcon />,
    level: 90,
    category: 'frontend',
    color: '#1572B6',
    description: 'Creating responsive layouts with advanced animations and flexbox/grid systems'
  },
  {
    name: 'Tailwind CSS',
    icon: <TailwindIcon />,
    level: 90,
    category: 'frontend',
    color: '#06B6D4',
    description: 'Rapid UI development with utility-first approach and custom design systems'
  },
 
 
  {
    name: 'Node.js',
    icon: <NodeIcon />,
    level: 85,
    category: 'backend',
    color: '#339933',
    description: 'Server-side JavaScript runtime for scalable backend applications and APIs'
  },
 
  {
    name: 'MongoDB',
    icon: <MongoDBIcon />,
    level: 80,
    category: 'database',
    color: '#47A248',
    description: 'NoSQL document database for flexible data modeling and real-time applications'
  },
  {
    name: 'MySQL',
    icon: <PostgreSQLIcon />,
    level: 75,
    category: 'database',
    color: '#336791',
    description: 'Popular open-source relational database known for reliability, performance, and ease of use'

  },
  
  {
    name: 'Git',
    icon: <GitIcon />,
    level: 90,
    category: 'tools',
    color: '#F05032',
    description: 'Distributed version control system for collaborative development workflows'
  },
  {
    name: 'Java',
icon: <DockerIcon />,
level: 70,
category: 'tools',
color: '#2496ED',
description: 'High-level, object-oriented programming language widely used for building cross-platform applications',

  }
  
];