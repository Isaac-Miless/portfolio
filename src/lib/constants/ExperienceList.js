import { Building2, GraduationCap } from "lucide-react";

/**
 * @typedef {Object} Experience
 * @property {string} title - The title of the experience.
 * @property {string} company - The name of the company or institution.
 * @property {JSX.Element} icon - The icon representing the experience.
 * @property {string} location - The location of the experience.
 * @property {string} date - The date or duration of the experience.
 * @property {string} type - The type of experience (e.g., "work", "education").
 * @property {string} [achievement] - An optional achievement related to the experience.
 * @property {string} [description] - An optional description of the experience.
 */

/** @type {Experience[]} */
const experiences = [
    {
      title: "Aladdin Application Engineer, Intern",
      company: "BlackRock",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      location: "London, UK",
      date: "Jun 2026 - Aug 2026",
      type: "work",
      description: "8-Week Summer Internship",
    },
    {
      title: "Software Engineer Industrial Placement",
      company: "BAE Systems",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      location: "Rochester, UK",
      date: "Jun 2025 - Jun 2026",
      type: "work",
      description: "12-Month Industrial Placement",
    },
    {
      title: "Spring Intern",
      company: "BlackRock",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      location: "London, UK",
      date: "April 2025",
      type: "work",
      description: "SWE Spring Insight Week in BlackRock's Alladin Engineering Team",
    },
    {
      title: "BSc Software Engineering",
      company: "University of Kent",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      location: "Canterbury, UK",
      date: "2023 - 2027",
      achievement: "90% Second Year Average",
      type: "education",
    },
]

export default experiences;
