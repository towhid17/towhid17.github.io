import { NewsItem } from './types';

export const newsItems: NewsItem[] = [
  {
    id: 'news-1',
    date: '2024-06-15',
    title: 'Published Research on Advanced NLP Techniques',
    description: 'Our team\'s latest research on transformer architectures has been accepted at ICML 2024. This work introduces a novel approach to attention mechanisms that improves performance on low-resource languages.',
    content: `
      <p>We're excited to announce that our paper "Attention Mechanisms for Low-Resource Languages" has been accepted at ICML 2024. This research introduces a novel approach to transformer architectures that significantly improves performance on languages with limited training data.</p>
      
      <p>Key contributions of our work include:</p>
      <ul>
        <li>A modified attention mechanism that better captures morphological features</li>
        <li>A data augmentation technique specifically designed for low-resource scenarios</li>
        <li>Extensive evaluation across 15 languages showing consistent improvements</li>
      </ul>
      
      <p>The full paper will be available in the conference proceedings, and we'll be presenting our findings at the main conference in July. This work represents a significant step forward in making NLP technologies more accessible to a wider range of languages and communities.</p>
      
      <p>We'd like to thank our collaborators at Stanford NLP Group and the anonymous reviewers for their valuable feedback that helped strengthen this work.</p>
    `,
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'news-2',
    date: '2024-05-28',
    title: 'Keynote Speaker at AI Summit',
    description: 'Delivered keynote address on the future of machine learning in healthcare at the International AI Summit in London.',
    content: `
      <p>Last week, I had the honor of delivering the keynote address at the International AI Summit in London. My talk, titled "Machine Learning at the Bedside: Transforming Healthcare Through AI," explored the current state and future directions of AI applications in clinical settings.</p>
      
      <p>The presentation covered several key areas:</p>
      <ul>
        <li>Current deployment challenges in clinical environments</li>
        <li>Ethical considerations and regulatory frameworks</li>
        <li>Recent breakthroughs in medical imaging and diagnostic support</li>
        <li>Future directions for personalized medicine</li>
      </ul>
      
      <p>The talk was followed by a panel discussion with leading healthcare professionals and AI researchers, where we discussed practical steps for accelerating the responsible adoption of AI in healthcare systems worldwide.</p>
      
      <p>I'm grateful to the organizers for the opportunity to share our work and vision with such an engaged audience. The discussions that followed have already led to several potential new collaborations that we're excited to explore.</p>
      
      <p>A recording of the keynote will be available on the conference website next month.</p>
    `,
    category: 'Speaking',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'news-3',
    date: '2024-05-10',
    title: 'New Research Grant',
    description: 'Received $500K research grant for investigating novel deep learning applications in climate science.',
    content: `
      <p>We're thrilled to announce that our lab has been awarded a $500,000 research grant from the National Science Foundation to investigate novel applications of deep learning in climate science.</p>
      
      <p>This three-year project, titled "Deep Learning for Climate Prediction: Bridging Physics and Data," aims to develop new neural network architectures that can better incorporate physical constraints while leveraging the growing availability of climate data.</p>
      
      <p>The research will focus on three main objectives:</p>
      <ul>
        <li>Developing physics-informed neural networks for improved regional climate prediction</li>
        <li>Creating interpretable models that can help identify key climate drivers</li>
        <li>Building tools to better quantify uncertainty in climate projections</li>
      </ul>
      
      <p>This grant will support two PhD students and create new opportunities for undergraduate research involvement. We're particularly excited about the interdisciplinary nature of this work, which will bring together researchers from computer science, atmospheric physics, and statistics.</p>
      
      <p>We'll be posting regular updates on our progress and opportunities to get involved in the coming months.</p>
    `,
    category: 'Funding',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-4',
    date: '2024-04-15',
    title: 'New Course on Deep Reinforcement Learning',
    description: 'Launching a new graduate-level course on advanced reinforcement learning techniques for the Fall 2024 semester.',
    content: `
      <p>I'm excited to announce that I'll be teaching a new graduate-level course titled "CS 598: Advanced Deep Reinforcement Learning" in the Fall 2024 semester.</p>
      
      <p>This course will cover cutting-edge techniques in reinforcement learning, with a focus on recent advances in:</p>
      <ul>
        <li>Multi-agent reinforcement learning</li>
        <li>Offline reinforcement learning</li>
        <li>Hierarchical reinforcement learning</li>
        <li>Safe reinforcement learning</li>
        <li>Applications in robotics, games, and recommendation systems</li>
      </ul>
      
      <p>The course will feature a mix of theoretical foundations and practical implementations, with students working on a substantial research project throughout the semester. We'll also have guest lectures from industry researchers working on applied RL systems.</p>
      
      <p>Registration will open next month, and the course will be available to graduate students in Computer Science, Statistics, and related fields. Prerequisites include a strong background in machine learning and proficiency in Python programming.</p>
      
      <p>A detailed syllabus will be posted on the department website in the coming weeks.</p>
    `,
    category: 'Teaching',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-5',
    date: '2024-03-22',
    title: 'Lab Receives Industry Partnership',
    description: 'Established new research partnership with Google DeepMind to advance work on interpretable machine learning.',
    content: `
      <p>We're pleased to announce a new research partnership between our lab and Google DeepMind focused on advancing the field of interpretable machine learning.</p>
      
      <p>This two-year collaboration will support our ongoing work on developing machine learning models that not only achieve high performance but also provide transparent explanations for their decisions. The partnership includes funding for two postdoctoral researchers and access to computational resources.</p>
      
      <p>Key research directions will include:</p>
      <ul>
        <li>Novel architectures for self-explaining neural networks</li>
        <li>Methods for generating counterfactual explanations</li>
        <li>Evaluation frameworks for measuring the quality of explanations</li>
        <li>Applications in high-stakes domains such as healthcare and criminal justice</li>
      </ul>
      
      <p>As part of this partnership, we'll be organizing a workshop on interpretable ML at next year's NeurIPS conference, bringing together researchers from academia and industry to share recent advances and identify key challenges.</p>
      
      <p>We're excited about the potential of this collaboration to accelerate progress in making advanced ML systems more transparent and trustworthy.</p>
    `,
    category: 'Partnership',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80',
    featured: true
  },
  {
    id: 'news-6',
    date: '2024-02-18',
    title: 'Paper Accepted at ACL 2024',
    description: 'Our work on multilingual transfer learning has been accepted for publication at ACL 2024.',
    content: `
      <p>We're happy to share that our paper "Cross-lingual Transfer Learning with Minimal Resources" has been accepted for publication at the Association for Computational Linguistics (ACL) 2024 conference.</p>
      
      <p>This work addresses the challenge of building effective NLP systems for languages with limited training data. We introduce a novel approach that leverages knowledge from high-resource languages to improve performance on low-resource targets, achieving state-of-the-art results on several benchmarks.</p>
      
      <p>Our method has several key advantages:</p>
      <ul>
        <li>Requires as little as 100 labeled examples in the target language</li>
        <li>Works across typologically diverse language families</li>
        <li>Maintains performance even when the source and target languages use different scripts</li>
        <li>Can be applied to a wide range of NLP tasks</li>
      </ul>
      
      <p>The paper will be presented at the main conference in Bangkok this August. A preprint is available on arXiv, and all code and pretrained models have been released on our GitHub repository.</p>
      
      <p>This research was supported in part by our NSF grant on multilingual NLP and computational resources provided by the university's high-performance computing center.</p>
    `,
    category: 'Research',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-7',
    date: '2024-01-30',
    title: 'New Lab Members',
    description: 'Welcoming three new PhD students and a postdoctoral researcher to our research group.',
    content: `
      <p>I'm delighted to welcome four new members to our research group this semester:</p>
      
      <p><strong>Dr. Sarah Chen</strong> joins us as a postdoctoral researcher after completing her PhD at MIT. Sarah's expertise is in reinforcement learning and robotics, and she'll be leading our new project on sample-efficient policy learning for robotic manipulation.</p>
      
      <p><strong>Miguel Rodriguez</strong> is starting his PhD after completing his master's at the University of Barcelona. Miguel will be working on multilingual NLP, with a focus on low-resource languages and cross-lingual transfer.</p>
      
      <p><strong>Aisha Patel</strong> comes to us from Carnegie Mellon University, where she completed her undergraduate degree in Computer Science. Aisha's research will focus on interpretable machine learning for healthcare applications.</p>
      
      <p><strong>David Kim</strong> joins after working for two years as a research engineer at OpenAI. David will be exploring new approaches to large language model alignment and safety.</p>
      
      <p>With these additions, our lab now includes researchers working across the spectrum of AI, from theoretical foundations to practical applications. We're excited about the new perspectives and expertise these talented individuals bring to our team.</p>
      
      <p>Please join me in welcoming Sarah, Miguel, Aisha, and David to our research community!</p>
    `,
    category: 'Lab',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    featured: false
  },
  {
    id: 'news-8',
    date: '2023-12-15',
    title: 'Year-End Research Summary',
    description: 'Reflecting on our lab\'s accomplishments in 2023 and looking ahead to new research directions for 2024.',
    content: `
      <p>As we approach the end of 2023, I'd like to take a moment to reflect on our lab's accomplishments this year and share our vision for 2024.</p>
      
      <p><strong>2023 Highlights:</strong></p>
      <ul>
        <li>Published 12 papers in top-tier venues (NeurIPS, ICML, ACL, CVPR)</li>
        <li>Secured $1.2M in new research funding</li>
        <li>Graduated 3 PhD students, all of whom have gone on to research positions in academia and industry</li>
        <li>Released 5 open-source libraries and datasets</li>
        <li>Organized 2 workshops at major conferences</li>
        <li>Established new collaborations with researchers in 4 countries</li>
      </ul>
      
      <p><strong>Looking Ahead to 2024:</strong></p>
      <p>In the coming year, we'll be expanding our research in several exciting directions:</p>
      <ul>
        <li>Multimodal learning across vision, language, and structured data</li>
        <li>AI for scientific discovery, with applications in materials science and drug design</li>
        <li>Responsible AI, with a focus on fairness, interpretability, and privacy</li>
        <li>Foundation models for specialized domains</li>
      </ul>
      
      <p>We're also planning to launch a new seminar series featuring speakers from diverse backgrounds and perspectives in AI research.</p>
      
      <p>Thank you to all our collaborators, funding agencies, and supporters who made this year's work possible. We're looking forward to another productive year of research and discovery in 2024!</p>
    `,
    category: 'Lab',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    featured: false
  }
];

export const newsCategories = [
  'All',
  'Research',
  'Speaking',
  'Funding',
  'Teaching',
  'Partnership',
  'Lab'
];