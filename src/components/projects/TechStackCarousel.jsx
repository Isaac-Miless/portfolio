"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Threshold for when to use carousel
const TECH_STACK_THRESHOLD = 5

/**
 * A carousel component for displaying tech stack icons with automatic scrolling
 * that pauses on hover and has navigation controls.
 *
 * @param {Object} props
 * @param {Array} props.techStack - Array of tech stack items with name and icon
 */
const TechStackCarousel = ({ techStack }) => {
  const carouselRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  // Check scroll position to show/hide arrows
  const checkScrollPosition = () => {
    if (!carouselRef.current) return

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 5)
  }

  // Scroll handlers
  const scrollLeft = () => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: -100, behavior: "smooth" })
  }

  const scrollRight = () => {
    if (!carouselRef.current) return
    carouselRef.current.scrollBy({ left: 100, behavior: "smooth" })
  }

  // Set up scroll event listener
  useEffect(() => {
    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener("scroll", checkScrollPosition)
      checkScrollPosition()
      return () => carousel.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  return (
    <div className="relative group" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Left fade and arrow */}
      {showLeftArrow && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent"></div>
          <button
            onClick={scrollLeft}
            className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center ml-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Right fade and arrow */}
      {showRightArrow && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center z-10">
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent"></div>
          <button
            onClick={scrollRight}
            className="w-6 h-6 rounded-full bg-stone-200 flex items-center justify-center mr-1 shadow-md opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Scrollable container */}
      <div
        ref={carouselRef}
        className={`flex gap-2 overflow-x-auto scrollbar-hide ${!isPaused && techStack.length > TECH_STACK_THRESHOLD ? "tech-carousel" : ""}`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="group/tech relative flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-stone-100 p-1 transition-transform hover:scale-110"
            title={tech.name}
          >
            <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="h-5 w-5" />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-stone-800 text-white px-2 py-1 text-xs opacity-0 shadow-md transition-opacity group-hover/tech:opacity-100 z-10">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackCarousel
