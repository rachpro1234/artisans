import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
import Artist from "./components/Artist";
import Library from "./components/Library";
import Questions from './components/Questions'
import ScrollToTop from "./components/ScrollToTop";
export default function Home() {
  return (
   <div>
    <Navbar />
    <ScrollToTop />
    <Hero />
    <Collection />
    <Artist />
    <Library />
    <Questions />
   </div>
  );
}
