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


type RadioField = {
  title: string;
  classes: string;
  radioArray: { name: string; value: string }[];
  formKey: string;
};

export const RADIO_FIELDS: RadioField[] = [
  {
    title: 'Какой тип услуг вас интересует?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Your Growth, Our Mission / Брендинг', value: 'design/branding' },
      { name: 'Веб разработка', value: 'web-dev' },
      { name: 'Mobile App Development', value: 'mobile-dev' },
      { name: 'Все вышеперечисленные', value: 'all-types' },
      { name: 'Другое', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'Каков ваш бюджет?',
    classes: '',
    radioArray: [
      { name: '8000TMT - 15000TMT', value: '8-15' },
      { name: '15000TMT - 25000TMT', value: '15-25' },
      { name: '25000TMT - 50000TMT', value: '25-50' },
      { name: '50000TMT+', value: '50+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Примерно, сколько страниц будет иметь ваш проект?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Меньше 5-ти', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'Насколько быстро вам нужен проект?',
    classes: '',
    radioArray: [
      { name: 'Максимально быстро', value: 'max-fast' },
      { name: 'Высокая приоритетность ', value: 'high-prio ' },
      { name: 'Обычное время', value: 'regular' },
      { name: 'Не торопитесь ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];


type InputField = {
  label: string;
  name: string;
  classes: string;
  type?: string;
  required: boolean;
};

export const INPUT_FIELDS: InputField[] = [
  { label: "Your Name", name: "first", classes: "inline-block !w-[calc(50%-2vw)] mr-[4vw]", required: true },
  { label: "Your Phone Number", name: "phone", classes: "inline-block !w-[calc(50%-2vw)]", type: "number", required: true },
  { label: "Email", name: "email", classes: "", type: "email" },
  { label: "Company Name", name: "company", classes: "", required: true },
  { label: "Website URL", name: "websiteUrl", classes: "" },
];


type BookFormState = {
  _service: string | null;
  _budget: string | null;
  _pages: string | null;
  _quickness: string | null;
  first: string;
  phone: string;
  email: string;
  company: string;
  websiteUrl: string;
  message: string;
};

export const BOOK_FORM_DEFAULT_STATE: BookFormState = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,
  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setForm: React.Dispatch<React.SetStateAction<BookFormState>>) => {
  const { name, value } = e.target;
  setForm((prevState) => ({ ...prevState, [name]: value }));
};
