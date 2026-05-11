export type ProficiencyLevel = 'Expert' | 'Advanced' | 'Intermediate' | 'Beginner';

export interface Skill {
  name: string;
  icon: string;
  proficiency: ProficiencyLevel;
  description: string;
}

export interface SkillsCategory {
  title: string;
  description: string;
  icon: string;
  skills: Skill[];
}

export const skillsCategories: SkillsCategory[] = [
  {
    title: 'AI/ML Engineering',
    description: 'Machine learning and artificial intelligence technologies',
    icon: 'Brain',
    skills: [
      {
        name: 'TensorFlow',
        icon: 'Cpu',
        proficiency: 'Advanced',
        description: 'Building and training neural networks for various ML applications'
      },
      {
        name: 'PyTorch',
        icon: 'Zap',
        proficiency: 'Advanced',
        description: 'Deep learning framework for research and production'
      },
      {
        name: 'scikit-learn',
        icon: 'Database',
        proficiency: 'Expert',
        description: 'Machine learning algorithms for data analysis and modeling'
      },
      {
        name: 'Python',
        icon: 'Code',
        proficiency: 'Expert',
        description: 'Primary language for AI/ML development and data science'
      }
    ]
  },
  {
    title: 'Frontend Development',
    description: 'Modern web technologies and frameworks',
    icon: 'Layout',
    skills: [
      {
        name: 'React',
        icon: 'Atom',
        proficiency: 'Expert',
        description: 'Building interactive user interfaces with component-based architecture'
      },
      {
        name: 'Next.js',
        icon: 'Globe',
        proficiency: 'Expert',
        description: 'Full-stack React framework with server-side rendering'
      },
      {
        name: 'TypeScript',
        icon: 'FileCode',
        proficiency: 'Advanced',
        description: 'Type-safe JavaScript for scalable applications'
      },
      {
        name: 'TailwindCSS',
        icon: 'Palette',
        proficiency: 'Expert',
        description: 'Utility-first CSS framework for rapid UI development'
      },
      {
        name: 'Framer Motion',
        icon: 'Move',
        proficiency: 'Advanced',
        description: 'Production-ready animations for React applications'
      }
    ]
  },
  {
    title: 'Backend Development',
    description: 'Server-side technologies and APIs',
    icon: 'Server',
    skills: [
      {
        name: 'Node.js',
        icon: 'Server',
        proficiency: 'Expert',
        description: 'JavaScript runtime for building scalable server applications'
      },
      {
        name: 'Express',
        icon: 'Route',
        proficiency: 'Advanced',
        description: 'Fast and minimalist web framework for Node.js'
      },
      {
        name: 'PostgreSQL',
        icon: 'Database',
        proficiency: 'Intermediate',
        description: 'Relational database management for structured data'
      },
      {
        name: 'REST APIs',
        icon: 'Network',
        proficiency: 'Expert',
        description: 'Designing and implementing RESTful API architectures'
      }
    ]
  },
  {
    title: 'Mobile Development',
    description: 'Cross-platform mobile application development',
    icon: 'Smartphone',
    skills: [
      {
        name: 'React Native',
        icon: 'Smartphone',
        proficiency: 'Advanced',
        description: 'Building native mobile apps with React'
      },
      {
        name: 'Expo',
        icon: 'Package',
        proficiency: 'Intermediate',
        description: 'Framework for developing React Native applications'
      },
      {
        name: 'Mobile UI/UX',
        icon: 'Layout',
        proficiency: 'Advanced',
        description: 'Designing intuitive mobile user experiences'
      }
    ]
  }
];
