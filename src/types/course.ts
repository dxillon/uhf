export interface Course {
  id: string;
  title: string;
    bestSeller?: boolean; 
  slug: string;
  description: string;
  coverImage: string;
  category: string;
  duration: string;
   downloadLink: string;
  instructor: {
    name: string;
    avatar: string;
    bio: string;
   
  };
  pricing: {
    pdf: {
      price: number;
      features: string[]; 
    };
    professional: {
      price: number;
      features: string[];
    };
  };
  curriculum: {
    title: string;
    description: string;
    duration: string;
     points?: string[];
  }[];
}

export const courses: Course[] = [
  {
    id: '1',
    title: 'Advanced Cinematography',
    bestSeller: true,
    slug: 'advanced-cinematography',
    description: 'Take your cinematography skills to the next level with advanced techniques and professional insights.',
    coverImage: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
    category: 'Cinematography',
    duration: '8 weeks',
     downloadLink: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    instructor: {
      name: 'Sarah Wilson',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg',
      bio: 'Renowned cinematographer with experience in feature films and commercials', 
    },
    pricing: {
      pdf: {
        price: 562,
        features: [
          'Detailed course material',
          'Lifetime access to resources',
          'Practice assignments',
          'Certificate of completion'
        ]
      },
      professional: {
        price: 899,
        features: [
          'All PDF package features',
          'Weekly live sessions',
          'Hands-on camera workshops',
          'Equipment handling training',
          'Industry visits',
          'Personal feedback',
          'Project opportunities'
        ]
      }
    },
    curriculum: [
      {
        title: 'Camera Fundamentals',
        description: 'Understanding advanced camera operations and settings',
        duration: '2 weeks',
        points: [
          'Camera sensor technology',
          'Advanced exposure control',
          'Dynamic range optimization'
        ]
      },
      {
        title: 'Lighting Techniques',
        description: 'Mastering natural and artificial lighting setups',
        duration: '2 weeks',
        points: [
          '3-point lighting setup',
          'Using reflectors and diffusers',
          'Lighting continuity in scenes'
        ]
      },
      {
        title: 'Composition and Movement',
        description: 'Advanced framing and camera movement techniques',
        duration: '2 weeks',
        points: [
          'Rule of thirds and beyond',
          'Steadicam operation',
          'Drone cinematography'
        ]
      },
      { 
        title: 'Professional Workflow',
        description: 'Industry-standard practices and workflows',
        duration: '2 weeks',
        points: [
          'DIT (Digital Imaging Technician) basics',
          'Color grading pipeline',
          'Collaboration with directors'
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'Film Directing Masterclass',
    bestSeller: true,
    slug: 'film-directing-masterclass',
    description: 'Learn the art of directing from script to screen with this comprehensive masterclass.',
    coverImage: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg',
    category: 'Directing',
    duration: '10 weeks',
    instructor: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
      bio: 'Award-winning director with 15+ years of industry experience'
    },
    pricing: {
      pdf: {
        price: 499,
        features: [
          'Directing handbook',
          'Script analysis templates',
          'Shot list examples'
        ]
      },
      professional: {
        price: 799,
        features: [
          'All PDF package features',
          'Weekly director roundtables',
          'On-set shadowing opportunities',
          'Actor direction workshops',
          'Final project showcase'
        ]
      }
    },
    curriculum: [
      {
        title: 'Visual Storytelling',
        description: 'Developing your unique visual language',
        duration: '3 weeks',
        points: [
          'Shot composition theory',
          'Visual metaphor creation',
          'Working with storyboards'
        ]
      },
      {
        title: 'Working with Actors',
        description: 'Techniques for directing performances',
        duration: '3 weeks',
        points: [
          'Actor psychology',
          'Rehearsal techniques',
          'Improvisation guidance'
        ]
      },
      {
        title: 'Set Management',
        description: 'Running an efficient film set',
        duration: '2 weeks',
        points: [
          'Shot scheduling',
          'Communication techniques',
          'Problem-solving on set'
        ]
      },
      {
        title: 'Post-Production',
        description: 'The director\'s role in editing',
        duration: '2 weeks',
        points: [
          'Editing room etiquette',
          'Working with editors',
          'Final cut decisions'
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'Professional Video Editing',
    bestSeller: true,
    slug: 'professional-video-editing',
    description: 'Master industry-standard editing techniques for film and television.',
    coverImage: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg',
    category: 'Editing',
    duration: '6 weeks',
    instructor: {
      name: 'Jessica Park',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Lead editor for major streaming platforms and feature films'
    },
    pricing: {
      pdf: {
        price: 449,
        features: [
          'Editing workflow guides',
          'Keyboard shortcut cheatsheets',
          'Project files for practice'
        ]
      },
      professional: {
        price: 749,
        features: [
          'All PDF package features',
          'DaVinci Resolve certification',
          'Premiere Pro master sessions',
          'Editing challenges with feedback',
          'Industry guest lectures'
        ]
      }
    },
    curriculum: [
      {
        title: 'Editing Fundamentals',
        description: 'Core principles of visual storytelling',
        duration: '1 week',
        points: [
          'Cutting on action',
          'J-cut and L-cut techniques',
          'Pacing and rhythm'
        ]
      },
      {
        title: 'Software Mastery',
        description: 'Deep dive into professional editing software',
        duration: '2 weeks',
        points: [
          'Premiere Pro workflow',
          'DaVinci Resolve color grading',
          'After Effects integration'
        ]
      },
      {
        title: 'Advanced Techniques',
        description: 'Professional editing methods',
        duration: '2 weeks',
        points: [
          'Multi-cam editing',
          'Sound design synchronization',
          'Visual effects pipeline'
        ]
      },
      {
        title: 'Client Workflows',
        description: 'Working with directors and producers',
        duration: '1 week',
        points: [
          'Revision management',
          'Exporting for different platforms',
          'Collaboration tools'
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Film Sound Design',
    bestSeller: false,
    slug: 'film-sound-design',
    description: 'Create immersive audio experiences for film and visual media.',
    coverImage: 'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg',
    category: 'Sound',
    duration: '5 weeks',
    instructor: {
      name: 'David Morales',
      avatar: 'https://images.pexels.com/photos/428364/pexels-photo-428364.jpeg',
      bio: 'Oscar-nominated sound designer with 20+ years in the industry'
    },
    pricing: {
      pdf: {
        price: 399,
        features: [
          'Sound library resources',
          'DAW configuration guides',
          'Foley techniques handbook'
        ]
      },
      professional: {
        price: 699,
        features: [
          'All PDF package features',
          'Pro Tools certification',
          'Field recording workshops',
          'Sound mixing sessions',
          'Studio tour'
        ]
      }
    },
    curriculum: [
      {
        title: 'Sound Theory',
        description: 'Fundamentals of audio for film',
        duration: '1 week',
        points: [
          'Psychoacoustics principles',
          'Frequency ranges in film',
          'Dynamic range control'
        ]
      },
      {
        title: 'Recording Techniques',
        description: 'Capturing high-quality audio',
        duration: '1 week',
        points: [
          'Boom operation',
          'Lavaliere mic placement',
          'Room tone capture'
        ]
      },
      {
        title: 'Sound Design',
        description: 'Creating cinematic soundscapes',
        duration: '2 weeks',
        points: [
          'Foley artistry',
          'Sound effect layering',
          'Diegetic vs non-diegetic sound'
        ]
      },
      {
        title: 'Mixing and Mastering',
        description: 'Finalizing your audio mix',
        duration: '1 week',
        points: [
          'Dialogue cleaning',
          'Ambient bed creation',
          'Final mix delivery standards'
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Documentary Filmmaking',
    bestSeller: false,
    slug: 'documentary-filmmaking',
    description: 'Learn to tell compelling false stories through documentary filmmaking.',
    coverImage: 'https://images.pexels.com/photos/3563639/pexels-photo-3563639.jpeg',
    category: 'Directing',
    duration: '7 weeks',
    instructor: {
      name: 'Amina Johnson',
      avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      bio: 'Emmy-winning documentary filmmaker and investigative journalist'
    },
    pricing: {
      pdf: {
        price: 529,
        features: [
          'Documentary pitch templates',
          'Release form examples',
          'Interview techniques guide'
        ]
      },
      professional: {
        price: 849,
        features: [
          'All PDF package features',
          'Camera equipment training',
          'Editing documentary footage',
          'Distribution strategies',
          'Film festival submission guidance'
        ]
      }
    },
    curriculum: [
      {
        title: 'Story Development',
        description: 'Finding and shaping your documentary story',
        duration: '2 weeks',
        points: [
          'Research methodologies',
          'Story arc development',
          'Ethical considerations'
        ]
      },
      {
        title: 'Interview Techniques',
        description: 'Getting compelling interviews',
        duration: '1 week',
        points: [
          'Question formulation',
          'Creating safe spaces',
          'Active listening techniques'
        ]
      },
      {
        title: 'Cinéma Vérité',
        description: 'Observational documentary techniques',
        duration: '2 weeks',
        points: [
          'Run-and-gun shooting',
          'Natural lighting adaptation',
          'Unobtrusive recording'
        ]
      },
      {
        title: 'Post-Production',
        description: 'Editing documentary footage',
        duration: '2 weeks',
        points: [
          'Archival material integration',
          'Narration recording',
          'Fair use guidelines'
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Action Film Cinematography',
    bestSeller: false,
    slug: 'action-film-cinematography',
    description: 'Specialized techniques for shooting high-octane action sequences.',
    coverImage: 'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg: ',
    category: 'Cinematography',
    duration: '4 weeks',
    instructor: {
      name: 'Jack Reynolds',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
      bio: 'Stunt coordinator turned cinematographer specializing in action films'
    },
    pricing: {
      pdf: {
        price: 599,
        features: [
          'Shot breakdowns from famous films',
          'Safety protocols guide',
          'Equipment checklist'
        ]
      },
      professional: {
        price: 999,
        features: [
          'All PDF package features',
          'Stunt coordination training',
          'Special camera rig workshops',
          'Pyrotechnics safety course',
          'Insurance and liability guidance'
        ]
      }
    },
    curriculum: [
      {
        title: 'Stunt Coordination',
        description: 'Working with stunt teams',
        duration: '1 week',
        points: [
          'Pre-visualization techniques',
          'Safety meetings',
          'Shot planning with stunts'
        ]
      },
      {
        title: 'High-Speed Cinematography',
        description: 'Slow motion and speed ramping',
        duration: '1 week',
        points: [
          'Frame rate selection',
          'Lighting for high speed',
          'Temporal effects'
        ]
      },
      {
        title: 'Special Rigs',
        description: 'Camera mounting for action',
        duration: '1 week',
        points: [
          'Car mounts',
          'Cable cam systems',
          'Crash cams'
        ]
      },
      {
        title: 'Post Production',
        description: 'Enhancing action in post',
        duration: '1 week',
        points: [
          'Speed adjustments',
          'Impact enhancement',
          'Sound design sync'
        ]
      }
    ]
  },
  {
    id: '7',
    title: 'Color Grading for Film',
    bestSeller: false,
    slug: 'color-grading-for-film',
    description: 'Master the art of color grading to create cinematic looks for your projects.',
    coverImage: 'https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg',
    category: 'Editing',
    duration: '4 weeks',
    instructor: {
      name: 'Elena Rodriguez',
      avatar: 'https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg',
      bio: 'Colorist for major studio films and streaming series'
    },
    pricing: {
      pdf: {
        price: 479,
        features: [
          'LUT library',
          'Color theory guide',
          'Node-based workflow diagrams'
        ]
      },
      professional: {
        price: 799,
        features: [
          'All PDF package features',
          'DaVinci Resolve certification',
          'Showlooks development',
          'HDR grading techniques',
          'Client project simulations'
        ]
      }
    },
    curriculum: [
      {
        title: 'Color Theory',
        description: 'Fundamentals of color in film',
        duration: '1 week',
        points: [
          'Color psychology',
          'Complementary schemes',
          'Cultural color meanings'
        ]
      },
      {
        title: 'Grading Tools',
        description: 'Mastering professional software',
        duration: '1 week',
        points: [
          'Primary correction',
          'Secondary isolation',
          'Power windows'
        ]
      },
      {
        title: 'Creative Looks',
        description: 'Developing signature styles',
        duration: '1 week',
        points: [
          'Film emulation',
          'Period looks',
          'Genre-specific grading'
        ]
      },
      {
        title: 'Delivery Standards',
        description: 'Meeting technical requirements',
        duration: '1 week',
        points: [
          'Rec709 vs P3 vs 2020',
          'HDR workflows',
          'QC processes'
        ]
      }
    ]
  },
  {
    id: '8',
    title: 'Film Producing Essentials',
    bestSeller: false,
    slug: 'film-producing-essentials',
    description: 'Learn the business and logistics of film production from development to distribution.',
    coverImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    category: 'Directing',
    duration: '6 weeks',
    instructor: {
      name: 'Robert Chang',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      bio: 'Producer with 50+ feature film credits and studio executive experience'
    },
    pricing: {
      pdf: {
        price: 549,
        features: [
          'Budget templates',
          'Schedule examples',
          'Contract samples'
        ]
      },
      professional: {
        price: 899,
        features: [
          'All PDF package features',
          'Pitch deck development',
          'Financing strategies',
          'Distribution deals',
          'Film market preparation'
        ]
      }
    },
    curriculum: [
      {
        title: 'Development',
        description: 'Finding and packaging projects',
        duration: '1 week',
        points: [
          'Script analysis',
          'Attaching talent',
          'Pitch deck creation'
        ]
      },
      {
        title: 'Financing',
        description: 'Funding your production',
        duration: '2 weeks',
        points: [
          'Budget preparation',
          'Investor relations',
          'Tax incentives'
        ]
      },
      {
        title: 'Production',
        description: 'Running a smooth shoot',
        duration: '1 week',
        points: [
          'Union regulations',
          'Insurance requirements',
          'Crisis management'
        ]
      },
      {
        title: 'Distribution',
        description: 'Getting your film seen',
        duration: '2 weeks',
        points: [
          'Film festivals',
          'Streaming deals',
          'Theatrical release'
        ]
      }
    ]
  },
  {
    id: '9',
    title: 'Visual Effects for Filmmakers',
    bestSeller: false,
    slug: 'visual-effects-for-filmmakers',
    description: 'Integrate practical and digital effects into your film projects seamlessly.',
    coverImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    category: 'Editing',
    duration: '5 weeks',
    instructor: {
      name: 'Sophie Martin',
      avatar: 'https://images.pexels.com/photos/415687/pexels-photo-415687.jpeg',
      bio: 'VFX supervisor for blockbuster films and AAA game cinematics'
    },
    pricing: {
      pdf: {
        price: 599,
        features: [
          'Asset libraries',
          'Compositing tutorials',
          '3D tracking guides'
        ]
      },
      professional: {
        price: 999,
        features: [
          'All PDF package features',
          'Nuke certification',
          'On-set VFX supervision',
          'Matchmoving workshops',
          'Client project reviews'
        ]
      }
    },
    curriculum: [
      {
        title: 'Pre-Production',
        description: 'Planning for VFX',
        duration: '1 week',
        points: [
          'Previz techniques',
          'Shoot planning',
          'Asset preparation'
        ]
      },
      {
        title: 'On-Set VFX',
        description: 'Capturing elements properly',
        duration: '1 week',
        points: [
          'Greenscreen best practices',
          'Witness cameras',
          'HDR environment capture'
        ]
      },
      {
        title: 'Digital Effects',
        description: 'Creating CGI elements',
        duration: '2 weeks',
        points: [
          '3D modeling basics',
          'Texturing and lighting',
          'Particle systems'
        ]
      },
      {
        title: 'Compositing',
        description: 'Bringing it all together',
        duration: '1 week',
        points: [
          'Keying techniques',
          'Color matching',
          'Final render passes'
        ]
      }
    ]
  },
];