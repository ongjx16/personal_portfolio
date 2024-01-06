'use client';

import Header from "../components/Header"
import Footer from "../components/Footer"
import SoftwareProj from "../components/SoftwareProj"
import { softwareContent } from "../utils/Content"
import React, { useState, useEffect, useRef } from 'react';

export default function Page() {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [isMediumScreen, setIsMediumScreen] = useState(window.innerWidth >= 768);
  console.log(height);

  // Function to update screen size state
  const handleResize = () => {
    setIsMediumScreen(window.innerWidth >= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    if (ref.current) {
      setHeight(ref.current.clientHeight / 2);
    }

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <div className='bg-white w-full min-h-screen text-black flex flex-col'>
      <Header />
      <div className=" w-full flex justify-center flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-30">
        <div className="h-1 w-2/6 border-b border-gray-400"></div>
        {/* header */}
        <p className=" pt-5 text-2xl md:text-5xl text-center font-semibold">
          my
          <span className="text-blue-500"> software </span>
          projects
        </p>

        {/* projects [small screens] */}
        <div className="w-max relative">
          <div className="hidden md:block absolute w-px bg-black items-center left-1/2 top-10 bottom-10">
          </div>
          <div className="py-8 grid md:grid-cols-2 gap-y-8 gap-x-10">
            {softwareContent.map((project, index) => (
              <div key={index} ref={index === 0 ? ref : null} className={`flex items-center ${index % 2 === 0 ? '' : 'md:transform'}`}
                style={index % 2 !== 0 && isMediumScreen ? { transform: `translateY(${height / 16}rem)` } : {}}
              >
                <SoftwareProj
                  title={project.title}
                  img={project.img}
                  technologies={project.technologies}
                  header={project.header}
                  subheader={project.subheader}
                  year={project.year}
                  github={project.github}
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