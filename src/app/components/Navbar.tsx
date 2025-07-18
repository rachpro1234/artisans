"use client";
import React, { useEffect, useState, useRef } from "react";


function Navbar() {
  const [isFixed, setIsFixed] = useState(false);
  const navRef = useRef(null)

  const toggleFixed = () => {
      
    const headerOffeset = window.pageYOffset;

    if(headerOffeset > 50) {
      setIsFixed(true);
      console.log(`the header height is, ${headerOffeset}`)
    } else {
      setIsFixed(false);
    }
  }

  useEffect(() => {  
    window.addEventListener("scroll", toggleFixed);

    return () => {
    window.removeEventListener("scroll", toggleFixed);
    }
  }, [])

  return (
    <div className="navbar-wrapper" ref={navRef}>
      {/* {isFixed && <div style={{ height: navRef.current?.offsetHeight || 0 }} />} */}
      <div className={`navbar-content w-full flex items-center justify-between border-b-2 border-[rgb(190 192 193)] py-4 px-7 text-black  ${isFixed ? "fixed top-[10px] inset-x-0 w-full bg-white shadow-md rounded-full transition-all duration-700 ease-in-out" : ""}`}>
        <div className="logo">Artisans</div>
        <ul className="flex items-center gap-4">
          <li><a href="#about-section">about</a></li>
          <li>
            <a href="#collection-section">collection</a>
          </li>
          <li><a href="#artist-section">artist</a></li>
          <li><a href="#library-section">library</a></li>
          <li><a href="#questions-section">questions</a></li>
        </ul>
        <div className="links"><a href="">list</a></div>
      </div>
    </div>
  );
}

export default Navbar;
