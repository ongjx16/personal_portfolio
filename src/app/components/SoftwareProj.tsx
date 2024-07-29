import Link from "next/link"
import Image from "next/image"
import githubpic from "../../../public/icons/github.svg"

interface SoftwareProps {
    title: string;
    img: string;
    technologies: Array<string>;
    header: string;
    subheader: string;
    year: string;
    github: string;
    large: boolean;
}

const indivSkill = (skill: string) => (
    <div className="h-max w-max py-0.5 items-center px-1.5 bg-blue-300 rounded-lg text-xs">
      {skill}
    </div>
  )

  const skillsArray = (technologies: Array<string>) => (
    <div className = "flex flex-row flex-wrap justify-end gap-x-2 gap-y-1">
        {technologies.map((skill, index) => (
      <div key={index}>
        {indivSkill(skill)}
      </div>
    ))}
    </div>
  )


export default function SoftwareProj({ title, img, technologies, header, subheader, year, github, large}: SoftwareProps) {
    return (
        <div className={`${large === true ? 'w-96' : 'w-64'} h-max bg-white text-center rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,1,0.1)] flex flex-col overflow-hidden`}>
            {/* image div */}
            <div className="flex flex-4 relative">
                <div className="absolute bg-red-300 z-10 h-7 py-1 px-1.5 rounded-lg shadow shadow-[2px_3px_0px_0px_rgba(117,80,76,1)] right-2 top-2">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <Image src={githubpic} alt="email" className="h-full" />
                    </a>
                </div>
                <div className="absolute text-white text-2xl font-medium z-10 rounded-lg right-2 bottom-0">
                    <p>{title}</p>
                </div>
                {<Image src={img} alt="projectImage"
                    className="z-0" />}
            </div >
            <div className="flex flex-col flex-2 px-2.5 py-2">
                {/* header */}
                <div className = "text-base font-medium text-right">
                    {header}
                </div>
                {/* subheader */}
                <div className = "text-sm text-right">
                    {subheader}
                </div >
                {/* technologies */}
                <div className = " mt-1">
                {skillsArray(technologies)}
                </div>
                
            </div>
            {/* title, description, technologies */}
        </div>
    );

}