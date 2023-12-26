import Link from "next/link"
import emailpic from "../../../public/email.svg"
import githubpic from "../../../public/github.svg"
import linkedinpic from "../../../public/linkedin.svg"
import Image from "next/image"

export default function Footer() {

    return (
        <div className='flex flex-row w-full h-max py-6 items-start'>
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

    )
}