import js from "../assets/javascript.png";
import Amela from "../assets/company/Amela.jpg";
import phoenixUnity from "../assets/company/phoenix_unity.jpg";
import powerGate from "../assets/company/powergate.png";
import ReactPlus from "../assets/company/ReactPlus.jpg";
import ts from "../assets/typescript.png";
import next from "../assets/next.png";
import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import redux from "../assets/tech/redux.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import react from "../assets/react.png";
import awakeProject from "../assets/awake_project.png";
import portfolio from "../assets/portfolio.png";
import blog from "../assets/blog.png";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "ReactJS",
    icon: react,
  },
  {
    title: "NextJS",
    icon: next,
  },
  {
    title: "JavaScript",
    icon: js,
  },
  {
    title: "TypeScript",
    icon: ts,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "PowerGate Software",
    icon: powerGate,
    iconBg: "#7a88bd",
    date: "May 2025 - Now",
    points: [
      "Leading frontend architecture and delivering scalable React applications for client-facing products and internal platforms.",
      "Driving technical decisions across component design, state management, performance optimization, and maintainable UI patterns.",
      "Partnering closely with product managers, designers, and backend engineers to turn complex business requirements into polished user experiences.",
      "Reviewing code, mentoring teammates, and improving engineering standards through stronger collaboration, feedback, and frontend best practices.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "PhoenixUnity",
    icon: phoenixUnity,
    iconBg: "#7a88bd",
    date: "June 2023 - May 2025",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "Amela",
    icon: Amela,
    iconBg: "#383E56",
    date: "April 2022 - June 2023",
    points: [
      "Participated in many out-source projects by using reactjs technology.",
      "Maintain and upgrade applications with new and existing features.",
      "Participate in courses and activities within the company.",
    ],
  },
  {
    title: "FrontEnd Developer",
    company_name: "ReactPlus",
    icon: ReactPlus,
    iconBg: "#3b3636",
    date: "July 2021 - April 2022",
    points: [
      "Trained in web development knowledge (HTML, CSS, Javascript, ReactJS)",
      "I also participated many out-source projects by using reactjs, nextjs technology.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Awake Project",
    description:
      "A modern landing page designed to introduce the brand, highlight key services, and drive user engagement through a clean, responsive interface.",
    tags: [
      {
        name: "NextJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: awakeProject,
    source_code_link: "https://github.com/khanhhoa-ictu/Awake-project",
  },
  {
    name: "portfolio",
    description:
      "my name is Khanh Hoa. and my portfolio is a representation of all that i've learned and accomplished as a front end developer. I hope you will like it",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "ThreeJS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/khanhhoa-ictu/portfolio",
  },
  {
    name: "Blog",
    description:
      "Web-based platform that allows users to read articles, leave comments, login, register. Provide quality articles on technology knowledge",
    tags: [
      {
        name: "NextJS",
        color: "blue-text-gradient",
      },
      {
        name: "Mysql",
        color: "green-text-gradient",
      },
    ],
    image: blog,
    source_code_link: "https://github.com/khanhhoa-ictu/next-blog",
  },
];

export { experiences, projects, services, technologies, testimonials };
