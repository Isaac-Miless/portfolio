import React from "react";
import Blob from "../components/hero/Blob";
import HeroInfo from "../components/hero/HeroInfo";
import TechStack from "../components/hero/TechStack";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    const blobElement = document.querySelector(".blob");
    const heroTitle = document.querySelector(".hero-title");
    const heroSubtext = document.querySelector(".hero-subtext");
    const socialIconsNodeList = document.querySelectorAll(".social-icons");
    const socialIcons = Array.from(socialIconsNodeList).reverse();
    const techStack = document.querySelector(".tech-stack");
    const techStackItems = document.querySelectorAll(".tech-stack-item");

    // Temporarily disable CSS transitions
    blobElement.style.transition = "none";
    socialIcons.forEach((icon) => (icon.style.transition = "none"));
    techStackItems.forEach((item) => (item.style.transition = "none"));

    gsap.from(blobElement, {
      y: 1000,
      duration: 1.5,
      ease: "back.out",
      onComplete: () => {
        // Re-enable CSS transitions
        blobElement.style.transition = "";
      },
    });

    gsap.from(heroTitle, {
      y: 1000,
      duration: 3,
      delay: 1,
      ease: "power2.out",
    });

    gsap.from(heroSubtext, {
      y: 1000,
      duration: 3,
      delay: 2,
      ease: "power2.out",
    });

    gsap.from(socialIcons, {
      x: -1000,
      opacity: 1,
      duration: 3,
      delay: 3,
      stagger: 0.1,
      ease: "back.out",
      onComplete: () => {
        // Re-enable CSS transitions
        socialIcons.forEach((icon) => (icon.style.transition = "none"));
      },
    });

    gsap.from(techStack, {
      y: 1000,
      borderRight: "none",
      duration: 3,
      delay: 4,
      ease: "power2.out",
    });

    gsap.from(
      techStackItems,
      {
        x: -50,
        opacity: 0,
        duration: 3,
        stagger: {
          amount: 1.5, // The amount of time to stagger the animations between each element
          grid: [2, 1], // The number of columns and rows in the grid
          axis: "y", // The axis to stagger the animations on
          ease: "circ.inOut",
          from: "center", // The starting position of the staggered animations
        },
        onComplete: () => {
          // Re-enable CSS transitions
          techStackItems.forEach((item) => (item.style.transition = ""));
        },
      },
      ">"
    );
  }, []);

  return (
    <div className="relative">
      <div
        id="home"
        className="flex flex-col gap-y-16 bg-stone-200 justify-center items-center h-[100vh] w-full m-0 overflow-hidden"
      >
        <div className="flex flex-col md:flex-row-reverse md:gap-y-0 gap-y-5 justify-evenly md:justify-center items-center w-full">
          <Blob />
          <HeroInfo />
        </div>
        <TechStack />
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
          d="M 0,400 L 0,150 C 95.31100478468898,136.00956937799043 190.62200956937795,122.01913875598089 288,143 C 385.37799043062205,163.9808612440191 484.82296650717706,219.93301435406698 569,210 C 653.1770334928229,200.06698564593302 722.0861244019138,124.24880382775119 819,102 C 915.9138755980862,79.75119617224881 1040.8325358851675,111.07177033492823 1149,128 C 1257.1674641148325,144.92822966507177 1348.5837320574162,147.46411483253587 1440,150 L 1440,400 L 0,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#e7e5e4"
          fillOpacity="1"
          transform="rotate(-180 720 200)"
        ></path>
      </svg>
    </div>
  );
};

export default Hero;
