// Import assets
import PortfolioImage from "../../assets/projects/portfolio2.png";
import ProjectAPIImage from "../../assets/projects/project-api.jpg";

// Import icons
import ReactIcon from "../../assets/icons/react.svg";
import HtmlIcon from "../../assets/icons/html5.svg";
import CssIcon from "../../assets/icons/css.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
// import PythonIcon from "../../assets/icons/python.svg";
// import JavaIcon from "../../assets/icons/java.svg";
// import SassIcon from "../../assets/icons/sass.svg";

/**
 * @typedef {Object} Project
 * @property {string} id - The unique identifier for the project.
 * @property {string} title - The title of the project.
 * @property {string} description - A short description of the project.
 * @property {string} image - The image path (or URL) for the project.
 * @property {TechStackItem[]} techStack - An array of technologies used in the project.
 * @property {string} githubUrl - The URL to the project’s GitHub repository.
 * @property {string} [liveUrl] - (Optional) The URL to the live project.
 */

/** @type {Project[]} */
const projects = [
  {
    id: "1",
    title: "This Website",
    description:
      "This is my personal website built with React and Tailwind CSS. It showcases my experience, projects, and more.",
    image: PortfolioImage,
    techStack: [
      {
        name: "React",
        icon: ReactIcon,
      },
      {
        name: "HTML5",
        icon: HtmlIcon,
      },
      {
        name: "CSS",
        icon: CssIcon,
      },
      {
        name: "JavaScript",
        icon: JavascriptIcon,
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
    ],
    githubUrl: "https://github.com/Isaac-Miless/portfolio",
    liveUrl: "https://imiles.dev",
  },
  {
    id: "2",
    title: "Project API",
    description:
      "A CRUD API for managing projects built with Go and PostgreSQL. It includes endpoints for creating, reading, updating, and deleting projects.",
    image: ProjectAPIImage,
    techStack: [
      {
        name: "Go",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
    ],
    githubUrl: "https://github.com/Isaac-Miless/project-api",
  },
];

export default projects;
