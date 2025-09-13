export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  github?: string;
  demo?: string;
}

export const projectsData: Project[] = [
  {
    id: 1,
title: 'Image Steganography',
description: 'A web-based application for hiding and extracting secret messages inside images using steganography techniques. Built with Python and Flask, featuring secure encryption, message encoding/decoding, and an intuitive UI for easy use.',
image: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg',
tech: ['Python', 'Flask', 'OpenCV', 'Cryptography'],
github: 'https://github.com/DhruvDutkar-28',  // Replace with your repo link
demo: 'https://example.com'    // Replace with your live demo link

  },
  {
    id: 2,
    title: 'Task Management System',
    description: 'A collaborative task management application with features like task assignment, due dates, file attachments, and team permissions. Built with React, Firebase, and Material UI.',
    image: 'https://images.pexels.com/photos/2312369/pexels-photo-2312369.jpeg',
    tech: ['React', 'Firebase', 'Material UI'],
    github: 'https://github.com/DhruvDutkar-28',
    demo: 'https://softprosolutions.com/taskpro/dashboard'
  },
  {
    id: 3,
title: 'VisitantPro App',
description: 'A smart visitor management system for offices and organizations. It enables visitor registration, real-time tracking, ID badge generation, and notifications for hosts. Built with React, Node.js, and MongoDB for secure and scalable management.',
image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
tech: ['React', 'Node.js', 'MongoDB', 'Express.js'],
github: 'https://github.com/DhruvDutkar-28',  // Replace with your repo link
demo: 'https://softprosolutions.com/app/visitantpro/login'    // Replace with your live demo link

  },
  {
    id: 4,
title: 'Path-Yahar',
description: 'An Ayurvedic lifestyle and health recommendation platform that provides personalized diet, herbal remedies, and wellness suggestions based on user inputs. Features interactive dashboards, secure authentication, and real-time insights for holistic well-being.',
image: '/images/path yahar.png',
tech: ['React', 'D3.js', 'Express', 'PostgreSQL'],
github: 'https://github.com/DhruvDutkar-28',  // Replace with your repo link
demo: 'https://example.com'    // Replace with your live demo link
  },
  {
    id: 5,
title: 'Legal Vault',
description: 'A secure digital fortress for storing and managing crucial legal documents and evidence. Features include encrypted file storage, role-based access control, audit trails, and cloud backup to ensure confidentiality and integrity.',
image: '/images/legal.png',
tech: ['React Native', 'Node.js', 'MongoDB', 'JWT'],
github: 'https://github.com/DhruvDutkar-28',  // Replace with your repo link
demo: 'https://example.com'    // Replace with your live demo link

  }
];