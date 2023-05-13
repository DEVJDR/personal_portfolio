const header = {
  homepage: 'https://DEVJDR.github.io/personal_portfolio',
  title: 'DEVJDR.',
}

const about = {
  name: 'Arun J Dev',
  role: 'Front End Developer',
  description:
  'As a passionate web developer, I possess the technical prowess and expertise required to create visually stunning and high-performing websites that cater to the unique needs of your business. With my proficiency in web development frameworks, such as HTML, CSS, JavaScript, React.js I can effectively craft websites that are dynamic, responsive, and engaging.',
  resume: 'https://drive.google.com/file/d/1L7VKD_h6AgVTnBfhmixi3dLS0nyjVsvT/view?usp=share_link',
  social: {
    linkedin: 'https://www.linkedin.com/in/arun-j-dev-150a241b5/',
    github: 'https://github.com/DEVJDR',
  },
}

const projects = [
 
  {
    name: 'IMDb Clone',
    description:
      "IMDb clone using React is a web application that replicates IMDb's functionality, allowing users to browse and search for movies and view details",
    stack: ['ReactJs',
    'React Loading Skeleton' ,
    'React Responsive Caraousel'],
    sourceCode: 'https://github.com/DEVJDR',
    livePreview: 'https://reactimdbcloneapp.netlify.app',
  },
  {
    name: 'Hangman Game',
    description:
      'Hangman game using React TypeScript is a web-based application that allows players to guess a hidden word by suggesting letters',
    stack: [ 'React','TypeScript',],
    sourceCode: 'https://github.com/DEVJDR',
    livePreview: 'https://hangmanout.netlify.app',
  },
  {
    name: 'Wordle Clone',
    description:
      'A React-based Wordle clone is a web-based game where players guess a randomly generated word within limited attempts, with an intuitive interface for selecting letters and tracking progress.',
    stack: [ 'React','JavaScript'],
    sourceCode: 'https://github.com/DEVJDR',
    livePreview: 'https://reactwordleclone.netlify.app',
  },
]

const skills = [
 
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'Git',
]

const contact = {
 
  email: 'arunjdev26@gmail.com',
}

export { header, about, projects, skills, contact }
