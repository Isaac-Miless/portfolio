import React from "react";
import Header from "../components/ui/Header";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

function Contact() {
  useGSAP(() => {
    const contactHeader = document.querySelector(".contact-header");
    const contactText = document.querySelector(".contact-text");
    const contactEmail = document.querySelector(".contact-email");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: contactHeader,
        start: "top bottom",
      },
    });

    tl.from(contactHeader, {
      opacity: 0,
      duration: 1,
      y: 100,
    })
      .from(contactText, {
        opacity: 0,
        duration: 1,
        y: 100,
      })
      .from(contactEmail, {
        opacity: 0,
        duration: 1,
        x: -100,
      });
  }, []);

  return (
    <div
      id="contact"
      className="flex bg-surface flex-col text-md md:text-xl p-10 min-h-[30vh]"
    >
      <div className="contact-header">
        <Header title="CONTACT" />
      </div>
      <div className="contact-text flex flex-row text-xl lg:text-2xl gap-x-4 items-center justify-left mt-8 text-neutral text-left w-70vw md:w-[60vw]">
        If you'd like to get in
        touch, feel free to send me a message on LinkedIn! 🤠
      </div>
    </div>
  );
}

export default Contact;
