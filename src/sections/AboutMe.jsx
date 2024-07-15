import React from "react";
import ImageLayout from "../components/about-me/ImageLayout";
import AboutMeText from "../components/about-me/AboutMeText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function AboutMe() {
  useGSAP(() => {
    const aboutMeImg = document.querySelector(".about-me-img");
    const aboutMeHeader = document.querySelector(".about-me-header");
    const aboutMeText = document.querySelector(".about-me-txt");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: aboutMeImg,
        start: "top bottom",
      },
    });
    tl.from(aboutMeImg, {
      opacity: 0,
      duration: 1,
      x: -100,
    })
      .from(aboutMeHeader, {
        opacity: 0,
        duration: 1,
        x: 100,
      })
      .from(aboutMeText, {
        opacity: 0,
        duration: 1,
        y: 100,
      });
  }, []);

  return (
    <div
      id="about"
      className="flex flex-col bg-surface justify-center items-center min-h-[90vh] lg:min-h-[70vh]"
    >
      <div className="relative mt-5 mb-5 flex flex-col items-center justify-center min-h-screen">
        <div className="relative flex items-center justify-center">
          <ImageLayout />
        </div>
        <AboutMeText />
      </div>
    </div>
  );
}

export default AboutMe;
