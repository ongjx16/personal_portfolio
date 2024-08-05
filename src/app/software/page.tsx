'use client';

import Header from "../components/Header"
import Footer from "../components/Footer"
import SoftwareProj from "../components/SoftwareProj"
import { softwareContent } from "../utils/Content"
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
    <div className='bg-white w-full min-h-screen text-black flex flex-col flex-grow'>
      <Header />
      <div className=" w-full flex justify-center flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-30">
        <div className="h-1 w-1/6 border-b border-gray-400"></div>
        {/* header */}
        <p className=" pt-5 text-2xl md:text-5xl text-center font-semibold">
          my
          <span className="text-blue-500"> software </span>
          projects
        </p>

        <p>CHANGE PIC for smarturl and movieapp</p>

        {/* projects [small screens] */}
        <div className={`w-max relative flex flex-grow ${isMediumScreen && softwareContent.length % 2 === 0 ? `pb-44` : `pb-0`}`}>
          <div className="py-8 grid md:grid-cols-2 gap-y-8 gap-x-20 flex flex-grow">
            {isMediumScreen && (
              <div className="absolute inset-y-14 left-1/2 border-l border-gray-400"></div>
            )}
            {softwareContent.map((project, index) => (
              <div key={index} ref={index === 0 ? ref : null}
                className={`flex items-center ${index % 2 === 0 ? '' : 'md:transform'}`}
                // ensure that if is medium screen or larger, there is staggered y position for alt sides
                style={index % 2 !== 0 && isMediumScreen ? { transform: `translateY(${height / 14}rem)` } : {}}
              >
                <SoftwareProj
                  title={project.title}
                  img={project.img}
                  technologies={project.technologies}
                  header={project.header}
                  subheader={project.subheader}
                  year={project.year}
                  github={project.github}
                  link={project.link}
                  large={isMediumScreen ? true : false}
                />
              </div>
            ))}
          </div>
        </div>





      </div>
      <Footer />
    </div>
  )
}