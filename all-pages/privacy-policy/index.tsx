import Footer from "@/global-components/Footer";
import data from "@/DB/privacy.json";
import PrivacySection from "./sections/PrivacySection";

const Index = () => {
  return (
    <main className="min-h-screen font-poppins">
      <div className="flex flex-col px-[20px] py-10 lg:px-[25%] lg:py-[40px] space-y-10">
        <h1 className="text-[16px] md:text-[32px] lg:text-[40px] font-bold text-[#57369E]">
          Privacy Policy
        </h1>
        {/* Sections */}
        <PrivacySection
          title="Part 1. Privacy Notice"
          content={{ paragraphs: data.privacyNotes }}
        />
        <PrivacySection
          title="Who we are"
          content={{ paragraphs: data.whoAreYou }}
        />
        <PrivacySection
          title="What type of personal data we collect and process"
          content={{
            paragraphs: data.whatTypeOfPersonal.firstParagraph,
            list: data.whatTypeOfPersonal.list,
            secondParagraphs: data.whatTypeOfPersonal.lastParagraph,
          }}
        />
      </div>
      <Footer />
    </main>
  );
};

export default Index;
