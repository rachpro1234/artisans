import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Collection from "./components/Collection";
import Artist from "./components/Artist";
import Library from "./components/Library";
import Questions from './components/Questions'
export default function Home() {
  return (
   <div>
    <Navbar />
    <Hero />
    <Collection />
    <Artist />
    <Library />
    <Questions />
   </div>
  );
}
