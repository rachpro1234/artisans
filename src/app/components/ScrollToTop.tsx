'use client'
import React, { useState, useEffect } from 'react'

function ScrollToTop() {
const [isVisible, setIsVisible] = useState(false);

function handleTopScrollVisibility () {
    const yScroll = window.scrollY;

    if(yScroll > 100) {
        setIsVisible(true)
    } else {
        setIsVisible(false)
    }
}

useEffect(() => {
    // add scroll event when the component mounts (changes)
    window.addEventListener('scroll', handleTopScrollVisibility);

    // remove scroll event when the component mounts (changes)
    return () => {
        window.removeEventListener('scroll', handleTopScrollVisibility);
    }
})

 const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  return (
        <button type='button'
        className={`scroll-btn fixed bottom-0 right-0 w-[40px] h-[40px] bg-[#d3d2d2] border border-black text-white  rounded-full px-4 py-2 mr-6 mb-[71px] z-50 items-center text-xs flex gap-2 ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
            .
        </button>
  )
}

export default ScrollToTop