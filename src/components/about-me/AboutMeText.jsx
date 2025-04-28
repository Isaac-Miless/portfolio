import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Trophy, MapPin } from "lucide-react"
import Iceland from "../../assets/iceland.png"
import experiences from "../../lib/constants/ExperienceList"

function AboutMeText() {

  return (
    <div className="w-full md:px-4 max-w-6xl mx-auto">

      <div className="about-me-txt mt-8 space-y-6">
        <div className="intro-section flex flex-col lg:flex-row justify-center items-stretch gap-8">
          {/* Image Block - Now a colored div */}
          {/* style={{ backgroundImage: `url(${Iceland})` }} */}

          {/* About Me Text */}
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-full lg:w-[55%] lg:min-h-[300px] order-3 lg:order-none h-full">
            <CardContent className="pt-6">
              <p className="text-lg lg:text-xl text-neutral lg:translate-y-6">
              Hello! I'm <span className="text-primary font-semibold">Isaac</span>, a Software Engineering student 
              at the University of Kent. I love building impactful projects and exploring 
              new technologies, and I'm always seeking opportunities to grow as an engineer.
              If you're interested in working together, feel free to <a href="#contact" className="text-primary font-semibold">reach out</a>!
              </p>
            </CardContent>
          </Card>

          <div
            style={{ backgroundImage: `url(${Iceland})` }}
            className="w-full lg:w-[45%] min-h-[300px] bg-primary/20 rounded-lg border-2 border-primary/20 shadow-custom order-2 lg:order-none bg-cover bg-[50%_30%] bg-clip-content transition-all duration-300"
          ></div>
        </div>

        <div className="space-y-4 mt-12">
          <h3 className="text-xl font-semibold text-neutral">Experience & Education</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
              >
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0">
                      {exp.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between flex-wrap gap-2">
                        <h4 className="text-lg font-semibold text-neutral">{exp.title}</h4>
                        {exp.achievement && (
                          <Badge variant="secondary" className="flex items-center gap-1 shrink-0">
                            <Trophy className="w-3 h-3" />
                            {exp.achievement}
                          </Badge>
                        )}
                      </div>
                      <p className="text-neutral/80">{exp.company}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3 text-primary/70" />
                        <p className="text-sm text-neutral/70">{exp.location}</p>
                      </div>
                      <p className="text-sm text-neutral/60 mt-1">{exp.date}</p>
                      {exp.description && <p className="text-sm text-neutral/70 mt-2">{exp.description}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMeText
