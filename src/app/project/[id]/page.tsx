// app/profiles/[id]/page.js
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import componentMapping from '@/app/components/ComponentMapping';
import { notFound } from 'next/navigation';


// Mock function to simulate fetching profile data
export interface CaseStudy {
  name: string;
  content: string;
}
export const CaseStudyData: { [key: string]: CaseStudy } = {
  'headhome': { name: 'HeadHome', content: 'HeadHome' },
  'biome': { name: 'bio.me', content: 'Biome' },
};

const fetchCaseStudyData = async (id: string): Promise<CaseStudy | undefined> => {
  return CaseStudyData[id];
};

interface caseStudyPageProps {
  params: {
    id: string;
  };
}

const ProjTemplate = async ({ params }: caseStudyPageProps) => {
  const { id } = params;
  const caseStudy = await fetchCaseStudyData(id);

  if (!caseStudy) {
    notFound();
  }

  const BioComponent = componentMapping[caseStudy.content];

  // const BioComponent = componentMapping[caseStudy.bio];
  return (
    <div className="bg-white w-full text-black flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <div className="w-full flex justify-center flex-col items-center mt-10 md:mt-20 px-8 md:px-30">
          {/* to do: add view other works navigation */}
          <p className="pt-5 text-2xl md:text-5xl text-center font-semibold">
            {caseStudy.name}
          </p>
          <div className="py-8">
            <BioComponent/>
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
};

export default ProjTemplate;
