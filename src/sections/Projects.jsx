import React from "react";
import Header from "../components/ui/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  useGSAP(() => {
    const projectsHeader = document.querySelector(".projects-header");
    const projectsText = document.querySelector(".projects-text");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectsHeader,
        start: "top bottom",
      },
    });

    tl.from(projectsHeader, {
      opacity: 0,
      duration: 1,
      y: 100,
    }).from(projectsText, {
      opacity: 0,
      duration: 1,
      x: -100,
    });
  }, []);

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

      <div
        id="projects"
        className="flex flex-col p-10 min-h-[20vh] bg-stone-200"
      >
        <div className="projects-header">
          <Header title="PROJECTS" />
        </div>
        <div className="projects-text text-3xl md:text-3xl lg:text-5xl py-5 text-neutral font-bold">
          Projects coming <span className="text-primary">soon</span>! 🚧
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
  );
}

export default Projects;
