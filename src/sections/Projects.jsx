import Header from "../components/Header"
import { Card, CardContent, CardFooter } from "../components/ui/card"
import { Badge } from "../components/ui/badge"
import { ExternalLink } from "lucide-react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with React and Tailwind CSS. Features smooth animations, responsive design, and modern UI components.",
      techStack: ["React", "Tailwind CSS", "GSAP"],
      github: "https://github.com/Isaac-Miless/portfolio",
      live: "https://isaac-miles.vercel.app",
    },
    // TODO: need to list my other projects here 
  ]

  useGSAP(() => {
    const projectsHeader = document.querySelector(".projects-header")
    const projectCards = document.querySelectorAll(".project-card")

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsHeader,
        start: "top bottom",
      },
    })

    tl.from(projectsHeader, {
      opacity: 0,
      duration: 1,
      y: 100,
    }).from(projectCards, {
      opacity: 0,
      duration: 0.5,
      y: 50,
      stagger: 0.2,
      immediateRender: false, // Prevents immediate application of the starting state
    })
  }, [])

  return (
    <>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="relative -bottom-[2vh]"
      >
        <path
          d="M 0,400 L 0,150 C 108.42105263157893,120.1244019138756 216.84210526315786,90.24880382775119 305,79 C 393.15789473684214,67.75119617224881 461.0526315789474,75.12918660287085 568,113 C 674.9473684210526,150.87081339712915 820.9473684210526,219.23444976076556 911,217 C 1001.0526315789474,214.76555023923444 1035.157894736842,141.93301435406698 1114,119 C 1192.842105263158,96.06698564593302 1316.421052631579,123.03349282296651 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#e7e5e4"
          fillOpacity="1"
        ></path>
      </svg>

      <div id="projects" className="flex flex-col p-10 min-h-[20vh] bg-stone-200">
        <div className="max-w-4xl mx-auto w-full">
          <div className="projects-header mb-8">
            <Header title="PROJECTS" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="project-card border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral mb-2">{project.title}</h3>
                  <p className="text-neutral/80 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-sm py-1 px-3">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-neutral hover:text-primary transition-colors"
                  >
                    <div className="w-5 h-5 translate-y-[-2px]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    </div>
                    <span>GitHub</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-neutral hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 390"
        xmlns="http://www.w3.org/2000/svg"
        className="relative -top-[2vh]"
      >
        <path
          d="M 0,400 L 0,150 C 107.56937799043061,120.50717703349282 215.13875598086122,91.01435406698565 315,96 C 414.8612440191388,100.98564593301435 507.0143540669858,140.44976076555025 598,133 C 688.9856459330142,125.55023923444975 778.8038277511961,71.18660287081337 875,88 C 971.1961722488039,104.81339712918663 1073.7703349282297,192.8038277511962 1169,215 C 1264.2296650717703,237.1961722488038 1352.1148325358852,193.5980861244019 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#e7e5e4"
          fillOpacity="1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </>
  )
}

export default Projects
