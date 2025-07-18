import React from "react";
import Image from "next/image";

// home background image
import homeBackground from "../../../public/home-assets/home-bg.jpg";

function HeroSection() {
  return (
    <section className="hero-section" id="about-section">
      <div className="hero-content">
        <article className="flex justify-between items-end mb-5">
          <h1 className="text-7xl capitalize">believers <strong className="italic inline-block">in humanity</strong></h1>
          <p className="text-justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione omnis animi minima labore consequatur at nobis!</p>
        </article>
        <div className="hero-img">
          <Image src={homeBackground} className="w-full h-[400px] object-cover rounded-md" alt="home img"/>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
