'use client';

import Header from "../components/Header"
import Footer from "../components/Footer"
import DesignProj from "../components/DesignProj"
import { designContent, softwareContent } from "../utils/Content"
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  console.log(height);


  useEffect(() => {
    // This will only run on the client side
    const handleResize = () => {
      setIsMediumScreen(window.innerWidth >= 768);
    };

    if (typeof window !== 'undefined') {
      setIsMediumScreen(window.innerWidth >= 768);
      window.addEventListener('resize', handleResize);

      if (ref.current) {
        setHeight(ref.current.clientHeight / 2);
      }

      // Cleanup
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  return (
    <div className='bg-white w-full min-h-screen text-black flex flex-col'>
      <Header />
      <div className="w-full flex justify-center flex-col flex-grow items-center mt-10 md:mt-20 px-8 md:px-30">
        <div className="h-1 w-2/6 border-b border-gray-400"></div>
        <p className=" pt-5 text-2xl md:text-5xl text-center font-semibold">
          my
          <span className="text-red-300"> design </span>
          projects
        </p>

        <p>TODO: add proper links for hikepal, silverfun, benchsafe, datamarketplace!!!!!!!</p>

        {/* projects [small screens] */}
        <div className={`w-max relative flex flex-grow ${isMediumScreen && designContent.length % 2 === 0 ? `pb-32` : `pb-0`}`}>
          <div className={`py-8 grid md:grid-cols-2 gap-y-8 gap-x-20 flex flex-grow`}>
            {isMediumScreen && (
              <div className="absolute inset-y-10 left-1/2 border-l border-gray-400"></div>
            )}
            {designContent.map((project, index) => {
              return (
                <div key={index} ref={index === 0 ? ref : null} className={`flex items-center ${index % 2 === 0 ? '' : 'md:transform'}`}
                  style={{
                    transform: index % 2 !== 0 && isMediumScreen ? `translateY(${height / 16}rem)` : ''
                  }}
                >
                  <DesignProj
                    title={project.title}
                    img={project.img}
                    header={project.header}
                    subheader={project.subheader}
                    year={project.year}
                    content={project.content}
                    link={project.link}
                    large={isMediumScreen ? true : false}
                  />
                </div>
              )
            })}
          </div>
        </div>





      </div>
      <Footer />
    </div>
  )
}