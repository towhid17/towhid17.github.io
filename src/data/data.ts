import { type GalleryImage } from '../components/gallery/types';
import { type Publication, type ResearchProject, type AcademicProject } from './types';

export const galleryImages: GalleryImage[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d',
    alt: 'AI Research Lab',
    category: 'Research'
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    alt: 'Conference Presentation',
    category: 'Conferences'
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    alt: 'Laboratory Work',
    category: 'Lab'
  }
];

export const publications: Publication[] = [
  {
    id: 'pub-1',
    title: 'Enforcing delay-aware fog-cloud based IoT firewall (work in progress)',
    year: 2022,
    venue: 'IEEE 21st International Symposium on Network Computing and Applications (NCA)',
    authors: ['Towhidul Islam', 'Asif Ahmed', 'Tanvir Raihan', 'Rezwana Reaz'],
    pdfUrl: '#',
    paperUrl: 'https://doi.org/10.1109/NCA57778.2022.10013561'
  },
  {
    id: 'pub-2',
    title: 'ENFIRED: ENforcing IoT FIREwall using fog-cloud framework under Delay constraints',
    year: 2024,
    venue: ' IEEE/ACM 17th International Conference on Utility and Cloud Computing (UCC)',
    authors: ['Towhidul Islam', 'Asif Ahmed Utsa', 'Rezwana Reaz'],
    // pdfUrl: 'https://drive.google.com/file/d/1RkoQ47489mlfZtqsF64M8zo_FDLSgj0E/view?usp=sharing',
    pdfUrl: '#',
    paperUrl: 'https://doi.org/10.1109/UCC63386.2024.00034'
  },
  {
    id: 'pub-3',
    title: 'H2OPulse: Smartphone-Assisted Vein Evaluation for Early Recognition of Dehydration',
    year: 2025,
    venue: 'UbiComp/IMWUT 24',
    authors: ['Towhidul Islam', 'Mehedi Hasan Rigan', 'Olid Hasan', 'Tanzima Hashem', 'Md. Mahbubur Rahman'],
    pdfUrl: '#',
    paperUrl: 'https://doi.org/10.1145/3729490'
  },
];

export const underReview: Publication[] = [
    
];


export const academicProjects: AcademicProject[] = [
  {
    id: 'project-1',
    title: 'NS3: Delay Based TCP Congestion Control: TCP-CHD',
    link: 'https://github.com/towhid17/NS3-Delay-Based-TCP-Congestion-Control',
    description: 'TCP-CHD is a novel congestion control algorithm implemented for NS3.',
    technologies: ['NS3', 'C++', 'Python']
  },
  {
    id: 'project-2',
    title: 'CodeSprint: Online Coding Interview Prep Platform',
    link: 'https://github.com/towhid17/CodeSrpint',
    description: 'CodeSprint is an online platform that provides a vast collection of coding challenges and problems designed to help users prepare for technical interviews and improve their programming skills. It is built with Spring, Hibernate, and OracleDB',
    technologies: ['Spring', 'Java', 'Hibernate', 'OracleDB']
  },
  {
    id: 'project-3',
    title: 'Binary Classification using CNN and transfer learning',
    link: 'https://github.com/towhid17/Binary-classification-using-transfer-learning',
    description: 'Two classification models of good and defective tools images: a CNN model and a model using transfer learning with mobileNet as the base model.',
    technologies: ['Deep Learning', 'Pytorch', 'CNN', 'Transfer Learning']
  },
  {
    id: 'project-4',
    title: 'Android App: Online Multiplayer Poker: PokerBD',
    link: 'https://github.com/towhid17/PokerBD',
    description : 'PokerBD is a multiplayer poker game for Android devices with a Bkash payment system integrated, which is available in the Google Play Store.',
    technologies: ['Android', 'Spring Boot', 'Java', 'Postgres', 'Bkash Gateway'],
  },
  {
    id: 'project-5',
    title: 'Online Educational Platform: E-Learners',
    link: 'https://github.com/towhid17/E-Learners',
    description: 'E-Learners is an educational platform for school students interested in CS-related career tracks, built with React, Django, and Postgres.',
    technologies: ['React', 'Django', 'Postgres']
  },
  {
    id: 'project-6',
    title: 'Fantasy Premier League: FPL',
    link: 'https://github.com/towhid17/Fantasy-Premier-League',
    description: 'FPL is an English Premier League’s fantasy league desktop app.',
    technologies: ['JavaFX', 'OracleDB']
  },
  {
    id: 'project-7',
    title: 'Multiplayer 8 ball pool',
    link: 'https://github.com/towhid17/8-Ball-Pool-Java-Project',
    description: 'Online Multiplayer 8 ball pool game using JavaFx and Java socket programming.',
    technologies: ['JavaFX', 'Java', 'Socket Programming']
  },

];

