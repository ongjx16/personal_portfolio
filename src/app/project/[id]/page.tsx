// app/profiles/[id]/page.js
import { useRouter } from 'next/router';
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import HeadHome from '@/app/caseStudies/HeadHome';

// Mock function to simulate fetching profile data
const fetchProfileData = async (id) => {
    const profiles = {
        1: { name: 'HeadHome', bio: 'HeadHome' },
        2: { name: 'bio.me', bio: 'A graphic designer' },
        // Add more profiles as needed
    };
    return profiles[id];
};

const ProjTemplate = async ({ params }) => {
    const { id } = params;
    const profile = await fetchProfileData(id);

    if (!profile) {
        return <p>Case study not found</p>;
    }

    // const BioComponent = componentMapping[profile.bio];
    return (
        <div className="bg-white w-full text-black flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <div className="w-full flex justify-center flex-col items-center mt-10 md:mt-20 px-8 md:px-30">
                    {/* to do: add view other works navigation */}
                    <p className="pt-5 text-2xl md:text-5xl text-center font-semibold">
                        {profile.name}
                    </p>
                    <div className="py-8">
                        insert body
                    </div>
                </div>
            </main>
            <Footer />
        </div>

    );
};

export default ProjTemplate;
