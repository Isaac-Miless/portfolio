import Header from "../Header"
import { Badge } from "../../components/ui/badge"
import { Card, CardContent } from "../../components/ui/card"
import { Building2, GraduationCap, Trophy } from "lucide-react"
import Iceland from "../../assets/iceland.png"

function AboutMeText() {
  const experiences = [
    {
      title: "Spring Intern",
      company: "BlackRock",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      date: "Spring 2024",
      type: "work",
      description: "Technology Spring Insight Programme",
    },
    {
      title: "Software Engineer Industrial Placement",
      company: "BAE Systems",
      icon: <Building2 className="w-5 h-5 text-primary" />,
      date: "Upcoming",
      type: "work",
      description: "12-month industrial placement",
    },
    {
      title: "BSc Software Engineering",
      company: "University of Kent",
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      date: "2023 - 2027",
      achievement: "91% First Year Average",
      type: "education",
    },
  ]

  return (
    <div className="w-full px-4">
      <div className="about-me-header">
        <Header title="ABOUT ME" />
      </div>

      <div className="about-me-txt mt-8 space-y-6">
        <div className="intro-card flex flex-row justify-center">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 w-[50%]">
            <CardContent className="pt-6">
              <p className="text-lg lg:text-xl text-neutral translate-y-2">
                Hello! I'm <span className="text-primary font-semibold">Isaac</span>, a Software
                Engineering student at the University of Kent. My passion is working on impactful projects, and learning and tinkering with new technologies. I want to be the best engineer I can be, and I'm always looking for opportunities to grow and learn.
              </p>
            </CardContent>
          </Card>

          <div style={{ backgroundImage: `url(${Iceland})` }} className="blob bg-primary border-2 border-primary min-w-[50vw] min-h-[50vw] md:min-w-[35vw] md:min-h-[20vw] bg-cover bg-center m-5 shadow-custom animate-blob transition-all duration-[2000] ease-in-out bg-cover bg-center"></div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-neutral">Experience & Education</h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <Card
              key={index}
              className="border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 group"
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors shrink-0 justify-center items-center translate-y-2">
                    {exp.icon}
                  </div>
                  <div className="flex-1 min-w-0 translate-y-2">
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

export default AboutMeText;
