import Header from "../components/Header"
import Footer from "../components/Footer"
export default function Page() {
    return (
        <div className='bg-white w-full min-h-screen text-black flex flex-col'>
            <Header />
            <div className='w-full h-10'>design page!</div>
            <Footer/>
        </div>
    )
}