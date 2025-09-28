"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { SunDimIcon, MoonIcon } from "@phosphor-icons/react/dist/ssr";

function Navbar() {
  const [isFixed, setIsFixed] = useState(false);

  // mounted flag to avoid hydration mismatch
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // track if theme is explicitly chosen (so system preference won't override)
  const userSetTheme = useRef(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Scroll listener
  useEffect(() => {
    const toggleFixed = () => setIsFixed(window.pageYOffset > 50);
    window.addEventListener("scroll", toggleFixed, { passive: true });
    return () => window.removeEventListener("scroll", toggleFixed);
  }, []);

  // Initialize theme
  useEffect(() => {
    setMounted(true);

    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDarkMode(saved === "dark");
      userSetTheme.current = true;
    } else {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      setIsDarkMode(mq.matches);

      const onChange = (e: MediaQueryListEvent) => {
        if (!userSetTheme.current) {
          setIsDarkMode(e.matches);
        }
      };
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    }
  }, []);

  // Apply theme to <html>
  useEffect(() => {
    if (!mounted) return;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode, mounted]);

  // Sync theme across tabs
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key === "theme" && e.newValue) {
        setIsDarkMode(e.newValue === "dark");
        userSetTheme.current = true;
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggleTheme = () => {
    userSetTheme.current = true;
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="navbar-wrapper" ref={navRef}>
      <div
        className={`navbar-content text-black dark:text-white w-full flex items-center justify-between border-b-2 border-[rgb(190_192_193)] py-4 px-7 ${
          isFixed
            ? "fixed top-[10px] inset-x-0 w-full overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl shadow-blue-500/20 rounded-full z-50 animate-fadeInDown"
            : ""
        }`}
      >
        {/* Glassmorphism background layer */}
        {isFixed && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 blur-xl -z-10" />
        )}

        <div className="logo font-semibold text-lg">Artisans</div>

        <ul className="flex items-center gap-6">
          <li>
            <Link href="#about-section" className="hover:text-blue-300 transition-colors duration-200">
              about
            </Link>
          </li>
          <li>
            <Link href="#collection-section" className="hover:text-blue-300 transition-colors duration-200">
              collection
            </Link>
          </li>
          <li>
            <Link href="#artist-section" className="hover:text-blue-300 transition-colors duration-200">
              artist
            </Link>
          </li>
          <li>
            <Link href="#library-section" className="hover:text-blue-300 transition-colors duration-200">
              library
            </Link>
          </li>
          <li>
            <Link href="#questions-section" className="hover:text-blue-300 transition-colors duration-200">
              questions
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-white/10 border hover:bg-transparent hover:border-[#7955f542] bg-[#7955f542] dark:border-white/20 dark:hover:bg-white/20 transition-all duration-300 hover:scale-110"
            aria-label={mounted ? `Switch to ${isDarkMode ? "light" : "dark"} mode` : "Toggle theme"}
            title={mounted ? `Switch to ${isDarkMode ? "light" : "dark"} mode` : "Toggle theme"}
          >
            <div className="transition-transform duration-300 ease-in-out">
              {mounted ? (
                isDarkMode ? (
                  <SunDimIcon size={20} className="text-yellow-300" />
                ) : (
                  <MoonIcon size={20} className="dark:text-blue-200 text-blue-500" />
                )
              ) : (
                <span style={{ width: 20, height: 20, display: "inline-block" }} aria-hidden />
              )}
            </div>
          </button>

          <Link
            href="/list"
            className="px-4 py-2 rounded-full dark:bg-white/10 border hover:bg-transparent hover:border-[#7955f542] bg-[#7955f542] dark:border-white/20 dark:hover:bg-white/20 transition-all duration-200 hover:scale-105"
          >
            list
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
