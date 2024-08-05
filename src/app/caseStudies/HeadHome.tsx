'use client';

import Header from "../components/Header"
import Footer from "../components/Footer"
import { ContentType } from "../utils/ContentType";
import React, { useState, useEffect, useRef } from 'react';
import {style} from "../utils/CaseStudyStyle"

export default function HeadHome() {

    const content = [
        [ContentType.title, "headhome"],
        [ContentType.body, "Headhome is an all-encompassing solution that aims to reduce the dangers posed by dementia wandering. The mobile application and watch combination guides wandering patients home, and provides caregivers with an effective means of locating them and safely returning them home. With HeadHome, my team and I managed to attain Global Top 3 in Google Solutions Challenge 2023."],
        [ContentType.body, "My Role: Product Designer (Software + Hardware) + Frontend Developer"],
        [ContentType.header, "the problem."],
        [ContentType.quote, "“6 in 10 people with dementia will experience wandering episodes.”- Alzheimer's Association"],
        [ContentType.body, "Evidently, this was a prevalent issue which can leave patients in life-threatening solution. Yet, there was no existing solution that could help patients get home, allow caregivers to locate them, and involve the community to safely return them home."],
        [ContentType.body, "Thus, HeadHome was created."],

    ]

    return (
        <div className='bg-white w-full min-h-screen text-black flex flex-col'>
            <div className=" w-full flex flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-30">
                {/* insert pic */}

                <div className={style.body}> Headhome is an all-encompassing solution that aims to reduce the dangers posed by dementia wandering. The mobile application and watch combination guides wandering patients home, and provides caregivers with an effective means of locating them and safely returning them home. With HeadHome, my team and I managed to attain Global Top 3 in Google Solutions Challenge 2023.
                    <br />
                    <br />
                    My Role: Product Designer (Software + Hardware) + Frontend Developer
                </div>

                <div className={style.header}>the problem.</div>
                <div className={style.quote}> &lsquo;6 in 10 people with dementia will experience wandering episodes.&rsquo;<br />- Alzheimer&apos;s Association</div>
                <div className={style.body}> Evidently, this was a prevalent issue which can leave patients in life-threatening solution. Yet, there was no existing solution that could help patients get home, allow caregivers to locate them, and involve the community to safely return them home.
                    <br />
                    <br />
                    Thus, HeadHome was created.
                </div>

                <div className={style.header}>user flow.</div>
                <div className={style.body}>We first identified the 3 main user groups of the application: patients, caregivers, and community volunteers. The diagram below shows how the entire solution works (software + hardware).</div>
                {/* insert pic */}


                <div className={style.header}> main stakeholders.</div>

                <div className={style.subheader}> patients</div>
                <div className={style.body}>The main priority for the patients’ pages was to ensure that the elderly, who are mostly less technologically literate, would be able to call for help easily. Thus, the landing page features a big red button, making it obvious which button to press when help is needed. Other buttons were also toned down comparatively, with the only other obvious button being a call button, which would link them to their primary caregiver.  </div>
                {/* insert pic */}

                <div className={style.subheader}>caregivers</div>
                <div className={style.body}>As for the caregivers, the main priority was for them to easily activate help for their patients, and easily identify which of their patients required help. Red accents on patients profiles and call to action buttons make it intuitive for the caregiver to navigate the application.  </div>
                {/* insert pic */}
                <div className={style.subheader}>volunteers</div>
                <div className={style.body}>To make it easy for volunteers to extend their helping hand, patients who needed help are sorted in order of their distance away, and how long ago they required help. This makes it easy for volunteers to identify who they can help best, and who needed help the most.</div>
                {/* insert pic */}

                <div className={style.header}>app prototype.</div>
                {/* insert pic */}

                <div className={style.header}>testing (app)</div>
                <div className={style.body}>After we tested the application alongside the functionalities of the watch, we realised there were a few hiccups in the user flow, and areas for improvement.
                    <br /><div className="pl-5">1. Confusing for patients (especially elderly) to navigate home by relying on roadmap UI.</div>
                    <div className="pl-12">a. Solution: incorporate street view option to allow users to easily correlate the navigation instructions and their surroundings</div>
                    <div className="pl-5">2. Interface for verifying patient’s identity on volunteer’s page unclear</div>
                    <div className="pl-12">a. Add and highlight verification option in volunteer’s interface </div></div>

                <div className={style.header}>hardware design</div>
                <div className={style.body}>To pair with the app, I also designed the case for the watch. This watch is designed to be as simplistic as possible, so that patients unfamiliar with technology can easily use the watch. It has 2 main buttons, one to turn it on/off, and one to activate help. Upon activation for help, a single arrow will show on the app, which will change and guide them home based on their orientation.
                    <br /><br />
                    This watch was modelled on Fusion360 and 3D printed. </div>
                {/* insert pic */}
                {/* insert pic */}

                <div className={style.header}>learning points</div>
                <div className={style.body}>One of the greatest learning points I had for this project was learning how to link user experience on the mobile application with that on the physical watch. It was easy to forget how a patient would both interact with the watch and the application at the same time, until testing begun. Thus, in such IOT projects, I have learnt that it is always crucial to consider cases in which users would be using both the hardware and software simultaneously, and asynchronously, so as to account for all possible use cases.  </div>




            </div>
        </div>
    )
}