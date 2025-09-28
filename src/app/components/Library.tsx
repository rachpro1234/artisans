"use client"

import React, {useState} from "react";
import Image from "next/image";

interface ItemsTypes {
  id: number,
  src: string,
  title: string,
  desc: string,
  year: number,
}

function ArtLibrary() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const libraryItems: ItemsTypes[] = [
    {
      id: 1,
      src: '/library-assets/library-item1.avif',
      title: '',
     desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit purus varius interdum feugiat odio cras etiam. At faucibus amet et blandit nulla ut fringilla lorem.',
      year: 1900
    },
    {
      id: 2,
      src: '/library-assets/library-item2.avif',
      title: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit purus varius interdum feugiat odio cras etiam. At faucibus amet et blandit nulla ut fringilla lorem.',
      year: 1900
    },
    {
      id: 3,
      src: '/library-assets/library-item3.avif',
      title: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit purus varius interdum feugiat odio cras etiam. At faucibus amet et blandit nulla ut fringilla lorem.',
      year: 1900
    },
    {
      id: 4,
      src: '/library-assets/library-item1.avif',
      title: '',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suscipit purus varius interdum feugiat odio cras etiam. At faucibus amet et blandit nulla ut fringilla lorem.',
      year: 1900
    }
  ]

  const currentItem = libraryItems[currentIndex]


   const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? libraryItems.length - 1 : prevIndex - 1
  )};

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === libraryItems.length - 1 ? 0 : prevIndex + 1
  )};

  return (
    <section className="artlibrary-section" id="artlibrary-section">
       <article className="artlibrary-content">
        {/* Header */}
        <div className="grid grid-cols-3 gap-8 mb-8 pb-4 border-b border-gray-700">
          <h3 className="text-lg font-light text-gray-300">Year</h3>
          <h3 className="text-lg font-light text-gray-300">Art</h3>
          <h3 className="text-lg font-light text-gray-300">Description</h3>
        </div>

        {/* Content */}
        <div className="grid grid-cols-3 gap-8 items-start">
          {/* Year Column */}
          <div className="flex flex-col h-full justify-between">
            <span className="text-4xl font-light mb-4">{currentItem.year}</span>

            <div>
                  {/* Progress Indicators */}
                <div className="flex justify-start mt-12 gap-2">
                  {libraryItems.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      title="plus"
                      className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                        index === currentIndex ? 'bg-white' : 'bg-gray-600'
                      }`}
                      aria-label={`Go to artwork ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Thumbnail Strip (Optional) */}
                <div className="mt-8 flex justify-start gap-4 overflow-x-auto pb-4">
                  {libraryItems.map((item, index) => (
                    <button
                      name="button"
                      type="button"
                      key={item.id}
                      onClick={() => setCurrentIndex(index)}
                      title="plus"
                      className={`flex-shrink-0 transition-opacity duration-300 ${
                        index === currentIndex ? 'opacity-100' : 'opacity-50'
                      }`}
                    >
                      <Image 
                        src={item.src} 
                        width={60} 
                        height={80} 
                        alt={item.title}
                        className="rounded object-cover"
                        style={{ aspectRatio: '3/4' }}
                      />
                    </button>
                  ))}
                </div>
                {/* Navigation Controls */}
                <div className="flex gap-4">
                  <button
                    onClick={goToPrevious}
                    className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300"
                    aria-label="Previous artwork"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  
                  <button
                    onClick={goToNext}
                    className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center hover:border-white transition-colors duration-300"
                    aria-label="Next artwork"
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
            </div>
          </div>

          {/* Art Column */}
          <div className="flex flex-col items-center">
            <div className="relative w-full">
              <Image 
                src={currentItem.src} 
                width={300} 
                height={400} 
                alt={currentItem.title}
                className="rounded-lg shadow-lg object-cover w-full"
                style={{ aspectRatio: '3/4' }}
              />
            </div>
            
          </div>

          {/* Description Column */}
          <div className="flex flex-col">
            <h4 className="text-xl font-light mb-4 text-white">
              {currentItem.title}
            </h4>
            <p className="text-gray-300 leading-relaxed text-sm">
              {currentItem.desc}
            </p>
          </div>
        </div>
      </article>
      {/* <article className="library-content">
         <div>
            <div className="flex justify-around">
              <h3>year</h3>
              <h3>art</h3>
              <h3>description</h3>
            </div>
            <div className="flex items-center">
              {libraryItems.map((libItem)  => {
                return (
                  <div key={libItem.id}>
                    <Image src={libItem.src} width={200} height={200} alt='image' />
                  </div>
                )
              })}
         </div>

         </div>
      </article> */}
    </section>
  );
}

export default ArtLibrary;

