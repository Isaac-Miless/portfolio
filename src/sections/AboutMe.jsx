import AboutMeText from "../components/about-me/AboutMeText"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

function AboutMe() {
  useGSAP(() => {
    const aboutMeHeader = document.querySelector(".about-me-header")
    const aboutMeCards = document.querySelectorAll(".about-me-txt > *")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutMeHeader,
        start: "top bottom",
      },
    })

    tl.from(aboutMeHeader, {
      opacity: 0,
      duration: 1,
      x: 100,
    }).from(aboutMeCards, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      stagger: 0.2,
    })
  }, [])

  return (
    <div id="about" className="flex flex-col bg-surface justify-center items-center min-h-[90vh] py-16">
      <div className="relative flex flex-col items-center justify-center w-full max-w-4xl">
        <AboutMeText />
      </div>
    </div>
  )
}

export default AboutMe
