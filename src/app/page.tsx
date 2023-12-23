import Image from 'next/image'
import Link from 'next/link'
import Header from './components/Header'
import dp from '../../public/dp.svg'


export default function Home() {
  return (
    <div className='bg-white w-full min-h-screen text-black flex flex-col'>
      <Header />
      <div className=" w-full flex justify-center flex-col justify-start h-full items-center mt-10 md:mt-20  px-8 md:px-40">
          <Image src={dp} alt="profilepic" className="h-48 md:h-64" />
          <text className=" pt-5 text-2xl md:text-5xl text-center font-semibold">hi! i’m jing xuan, an aspiring <text className="text-blue-500">software engineer</text> x <text className="text-red-300">product designer</text>!</text>
          {/* check out my works */}
          <div className=" pt-5">
            
          </div>
          {/* ...and my experiences */}
          <div className=" pt-5">
            
          </div>
          {/* what im up to these days  */}
          <div className=" pt-5">
            
          </div>
      </div>
    </div>
  )


}
