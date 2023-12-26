import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import dp from '../../public/dp.svg'
import Button from './components/Button'
import { ButtonPurpose } from './utils/ButtonPurpose'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className='bg-white w-full min-h-screen text-black flex flex-col'>
      <Header />
      <div className=" w-full flex justify-center flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-40">
        <Image src={dp} alt="profilepic" className="h-48 md:h-64" />
        <text className=" pt-5 text-2xl md:text-5xl text-center font-semibold">hi! i’m jing xuan, an aspiring <text className="text-blue-500">software engineer</text> x <text className="text-red-300">product designer</text>!</text>
        {/* check out my works */}
        <div className=" w-full text-center pt-5 pb-2 italic text-sm">check out my works...</div>
        <div className=" w-full flex flex-row">
          <div className='flex-grow flex-shrink flex-1'></div>
          <div className='flex-grow flex-shrink flex-2 flex flex-row justify-around'>
            <Button text="software projects" purpose={ButtonPurpose.Software} link="/software" />
            <Button text="design projects" purpose={ButtonPurpose.Design} link="/design" />
          </div>
          <div className='flex-grow flex-shrink flex-1'></div>

        </div>
        {/* ...and my experiences */}
        <div className=" w-full text-center pt-5 pb-2 italic text-sm">...and my experiences!</div>
        <div className="">
          <Button text="resume" purpose={ButtonPurpose.Standard} link="https://drive.google.com/file/d/1HV2TS7l71OZbzhNYvfVcjHzhdf8zyltL/view?usp=drive_link" />
        </div>
        <div className=" w-full flex flex-col text-center pt-5 italic text-xs">
          <p className="pb-0.5">Undergraduate (3rd Year)</p>
          <p className="pb-0.5">Bachelor’s in <text className="font-bold">Computer Science</text> & Masters in <text className="font-bold">Technology Management</text></p>
          <p> Nanyang Technological University  |  University of California, Berkeley</p>

        </div>
        {/* what im up to these days  */}
        <div className=" w-full flex flex-col text-left pt-5 pb-2 italic text-sm">
          <p className="pb-1">what i’m up to these days:</p>
          <p >- exploring USA 🚗 (i’m currently on a year-long exchange in Berkeley!)</p>
          <p >- looking for a summer 2024 internship</p>
          <p >- learning VR game development in Unity 👩🏻‍💻</p>
          <p>... and seeing where life takes me! :-)</p>

          <p className="pt-2.5">Feel free to contact me for any opportunities, queries or feedback!</p>

        </div>
      </div>
      <Footer />
    </div>
  )


}
