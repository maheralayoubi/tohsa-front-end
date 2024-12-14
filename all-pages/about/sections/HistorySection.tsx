import Paragraph from "@/global-components/Paragraph";
import Image from "next/image";

interface IHistorySectionProps {
  historyImages: {
    mainImages: string;
    image2: string;
    lastImage: string;
  };
  funding: string;
  milestones: string;
  current: string;
}

const HistorySection = ({
  historyImages,
  funding,
  milestones,
  current,
}: IHistorySectionProps) => {
  return (
    <div className="space-y-2 lg:space-y-10" id="history">
      <Paragraph title={`History \n Our Journey: The Evolution of HGA-TOHSA`} />
      <div className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-5">
        {/* Main Image */}
        <Image
          src={historyImages.mainImages}
          alt="History Main Image"
          width={200}
          height={200}
          className="rounded-lg w-full lg:min-w-[67%] object-cover"
        />

        {/* Side Images */}
        <div className="flex flex-row lg:flex-col w-full space-x-2 lg:space-x-0 lg:space-y-2">
          {/* Secondary Image */}
          <Image
            src={historyImages.image2}
            alt="History Secondary Image"
            width={280}
            height={195}
            className="rounded-lg object-cover w-[50%] lg:w-[280px] lg:max-h-[50%]"
          />

          {/* "See All" Image with Overlay */}
          <div className="relative rounded-lg overflow-hidden w-[50%] lg:w-[280px] lg:max-h-[50%]">
            <div className="absolute inset-0 flex flex-col justify-center items-center z-10 space-y-2">
              <Image
                src="/images/gallery.svg"
                alt="Gallery Icon"
                width={40}
                height={40}
              />
              <p className="text-white text-[16px]">See all 12 images</p>
            </div>
            <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
            <Image
              src={historyImages.lastImage}
              alt="History Last Image"
              width={280}
              height={195}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <Paragraph title="Funding And Early Days" content={funding} />
      <Paragraph title="Milestones" content={milestones} />
      <Paragraph title="Current Status" content={current} />
    </div>
  );
};

export default HistorySection;
