"use client"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "../ui/Button"
import TechStackCarousel from "./TechStackCarousel"
import { TECH_STACK_THRESHOLD } from "../../lib/constants/TechStackThreshold"

/**
 * A card component for displaying project information
 *
 * @param {Object} props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.id - Project ID
 * @param {string} props.project.title - Project title
 * @param {string} props.project.description - Project description
 * @param {string} props.project.image - Project image URL
 * @param {Array} props.project.techStack - Array of tech stack items
 * @param {string} props.project.githubUrl - GitHub repository URL
 * @param {string} [props.project.liveUrl] - Live project URL (optional)
 * @param {Function} props.onHoverStart - Function to call when hover starts
 * @param {Function} props.onHoverEnd - Function to call when hover ends
 */
const ProjectCard = ({ project, onHoverStart, onHoverEnd }) => {
  return (
    <motion.div
      key={project.id}
      className="project-card group relative overflow-hidden rounded-xl border bg-white transition-all hover:shadow-lg w-full max-w-sm h-full flex flex-col"
      whileHover={{ y: -5 }}
      onHoverStart={() => onHoverStart(project.id)}
      onHoverEnd={() => onHoverEnd(null)}
    >
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold">{project.title}</h3>

        {/* Fixed height description container */}
        <div className="h-[4.5rem] mt-2">
          <p className="text-stone-600 md:text-sm line-clamp-3">{project.description}</p>
        </div>

        <div className="mt-4 flex-grow">
          {project.techStack.length > TECH_STACK_THRESHOLD ? (
            <TechStackCarousel techStack={project.techStack} />
          ) : (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group/tech relative flex items-center justify-center h-8 w-8 rounded-full bg-stone-100 p-1 transition-transform hover:scale-110"
                  title={tech.name}
                >
                  <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-5 w-5" />
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-800 text-white px-2 py-1 text-xs opacity-0 shadow-md transition-opacity group-hover/tech:opacity-100 z-10">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="gap-1 bg-stone-100 hover:bg-stone-200 border-stone-300"
          >
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          </Button>

          {project.liveUrl && (
            <Button asChild size="sm" className="gap-1 bg-primary hover:bg-primary/90 text-white">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard;
