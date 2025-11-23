import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Profolio',
    description:
      'A cross-platform real estate lead management app supporting 1,075+ agencies across UAE and Egypt, with 50K+ monthly users.',
    logo: '/logos/react_icon.svg',
    slug: 'profolio',
    category: 'professional',
    contributions: [
      'Delivered 30+ production features as a core React Native engineer on Profolio\'s upgrade from v2.0 to v3.0, spanning navigation refactors, onboarding flows, analytics widgets, and lead management enhancements',
      'Built a BI-driven Overview Page with widgets for top locations/properties by leads and impressions, active property snapshots, agent responsiveness, and TruBroker badge progress',
      'Designed and shipped a first-time user onboarding sheet and flows that improved completion by around 40%',
      'Implemented portal-aware login and session logic for UAE and Egypt agents, centralising market-specific configuration',
      'Implemented Bayut Leads surfaces from Agency & Agent Profile to expose portal leads inside Profolio, increasing lead transparency by 20%',
      'Redesigned the Lead Detail Page with similar property suggestions and clearer CTAs, increasing in-screen engagement by 15%',
      'Shipped engagement features such as ProAgent badge surfacing and global haptic feedback patterns',
      'Added advanced property and lead filters, enabling faster segmentation by location, status, and activity',
      'Coordinated with Product, Design, Data, and QA teams to align backlog grooming, technical scoping, and release planning',
      'Proactively fixed dozens of bugs and regressions, improving UI responsiveness and stability across iOS and Android',
    ],
    technologies: [
      'Expo',
      'React Native',
      'TypeScript',
      'Tanstack Query',
      'Elastic Search',
      'Firebase',
      'Git',
      'Xcode',
      'Android Studio',
    ],
    links: {
      appStore: 'https://apps.apple.com/app/profolio',
      playStore: 'https://play.google.com/store/apps/details?id=com.profolio',
    },
  },
  {
    title: 'Triangle Wallet',
    description:
      'A crypto wallet for iOS/Android, offering real-time asset tracking, transactions, and interactive price analytics.',
    logo: '/logos/react_icon.svg',
    slug: 'triangle-wallet',
    category: 'professional',
    contributions: [
      'Delivered end-to-end frontend development of Triangle Wallet, a production React Native crypto wallet with real-time price tracking and dynamic data visualisation',
      'Took full ownership of core app flows including landing, login, signup, price listings, buy/sell, price graphs, transaction history, and gift card screens',
      'Integrated real-time cryptocurrency price APIs and built interactive 24-hour price charts, increasing session depth',
      'Improved performance and maintainability by refactoring screens into reusable components and tightening state management patterns',
      'Worked in a Kanban-style services environment, delivering UI/UX refinements and mobile features from a continuous stream of client requests',
    ],
    technologies: [
      'React Native',
      'Express.js',
      'Fireblocks API',
      'Redux Toolkit',
      'Xcode',
      'Android Studio',
    ],
  },
  {
    title: 'Nitrogen Estimation App',
    description:
      'Mobile app that operationalizes a computer-vision model for estimating nitrogen in plant leaves to support smallholder farmers.',
    logo: '/logos/react_icon.svg',
    slug: 'nitrogen-estimation-app',
    category: 'research',
    contributions: [
      'Led front-end development and UX design, creating guided capture flows, audio prompts, and localized UI so low-literacy users can follow the process confidently',
      'Designed nitrogen data visualizations and recommendations that help farmers interpret model outputs and choose appropriate fertiliser actions',
      'Collaborated with Dr. Muhammad Hassan Khan to turn a computer-vision research model into a practical farmer-facing mobile application',
      'Focused on accessibility features including voice guidance and visual cues for users with limited technical literacy',
    ],
    technologies: [
      'Expo',
      'React Native',
      'Mobile UX design',
      'Prototyping',
      'Localization',
    ],
  },
  {
    title: 'Airwatch',
    description:
      'NASA Space Apps 2025 MVP that visualises air-quality predictions from NASA TEMPO and ground-based data through a web dashboard.',
    logo: '/logos/react_icon.svg',
    slug: 'airwatch',
    category: 'hackathon',
    contributions: [
      'Built and designed the front-end in Next.js with Ant Design and Mapbox, including interactive maps, charts, and responsive layouts',
      'Integrated the UI with the team\'s FastAPI endpoints, wired API calls, handled loading/error states',
      'Deployed on Vercel for scalability and CI/CD performance',
      'Led a team of 4 to deliver a complete MVP during the NASA Space Apps Challenge 2025',
      'Created real-time air quality visualizations showing regional trends and forecasts from NASA TEMPO data',
    ],
    technologies: [
      'Next.js',
      'ReactJS',
      'TypeScript',
      'Mapbox',
      'Ant Design',
      'Vercel',
    ],
    links: {
      website: 'https://airwatch.health',
    },
  },
];
