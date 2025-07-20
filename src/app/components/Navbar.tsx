"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
      <div className={`navbar-content w-full flex items-center justify-between border-b-2 border-[rgb(190 192 193)] py-4 px-7 text-black  ${isFixed ? "fixed top-[10px] inset-x-0 w-full bg-white shadow-md rounded-full transition-all duration-700 ease-in-out" : ""}`}>
        <div className="logo">Artisans</div>
        <ul className="flex items-center gap-4">
          <li><Link href="#about-section">about</Link></li>
          <li>
            <Link href="#collection-section">collection</Link>
          </li>
          <li><Link href="#artist-section">artist</Link></li>
          <li><Link href="#library-section">library</Link></li>
          <li><Link href="#questions-section">questions</Link></li>
        </ul>
        <div className="as"><Link href="">list</Link></div>
      </div>
    </div>
  );
}

export default Navbar;
