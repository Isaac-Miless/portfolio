"use client"

import { useState, useEffect, useRef } from "react"
import Logo from "./Logo"
import NavOption from "./NavOption"
import { gsap } from "gsap"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [navHeight, setNavHeight] = useState(56) // Default height
  const navRef = useRef(null)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  // Effect to handle mobile menu animations
  useEffect(() => {
    if (menuOpen) {
      gsap.to(".navbar-mobile", {
        x: 0,
        duration: 0.5,
        ease: "power2.out",
        opacity: 1,
        display: "flex",
      })
      gsap.to(".nav-item-mobile", {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.1,
      })
    } else {
      gsap.to(".nav-item-mobile", {
        duration: 0,
        opacity: 0,
      })
      gsap.to(".navbar-mobile", {
        x: "-100%",
        duration: 0,
        ease: "power2.in",
        opacity: 0,
        display: "none",
      })
    }
  }, [menuOpen])

  // Effect to measure navbar height
  useEffect(() => {
    if (!navRef.current) return

    // Function to update height
    const updateHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight
        setNavHeight(height)
      }
    }

    // Initial measurement
    updateHeight()

    // Set up resize observer to track size changes
    const resizeObserver = new ResizeObserver(updateHeight)
    resizeObserver.observe(navRef.current)

    // Clean up
    const nav = navRef.current
    return () => {
      if (nav) {
        resizeObserver.unobserve(nav)
      }
    }
  }, [])

  return (
    <>
      {/* Placeholder div that dynamically matches navbar height */}
      <div className="bg-stone-200" style={{ height: `${navHeight}px` }}></div>

      {/* Fixed navbar */}
      <nav
        ref={navRef}
        className="bg-stone-200 bg-opacity-50 backdrop-blur-md px-4 py-2 flex justify-between items-center fixed top-0 left-0 w-full z-50"
      >
        {/* Solid element behind the navbar - same size but transparent */}
        <div className="absolute inset-0 bg-stone-200 z-[-1]"></div>

        <Logo />
        <div id="hamburger-container" className="md:hidden relative">
          <button
            className={`hamburger hamburger--collapse z-50 ${menuOpen ? "fixed right-4 top-2 is-active" : ""}`}
            type="button"
            onClick={toggleMenu}
            id="hamburger"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <ul
          className={`navbar-mobile md:hidden flex-col space-y-4 ${
            menuOpen &&
            "bg-stone-200 bg-opacity-95 backdrop-blur-md h-[100vh] w-full z-40 items-center justify-center no-scroll"
          } fixed top-0 left-0 right-0 w-full transform -translate-x-full`}
        >
          {["home", "about", "projects", "contact"].map((text) => (
            <li
              key={text}
              className={`nav-item-mobile ${menuOpen ? "opacity-0 text-2xl" : "opacity-100"} pt-2 pl-4 pb-2`}
            >
              <NavOption text={text} />
            </li>
          ))}
        </ul>
        <ul className="hidden md:flex md:flex-row space-x-8">
          {["home", "about", "projects", "contact"].map((text) => (
            <li key={text} className="opacity-100 md:pl-0 md:pb-0 pt-2 pl-4 pb-2">
              <NavOption text={text} />
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
