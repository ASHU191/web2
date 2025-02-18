import { First, Second, Third, Fourth, Fifth } from '@/icons/ApproachIcons';

type NavItem = {
  title: string;
  href: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About Us',
    href: 'about',
  },
  {
    title: 'Our services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact Us',
    href: 'contact',
  },
];


type Card = {
  title: string;
  description: string;
  services: string[][];
  number: string;
  classes: string;
};

export const CARDS: Card[] = [
  {
    title: 'Your Growth, Our Mission',
    description: 'We provide web development, SEO, e-commerce, and IT solutions to enhance your online presence, search rankings, and business growth with cutting-edge technology.',
    services: [
      ['Web Development', ' SEO & Digital Marketing'],
      ['E-commerce Solutions', 'Wordpress & Shopify Development'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Fullstack development',
    description: 'End-to-end web and app solutions with seamless frontend and backend integration.',
    services: [
      ['Online store', 'Web applications'],
      ['CMS', 'API development'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Mobile App Development',
    description: 'We create high-performance, user-friendly, and scalable mobile apps to enhance engagement and business growth.',
    services: [['Android', 'IOS']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];


type ApproachCard = {
  icon: React.ComponentType; // This should be a React component for the icon
  title: string;
  description: string;
};

export const APPROACH_CARDS: ApproachCard[] = [
  {
    icon: First,
    title: 'Consultation',
    description: 'We carefully listen to your business goals and project requirements, offering expert insights to create a clear and effective development strategy.',
  },
  {
    icon: Second,
    title: 'Joint review',
    description: 'Our team collaborates with you to refine the design and functionality, ensuring the final product meets your business objectives before development begins.',
  },
  {
    icon: Third,
    title: 'Development',
    description: 'We build scalable, high-performance websites, web apps, and mobile applications using the latest full-stack technologies for seamless user experience.',
  },
  {
    icon: Fourth,
    title: 'Testing',
    description: 'Every component undergoes rigorous testing to ensure security, performance, and flawless functionality, followed by user testing for final refinements.',
  },
  {
    icon: Fifth,
    title: 'Final result',
    description: 'We deliver a fully optimized, SEO-friendly, and high-performing digital solution that enhances your online presence and business growth.',
  },
];
