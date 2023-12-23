'use client';

import Link from "next/link"
import menu from "../../../public/menu.svg"
import Image from "next/image"
import logo from "../../../public/logo.svg"
import Sidebar from "./Sidebar"
import { useState } from "react"

export default function Header() {

  const [sidebar, setSidebar] = useState(false);
  return (
    <div className='flex items-start'>
      <div className='w-full h-12 p-4'>
        <div className='text-white flex flex-row h-full'>
          {/* logo div */}
          <div className=" flex-1 justify-start h-full items-center ">
            <Link href="/">
              <Image src={logo} alt="jx" className="ml-1" />
            </Link>
          </div>
          {/* sidebar div */}
          <div className="block flex-1 justify-end h-full">
            {/* Mobile-Only */}
            <div className="block md:hidden flex justify-end h-full" onClick={(event) => { sidebar ? setSidebar(false) : setSidebar(true); }}>
              <Image src={menu} alt="menu" />

            </div>
            {/* Desktop-Only*/}
            <div className=" md:flex flex-row justify-end h-full text-black hidden md:block items-center">
              <Link href="/software">
                <p className="mr-4">Software Projects</p>
              </Link>
              <Link href="/design">
                <p className="mr-4">Design Projects</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=' flex justify-end'>
        {sidebar && <Sidebar />}
      </div>

    </div>

  )
}