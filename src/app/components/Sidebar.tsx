import Link from "next/link"

export default function Sidebar() {
    return (
        <div className='bg-white w-max h-max mr-0 mt-12 absolute p-2 flex justify-end rounded shadow-[0_5px_5px_1px_rgba(0,0,0,0.1)]'>
            <div className='text-black flex flex-col text-sm p-2'>
                <div className="pb-2 border-b border-black">
                    <Link href="/software">Software Projects</Link>
                </div>
                <div className="pt-2 ">
                    <Link href="/design">Design Projects</Link>
                </div>


            </div>
        </div>
    )
}