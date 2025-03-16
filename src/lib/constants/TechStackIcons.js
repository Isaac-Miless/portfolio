import ReactIcon from "../../assets/icons/react.svg";
import HtmlIcon from "../../assets/icons/html5.svg";
import CssIcon from "../../assets/icons/css.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg";
import TailwindIcon from "../../assets/icons/tailwind.svg";
import PythonIcon from "../../assets/icons/python.svg";
import JavaIcon from "../../assets/icons/java.svg";
import SassIcon from "../../assets/icons/sass.svg";

/**
 * @typedef {Object} Icon
 * @property {string} name - The name of the technology.
 * @property {string} icon - The icon path (or URL) for the technology.
 */

/** @type {Icon[]} */
const icons = [
  { src: HtmlIcon, alt: "HTML5" },
  { src: CssIcon, alt: "CSS" },
  { src: JavascriptIcon, alt: "JavaScript" },
  { src: ReactIcon, alt: "React" },
  { src: TailwindIcon, alt: "Tailwind" },
  { src: SassIcon, alt: "Sass" },
  { src: PythonIcon, alt: "Python" },
  { src: JavaIcon, alt: "Java" },
];

export default icons;
