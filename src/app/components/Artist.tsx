import React from "react";
import Image from "next/image";
import artistName from '../../../public/artist-assets/artist-name.jpg'
import artistImg from '../../../public/artist-assets/artist2.jpg'


function artist() {
  return (
    <section className="artist-section bg-[#d3d2d2]" id="artist-section">
      <div className="artist-content text-black">
        <div className="flex justify-between text-black capitalize mb-7">
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, officia?</h4>
          <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat eveniet corporis recusandae, laudantium assumenda error at autem commodi aut!</p>
        </div>
        <div className="text-center flex flex-col gap-7 mb-6">
          <h1 className="capitalize text-7xl">meet <br /> <span className="italic font-bold">the artists</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam sapiente vitae animi culpa. Doloribus, voluptatem.</p>

          <div className="artist-cards w-full h-full flex justify-between">
            <Image src={artistName} alt="artist image" className="w-[660px] h-[400px] object-cover"/>
            <Image src={artistImg} alt="artist image" className="w-[660px] h-[400px] object-cover"/>
          </div>
        </div>
        <div className="w-full h-[3px] bg-black mb-7">
          <br />
        </div>
        <div className="flex justify-between text-black capitalize mb-7">
          <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, officia?</h4>
          <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit placeat eveniet corporis recusandae, laudantium assumenda error at autem commodi aut!</p>
        </div>
      </div>
    </section>
  );
}

export default artist;
