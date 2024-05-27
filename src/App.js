import "./styles/global.css";
import React from "react";
import Hero from "./sections/Hero";
import Navbar from "./components/navbar/Navbar";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

function App() {
  return (
    <div className="m-0 overflow-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
