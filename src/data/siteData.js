// Central data file — edit here to update site content

export const siteInfo = {
  name: 'Global School',
  tagline: 'Shaping Future Leaders',
  address: 'Sheikh Zayed Street, Abu Dhabi, UAE',
  phone: '+971 2 123 4567',
  email: 'info@globalschool.edu',
  hours: 'Mon - Fri : 08.00 AM - 03.00 PM',
  established: 2000,
  socials: {
    facebook: '#',
    twitter: '#',
    linkedin: '#',
    instagram: '#',
  },
};

export const stats = [
  { icon: 'fa-user-graduate', number: '1000+', label: 'Students' },
  { icon: 'fa-chalkboard-teacher', number: '50+',   label: 'Teachers' },
  { icon: 'fa-school',            number: '25',     label: 'Years of Excellence' },
  { icon: 'fa-award',             number: '100%',   label: 'Board Results' },
];

export const programs = [
  {
    icon: 'fa-shapes',
    title: 'Primary Education',
    desc: 'Foundation for lifelong learning with a focus on core subjects and personal development.',
    grades: 'Grades 1–5',
    img: '/img/school_auditorium_modern.webp',
  },
  {
    icon: 'fa-microscope',
    title: 'Secondary Education',
    desc: 'Comprehensive curriculum designed to challenge and inspire older students in diverse fields.',
    grades: 'Grades 6–10',
    img: '/img/courses-2.webp',
  },
  {
    icon: 'fa-laptop-code',
    title: 'Senior Secondary',
    desc: 'Specialized streams preparing students for competitive exams and future university careers.',
    grades: 'Grades 11–12',
    img: '/img/courses-3.webp',
  },
];

export const facilities = [
  { icon: 'fa-chalkboard',      title: 'Smart Classrooms', desc: 'Technology-enabled learning environments with interactive whiteboards and modern pedagogical tools.' },
  { icon: 'fa-flask',           title: 'Science Labs',     desc: 'Fully equipped Physics, Chemistry, and Biology laboratories ensuring practical, hands-on scientific learning.' },
  { icon: 'fa-book-reader',     title: 'Rich Library',     desc: 'An extensive collection of academic books, international journals, and digital resources.' },
  { icon: 'fa-running',         title: 'Sports Complex',   desc: 'Premium infrastructure for indoor and outdoor sports including basketball courts and football fields.' },
  { icon: 'fa-laptop-code',     title: 'Computer Lab',     desc: 'Advanced IT infrastructure with high-speed internet, coding software, and digital learning zones.' },
  { icon: 'fa-bus',             title: 'Transportation',   desc: 'Safe and reliable fleet of GPS-tracked school buses covering all major routes across the city.' },
];

export const team = [
  { img: '/img/team-1.webp', name: 'Dr. Rajiv Sharma',  role: 'Head of Science' },
  { img: '/img/team-2.webp', name: 'Ms. Priya Nair',    role: 'English & Literature' },
  { img: '/img/team-3.webp', name: 'Mrs. Anita Desai',  role: 'Mathematics Faculty' },
  { img: '/img/team-4.webp', name: 'Mr. Suresh Menon',  role: 'Sports & PE Director' },
];

export const testimonials = [
  {
    img: '/img/testimonial-1.webp',
    quote: 'Global School has transformed my child\'s learning journey. The faculty is incredibly dedicated and the environment fosters curiosity and critical thinking.',
    name: 'Rekha Kapoor',
    role: 'Parent of a Grade 8 Student',
  },
  {
    img: '/img/testimonial-2.webp',
    quote: 'Studying here has been the best experience. The teachers genuinely care, and the extracurricular activities helped me discover my passion for science.',
    name: 'Arjun Mehta',
    role: 'Grade 12 Student',
  },
  {
    img: '/img/testimonial-3.webp',
    quote: 'As a teacher, I am proud to be part of an institution that truly believes in holistic education and continual professional growth.',
    name: 'Dr. Anjali Rao',
    role: 'Faculty Member',
  },
];

export const leadership = [
  {
    key: 'founder',
    label: 'Founder',
    img: '/img/person_principal_formal.webp',
    tag: 'The Visionary',
    heading: 'Message from Our Founder',
    quote: '"Education is not just about filling a bucket, but about lighting a fire."',
    body: 'My journey with Global School began with a simple dream: to create an institution where every child finds their purpose. We don\'t just teach; we inspire excellence and integrity.',
    name: 'Shri. R.K. Oberoi',
    title: 'Founder & Patron',
  },
  {
    key: 'chairman',
    label: 'Chairman',
    img: '/img/team-2.webp',
    tag: 'Governance & Excellence',
    heading: 'Chairman\'s Perspective',
    quote: null,
    body: 'Our commitment is to provide world-class infrastructure and a nurturing environment. We are constantly evolving to meet the demands of the 21st century while keeping our traditional values intact.',
    name: 'Mrs. Anjali Mehta',
    title: 'Chairman',
  },
  {
    key: 'principal',
    label: 'Principal',
    img: '/img/person_principal_formal.webp',
    tag: 'Academic Leadership',
    heading: 'From the Principal\'s Desk',
    quote: null,
    body: 'Welcome to a community of learners. As Principal, I ensure our academic framework remains robust and our students remain curious. We strive for a balance of academics, sports, and arts.',
    name: 'Dr. Sameer Gupta',
    title: 'Principal (Ph.D Education)',
  },
];

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Infrastructure', to: '/infrastructure' },
  {
    label: 'Academics', to: '/academics',
    dropdown: [
      { label: 'Curriculum',       to: '/academics#curriculum' },
      { label: 'Learning Method',  to: '/academics#learning' },
      { label: 'Assessment',       to: '/academics#assessment' },
      { label: 'IT & E-learning',  to: '/academics#elearning' },
      { label: 'PTI',              to: '/academics#pti' },
    ],
  },
  {
    label: 'Beyond', to: '/beyond-academics',
    dropdown: [
      { label: 'Sports',     to: '/beyond-academics#sports' },
      { label: 'Clubs',      to: '/beyond-academics#clubs' },
      { label: 'Projects',   to: '/beyond-academics#projects' },
      { label: 'Workshops',  to: '/beyond-academics#workshops' },
    ],
  },
  { label: 'Showcase', to: '/showcase' },
  { label: 'News & Events', to: '/news' },
  {
    label: 'Rules', to: '/rules',
    dropdown: [
      { label: 'School Rules',   to: '/rules#school-rules' },
      { label: 'Fee Rules',      to: '/rules#fee-rules' },
      { label: 'Bus Rules',      to: '/rules#bus-rules' },
      { label: 'Code of Conduct',to: '/rules#code-conduct' },
    ],
  },
  { label: 'Gallery', to: '/gallery' },
  {
    label: 'Contact', to: '/contact',
    dropdown: [
      { label: 'Contact Info', to: '/contact#info' },
      { label: 'Enquiry',      to: '/contact#enquiry' },
      { label: 'Feedback',     to: '/contact#feedback' },
    ],
  },
];
