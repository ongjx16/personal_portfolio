'use client';

import Header from "../components/Header"
import Footer from "../components/Footer"
import { ContentType } from "../utils/ContentType";
import React, { useState, useEffect, useRef } from 'react';

export default function Biome() {
    const content = [
        [ContentType.title, "biome"],
        [ContentType.body, "biome"],
        [ContentType.body, "My Role: Product Designer (Software + Hardware) + Frontend Developer"],
        [ContentType.header, "the problem."],
        [ContentType.quote, "“6 in 10 people with dementia will experience wandering episodes.”- Alzheimer's Association"],
        [ContentType.body, "Evidently, this was a prevalent issue which can leave patients in life-threatening solution. Yet, there was no existing solution that could help patients get home, allow caregivers to locate them, and involve the community to safely return them home."],
        [ContentType.body, "Thus, HeadHome was created."],

    ]

    return (
        <div className='bg-white w-full min-h-screen text-black flex flex-col'>
            <div className=" w-full flex justify-center flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-30">
                {content.map((project, index) => (
                    <div key={index}
                        className={`
                        ${project[0] === ContentType.title} ? pt-5 text-2xl md:text-5xl text-center font-semibold text-red-300:
                        ${project[0] == ContentType.header} ? pt-5 text-xl md:text-3xl text-left font-medium:
                        ${project[0] === ContentType.subheader} ? :
                        ${project[0] === ContentType.quote} ? :
                        ${project[0] === ContentType.body}?  pt-5 text-sm md:text-base text-left :
                        `}>
                        {project[1]}
                    </div>
                ))}
            </div>
        </div>
    )
}