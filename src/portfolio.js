const header = {
  homepage: 'https://DEVJDR.github.io/personal_portfolio',
  title: 'DEVJDR.',
}

const about = {
  name: 'Arun J Dev',
  role: 'Front End Developer',
  description:
  'As a passionate web developer, I possess the technical prowess and expertise required to create visually stunning and high-performing websites that cater to the unique needs of your business. With my proficiency in web development frameworks, such as HTML, CSS, JavaScript, React.js I can effectively craft websites that are dynamic, responsive, and engaging.',
  resume: 'https://drive.google.com/file/d/17u6qC_r5Mm81Htu3RKkl82MnuSy0bS44/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/arun-j-dev-150a241b5/',
    github: 'https://github.com/DEVJDR',
  },
}

const projects = [
 
  {
  name: 'RunIt',
  description:
    "RunIt is an online code editor that allows users to write, compile, and execute code in 10+ languages directly in the browser. Built with a VS Code-inspired theme, custom input, and real-time output for a seamless coding experience.",
  stack: ['React.js', 'Monaco Editor', 'Tailwind CSS', 'Judge0 API'],
  sourceCode: 'https://github.com/DEVJDR/reactcodeditor',
  livePreview: 'https://reactcodeditor.vercel.app',
},
  {
    name: '3D Portfolio',
    description:
      'This project showcases a 3D Portfolio Website developed with React Three Fiber, offering users an immersive and visually captivating experience thereby providing a unique and engaging way to explore the content.',
    stack: [ 'React Three Fiber','React Three Drei',],
    sourceCode: 'https://github.com/DEVJDR/threeDportfolio',
    livePreview: 'https://github.com/DEVJDR/threeDportfolio',
  },
   {
  name: 'FreshCart',
  description:
    'A mobile app built with React Native for ordering fresh vegetables. It allows users to browse products, add items to their cart, and manage orders with a clean, user-friendly interface. Created to practice mobile app design and state management in React Native.',
  stack: ['React Native', 'JavaScript', 'Expo', 'CSS', 'Axios'],
  sourceCode: 'https://github.com/DEVJDR/Veg_prod_app',
  livePreview: 'https://github.com/DEVJDR/Veg_prod_app',
},
  {
  name: 'NeuroEase',
  description:
    'A mobile app built with React Native to help users build daily habits and stay focused. Features include task prompts, focus mode, and customizable reminders, designed for a seamless and accessible user experience.',
  stack: ['React Native', 'Expo', 'CSS'],
  sourceCode: 'https://github.com/DEVJDR/NeuroEaseApp',
  livePreview: 'https://neuro-ease-hazel.vercel.app',
}


]
const experience = [
 
  {
    name: 'Frontend Developer Intern-NimbleWork',
    description:
     "Assisted in maintaining and updating React-based enterprise UI components.Ensured W3C compliance and accessibility standards in HTML/CSS",
    stack: ['ReactJs',
    'HTML','CSS','JavaScript','Bootstrap','Tailwind CSS'],
    livePreview: 'https://www.nimblework.com/',
  },
  {
    name: 'FullStack Developer Intern-Kifayti Health',
    description:
     "Developed responsive UI components for a healthcare platform using React and Tailwind CSS.Integrated frontend with backend APIs to support real-time health data and user interactions",
    stack: ['ReactJs','Node js','Express js','MongoDB',
    'HTML','CSS','JavaScript','Bootstrap','Tailwind CSS'],
    livePreview: 'https://www.kifaytihealth.com/',
  },
  {
  name: 'Frontend Developer - KPLR',
  description:
    "Worked on building and refining user interfaces for a SaaS platform. Focused on creating reusable React components, integrating APIs, and ensuring a clean, responsive design across devices.",
  stack: ['ReactJS','JavaScript','Tailwind CSS','HTML','CSS','API Integration','UI/UX Design'],
  livePreview: 'https://kplr.in/',
},
{
  name: 'NeuroEase',
  description:
    'Built a mobile app using React Native to help users build and maintain productive daily habits. Focused on clean design, seamless navigation, state management, and accessibility for an easy and clutter-free experience.',
  stack: [
    'React Native',
    'Tailwind CSS',
    'JavaScript',
    'API Integration',
    'UI/UX Design',
    'State Management (Zustand)',
    'Navigation (React Navigation)',
  ],
  livePreview: 'https://neuro-ease-hazel.vercel.app',
}





]

const skills = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Tailwind CSS',
  'React JS',
  'Node JS',
  'Express JS',
  'MongoDB',
  'React Native',
  'React Three Fiber',
  'Git',
  'Postman',
]


const contact = {
 
  email: 'arunjdev26@gmail.com',
}

export { header, about, projects, skills, contact,experience }
