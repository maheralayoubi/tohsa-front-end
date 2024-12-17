import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";

interface IMissionSectionProps {
  mission: string;
  visionImage: string;
  vision: string;
}

function MissionSection({
  mission,
  visionImage,
  vision,
}: IMissionSectionProps) {
  return (
    <div className="space-y-5 lg:space-y-10" id="mission-&-vision">
      <h2 className="font-bold text-[16px] lg:text-[40px]">Mission & Vision</h2>
      <Paragraph title="Mission" content={mission} />
      <div className="vision flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
        <Image
          src={visionImage}
          alt="Vision Image"
          width={400}
          height={400}
          className="rounded-lg w-full lg:w-[50%] object-cover"
        />
        <div>
          <Paragraph title="Vision" content={vision} />
        </div>
      </div>
    </div>
  );
}

export default MissionSection;
