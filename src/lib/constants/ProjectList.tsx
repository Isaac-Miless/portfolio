import Project from "../../types/Project";
import PortfolioImage from "../../assets/images/projects/imiles.dev_.png";
import ReactIcon from "../../assets/icons/react.svg";
import HtmlIcon from "../../assets/icons/html5.svg";
import CssIcon from "../../assets/icons/css.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
import PythonIcon from "../../assets/icons/python.svg";
import JavaIcon from "../../assets/icons/java.svg";
import SassIcon from "../../assets/icons/sass.svg";

const projects: Project[] = [
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
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: TailwindIcon,
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
    githubUrl: "https://github.com/Isaac-Miless/portfolio",
    liveUrl: "https://imiles.dev",
  },
];

export default projects;
