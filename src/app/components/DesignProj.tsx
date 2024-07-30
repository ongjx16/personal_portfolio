import Link from "next/link"
import Image from "next/image"

interface DesignProps {
    title: string;
    img: string;
    header: string;
    subheader: string;
    year: string;
    content: boolean;
    large: boolean;
    link: string;
}


export default function DesignProj({ title, img, header, subheader, year, content, large, link}: DesignProps) {
    return (
        <a className="w-max h-max relative" href= {link}>
            {/* todo: change opacity */}
            <div className={`${large === true ? 'w-96' : 'w-64'} ${content === true ? '' : 'opacity-70'}h-max bg-white text-center rounded rounded-xl shadow-[2px_5px_5px_1px_rgba(0,0,1,0.1)] flex flex-col`}>
                <div className="flex flex-4 relative">
                    <div className="absolute text-white text-2xl font-medium z-10 rounded-lg right-2 bottom-0">
                        <p>{title}</p>
                    </div>
                    {<Image src={img} alt="projectImage"
                        className="z-0" />}
                </div >
                <div className="flex flex-col flex-2 px-2.5 py-2">
                    {/* header */}
                    <div className="text-base font-medium text-right">
                        {header}
                    </div>
                    {/* subheader */}
                    <div className="text-sm text-right italic">
                        {subheader}
                    </div >

                </div>

                {/* title, description, technologies */}
            </div>
        </a>

    );

}