import project1 from "../assets/AI Paletee.jpg";
import project2 from "../assets/Giphy.png";
import project3 from "../assets/Notenest.jpg";

export const HERO_CONTENT = `
Full Stack Developer Passionate about crafting interactive and user-friendly web experiences
`;

export const ABOUT_TEXT = `
 As a Computer Science and Engineering student passionate about Full Stack development. 
 Enjoy building interactive and responsive web applications that offer a seamless user experience. 
 My skills include React Js, Tailwind CSS, Express Js, MongoDB, and I have also worked with Java for basic programming tasks.
I’m constantly exploring modern web technologies and improving my development workflow. I’m open to internship or project opportunities where I can contribute, learn, and grow as a Full Stack Developer developer.
`;

export const EXPERIENCES = [
  {
    year: " Aug 2025 - Sept 2025",
    role: "Web Design & development Internship",
    company: "TECHNOHACKS",
    description: `
      During this internship, I gained hands-on experience in

      Building responsive layouts using React Js, Tailwind CSS
      
      Strengthening my problem-solving
      
      Understanding real-world project workflows in web development

    `,
    technologies: ["React Js", "Tailwind CSS"],
  },

    {
    year: "Oct 2024 - Nov 2024",
    role: "Frontend Web Development Internship",
    company: "CODTECH IT SOLUTIONS.",
    description: `Build a Responsive web applications using JavaScript, HTML, CSS. Implemented RESTful APIs and integrated Frontend.`,
    technologies: ["Javascript", "HTML", "CSS", "RestAPI"],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "AI Color Palette App",
    image: project1,
    description: "An intelligent color palette generator powered by AI. This web app helps designers and developers discover beautiful, cohesive color schemes based on natural language prompts. Built with React +",
    technologies: ["React+vite", "OpenRouterAPI", "TailwindCSS"],
  },
  {
    title: "Giphy Search",
    image: project2,
    description:
      "Welcome to my Giphy-powered React app! This project lets users search for GIFs using the Giphy API, view results instantly, and enjoy a smooth user experience with toast notifications and a custom home page.",
    technologies: ["React+vite", "TailwindCSS", "RestAPI"],
  },
  {
    title: "Notes App",
    image: project3,
    description:
      "A simple and fast note-taking app built with React + Vite, TypeScript, and TailwindCSS, with real-time synchronization powered by Firebase Firestore. Users can easily add and delete notes, and all changes are instantly updated across sessions using Firestore onSnapshot feature.",
    technologies: ["React+vite", "TailwindCSS", "Firebase"],
  },
//   {
//     title: "Blogging Platform",
//     image: project4,
//     description:
//       "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
//     technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
//   },
];

export const CONTACT = {
  Location: "Chennai Tamil Nadu ",
  phoneNo: "+91 9094443206 ",
  email: "ashikahamed2217@gmail.com",
};