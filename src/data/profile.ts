import type {
  Project,
  SkillCategory,
  EducationEntry,
  Certification,
  Stat,
} from '../types';

/**
 * SINGLE SOURCE OF TRUTH
 * Every value below is taken directly from Pooja Hegde's resume (Pooja_Hegde.pdf).
 * Nothing here is invented.
 */

export const profile = {
  name: 'Pooja Hegde',
  title: 'Software Engineer',
  tagline: 'Software Engineer · Full-Stack Developer',
  location: 'Bangalore, Karnataka, India',
  email: 'poojahegde880@gmail.com',
  linkedin: 'https://www.linkedin.com/in/poojahegde14',
  github: 'https://github.com/poojahegde880/',
  portfolio: 'https://poojaportfolio2025.netlify.app/',
  resumeFile: '/Pooja_Hegde_Resume.pdf',
  photo: '/profile.png',
  summary:
"I build full-stack web applications from responsive React interfaces to scalable Node.js and Flask APIs backed by MySQL databases. My recent work includes NephroScan AI, an AI-powered healthcare application, and QR Forge, a secure full-stack QR code generation platform with authentication and history management.",
  typingKeywords: [
  'Software Engineer',
  'Full-Stack Developer',
  'React & Node.js Developer',
  'AI & Machine Learning Enthusiast',
],
  about: [
    // TODO(Pooja): Replace this first line with your own voice — what actually pulled you into
    // engineering, or what kind of problems you like solving. One honest sentence beats a polished generic one.
    "I'm a Software Engineer and MCA graduate passionate about building full-stack web applications and AI-powered solutions that solve real-world problems.",
    'My projects span three different problem spaces — an AI-assisted healthcare tool (NephroScan AI), a security-conscious consumer app (QR Forge, with JWT auth and bcrypt hashing), and an operations system that replaced a manual process (Rental Equipment Management). I like picking a real constraint — a diagnosis workflow, a login flow, a manual process — and building the full stack underneath it, from the database up to the UI.',
    "I'm currently looking for full-stack or backend-leaning Software Engineer roles where I can keep working close to both the data layer and the product.",
  ],
};


export const skillCategories: SkillCategory[] = [
  {
    category: 'Programming Languages',
    skills: ['Java', 'Python', 'C', 'C++'],
  },
  {
    category: 'Frontend Technologies',
    skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Vite'],
  },
  {
    category: 'Backend Technologies',
    skills: ['Flask', 'Node.js', 'Express', 'PHP'],
  },
  {
    category: 'Databases',
    skills: ['SQL', 'MySQL'],
  },
  {
    category: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'Linux', 'Visual Studio Code', 'AWS'],
  },
  {
    category: 'Other Technical Skills',
    skills: ['TensorFlow', 'Keras', 'OpenCV'],
  },
];

export const projects: Project[] = [
  {
    id: 'nephroscan-ai',
    name: 'NephroScan AI',
    date: 'September 2025',
    description:
      'AI-powered healthcare application for Chronic Kidney Disease detection using CT scan images and Explainable AI (Grad-CAM).',
    features: [
      'CNN-based CKD detection with 90%+ accuracy',
      'Explainable AI using Grad-CAM heatmaps',
      'Patient history management with MySQL',
      'Automatic PDF report generation',
      'Responsive full-stack interface for secure image upload and real-time predictions',
    ],
    tech: ['Python', 'React', 'Flask', 'TensorFlow', 'MySQL', 'Bootstrap'],
    liveLink: 'https://nephroscan-ai.netlify.app/',
    githubLink: 'https://github.com/poojahegde880/NephroScan-AI',
  },
  {
    id: 'qr-forge',
    name: 'QR Forge \u2013 Smart QR Code Generator',
    description:
"A secure full-stack QR Code Generator that creates customizable QR codes for text, URLs, Wi-Fi, contacts, WhatsApp, Google Maps, and more with authentication and history management.",
    features: [
      'Multi-format QR generation: text, URLs, Wi-Fi, contact info, WhatsApp, and Google Maps',
      'Custom colors and logo embedding for branded QR codes',
      'Export as PNG or SVG',
      'Secure JWT authentication with bcrypt password hashing',
      'Generation history tracking per user',
    ],
    tech: [
      'React',
      'Vite',
      'JavaScript',
      'HTML',
      'CSS',
      'Axios',
      'Node.js',
      'Express',
      'MySQL',
    ],
    liveLink: 'https://poojahegde880.github.io/qr-forge/',
    githubLink: 'https://github.com/poojahegde880/qr-forge',
  },
  {
    id: 'algo-viz',
    name: 'Algorithm Visualizer (Algo Viz)',
    date: 'April 2025',
    description:
      'A web-based application that helps users visualize algorithms such as sorting and searching interactively.',
    features: [
      'Graphical animations demonstrate each step of the algorithm',
      'Improves conceptual understanding for students and learners',
    ],
    tech: [
'HTML',
'CSS',
'JavaScript',
'Bootstrap',
],
    liveLink: 'https://poojahegde880.github.io/AlgoViz/',
    githubLink: 'https://github.com/poojahegde880/AlgoViz',
  },
  {
    id: 'rental-management',
    name: 'Rental Equipment Management System',
    date: 'January 2023',
    description:
      'A web-based solution that optimizes the process of renting and tracking equipment across multiple categories.',
    features: [
      'Automated booking and return system cut manual effort by 40%',
      'Reduced errors and boosted overall efficiency',
    ],
    tech: ['HTML', 'CSS', 'JS', 'Bootstrap', 'PHP', 'MySQL'],
    githubLink: 'https://github.com/poojahegde880/Rental-Equipment-Management-System',
  },
];

export const education: EducationEntry[] = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Dayananda Sagar College of Arts, Science and Commerce',
    location: 'Bangalore, Karnataka, India',
    score: '7.6 CGPA',
    period: 'February 2024 – November 2025',
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'JMJ BCA College, Sirsi, Karnataka, India',
    affiliation: 'Karnataka University Dharwad',
    location: 'Sirsi, Karnataka, India',
    score: '8.61 CGPA',
    period: 'September 2020 – October 2023',
  },
];

export const certifications: Certification[] = [
  { title: 'AWS Cloud Practitioner Essentials', issuer: 'AWS', date: 'September 2025' },
  { title: 'Programming in Python', issuer: 'Meta', date: 'July 2025' },
  { title: 'Essentials of Cloud Computing', issuer: 'Infosys Springboard', date: 'January 2025' },
  { title: 'Linux for Beginners', issuer: 'Infosys Springboard', date: 'October 2024' },
  { title: 'Java Foundations', issuer: 'Oracle Academy', date: 'May 2024' },
];

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];
