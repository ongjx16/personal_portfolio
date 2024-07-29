import Link from "next/link"
import emailpic from "../../../public/icons/email.svg"
import githubpic from "../../../public/icons/github.svg"
import linkedinpic from "../../../public/icons/linkedin.svg"
import Image from "next/image"

export default function Footer() {

    return (
    <div className = "w-full flex justify-center flex-col items-center pt-10">
        <div className="h-1 w-1/6 border-b border-gray-400"></div>
        <div className='flex flex-row w-full h-max py-6 items-start my-5'>
            <div className='flex-grow flex-shrink flex-1'></div>
            <div className='flex-grow flex-shrink flex-1 flex flex-row items-center justify-around '>
                <a href={"https://github.com/ongjx16"} target="_blank" rel="noopener noreferrer">
                    <Image src={githubpic} alt="email" />
                </a>
                <a href={"https://www.linkedin.com/in/jingxuanong/"} target="_blank" rel="noopener noreferrer">
                    <Image src={linkedinpic} alt="email" className="ml-2" />
                </a>

                <a href={"mailto:ongjx16@gmail.com"} target="_blank" rel="noopener noreferrer">
                    <Image src={emailpic} alt="email" className="ml-2" />
                </a>
            </div>
            <div className='flex-grow flex-shrink flex-1'></div>

        </div>
    </div>
       

    )
}