export const researchProjects: ResearchProject[] = [
  {
    id: 'project-1',
    title: 'Neural Machine Translation for Low-Resource Languages',
    brief: 'Developing advanced translation models for languages with limited training data.',
    description: 'This project focuses on creating neural machine translation systems that can effectively translate between language pairs where one or both languages have limited available training data. We employ transfer learning techniques and data augmentation strategies to improve translation quality.',
    imageUrl: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=800&q=80',
    findings: [
      'Transfer learning from high-resource language pairs improves low-resource translation by up to 35%',
      'Data augmentation techniques including back-translation and synthetic data generation provide significant improvements',
      'Attention mechanisms adapted specifically for morphologically rich languages show promising results'
    ],
    methodologies: [
      'Transfer Learning',
      'Data Augmentation',
      'Attention Mechanisms',
      'Transformer Architecture',
      'Cross-lingual Embeddings'
    ],
    team: [
      'Dr. Towhidul Islam (Lead)',
      'Dr. Sarah Johnson',
      'Alex Chen',
      'Maria Rodriguez'
    ],
    relatedPublications: [
      'Islam T., Johnson S. (2023). "Cross-lingual Transfer Learning for Low-Resource Neural Machine Translation." ACL 2023.',
      'Chen A., Islam T. (2022). "Attention Mechanisms for Morphologically Rich Languages." EMNLP 2022.'
    ],
    additionalImages: [
      {
        url: 'https://images.unsplash.com/photo-1555952494-efd681c7e3f9?auto=format&fit=crop&w=800&q=80',
        caption: 'Model architecture diagram showing the modified attention mechanism'
      },
      {
        url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
        caption: 'Performance comparison across different language pairs'
      }
    ]
  },
  {
    id: 'project-2',
    title: 'Computer Vision for Medical Diagnostics',
    brief: 'Using deep learning to improve early detection of diseases from medical imaging.',
    description: 'This research project applies state-of-the-art computer vision techniques to medical imaging data, with the goal of improving early detection of various diseases. We focus particularly on developing models that can work with limited labeled data and provide interpretable results to assist medical professionals.',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80',
    findings: [
      'Our model achieved 94% accuracy in detecting early-stage lung abnormalities, outperforming existing methods by 7%',
      'Interpretability techniques revealed key visual features that correlate with specific diagnoses',
      'Transfer learning from natural images to medical domains proved effective with appropriate fine-tuning strategies'
    ],
    methodologies: [
      'Convolutional Neural Networks',
      'Transfer Learning',
      'Few-shot Learning',
      'Grad-CAM Visualization',
      'Ensemble Methods'
    ],
    team: [
      'Dr. Towhidul Islam',
      'Dr. Rebecca Wong (Medical Advisor)',
      'James Peterson',
      'Sophia Kim'
    ],
    relatedPublications: [
      'Islam T., Wong R., Peterson J. (2023). "Few-shot Learning for Medical Image Classification." Nature Medicine.',
      'Kim S., Islam T. (2022). "Interpretable Deep Learning for Pulmonary Disease Detection." MICCAI 2022.'
    ],
    additionalImages: [
      {
        url: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80',
        caption: 'Grad-CAM visualization highlighting regions of interest in lung CT scans'
      }
    ]
  },
  {
    id: 'project-3',
    title: 'Reinforcement Learning for Robotic Control',
    brief: 'Training robots to perform complex manipulation tasks through reinforcement learning.',
    description: 'This project explores the application of advanced reinforcement learning algorithms to enable robots to learn complex manipulation tasks. We focus on developing sample-efficient methods that can learn from limited demonstrations and generalize to new environments and objects.',
    imageUrl: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80',
    findings: [
      'Our approach reduces the number of real-world samples needed by 80% compared to standard RL methods',
      'Sim-to-real transfer techniques successfully bridged the reality gap for delicate manipulation tasks',
      'Hierarchical reinforcement learning improved long-horizon task completion rates by 65%'
    ],
    methodologies: [
      'Deep Reinforcement Learning',
      'Imitation Learning',
      'Sim-to-Real Transfer',
      'Hierarchical RL',
      'Meta-Learning'
    ],
    team: [
      'Dr. Towhidul Islam',
      'Dr. Michael Chen',
      'Olivia Wilson',
      'David Park'
    ],
    relatedPublications: [
      'Islam T., Chen M. (2023). "Sample-Efficient Reinforcement Learning for Robotic Manipulation." ICRA 2023.',
      'Wilson O., Islam T., Park D. (2022). "Hierarchical Approaches to Complex Manipulation Tasks." CoRL 2022.'
    ],
    additionalImages: [
      {
        url: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80',
        caption: 'Robot performing a precision assembly task learned through our RL approach'
      },
      {
        url: 'https://images.unsplash.com/photo-1581092921461-7031e4bfb83a?auto=format&fit=crop&w=800&q=80',
        caption: 'Simulation environment used for pre-training the robotic control policies'
      }
    ]
  },
  {
    id: 'project-4',
    title: 'Multimodal Learning for Scientific Discovery',
    brief: 'Combining text, image, and structured data to accelerate scientific research.',
    description: 'This interdisciplinary project develops multimodal deep learning approaches that can integrate information from scientific literature, experimental images, and structured databases to assist in scientific discovery. We focus particularly on applications in materials science and drug discovery.',
    imageUrl: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    findings: [
      'Our multimodal approach identified 23 novel candidate molecules with desired properties, 5 of which were experimentally validated',
      'Integration of image and text data improved prediction accuracy by 42% compared to unimodal approaches',
      'Knowledge graph augmentation techniques helped overcome limited labeled data challenges'
    ],
    methodologies: [
      'Multimodal Deep Learning',
      'Knowledge Graphs',
      'Self-supervised Learning',
      'Graph Neural Networks',
      'Vision-Language Models'
    ],
    team: [
      'Dr. Towhidul Islam',
      'Dr. Emily Zhang (Chemistry)',
      'Dr. Robert Johnson (Materials Science)',
      'Aisha Patel',
      'Thomas Lee'
    ],
    relatedPublications: [
      'Islam T., Zhang E., Patel A. (2023). "Multimodal Learning for Scientific Literature Mining." Nature Machine Intelligence.',
      'Lee T., Islam T., Johnson R. (2022). "Knowledge Graph-Enhanced Multimodal Learning for Materials Discovery." KDD 2022.'
    ]
  }
];