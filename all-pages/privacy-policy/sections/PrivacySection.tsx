import Paragraph from "@/global-components/Paragraph";

interface IPrivacySectionProps {
  title: string;
  content: {
    paragraphs: string;
    list?: string;
    secondParagraphs?: string;
  };
}

const PrivacySection = ({ title, content }: IPrivacySectionProps) => {
  const { paragraphs, list, secondParagraphs } = content;

  return (
    <section className="space-y-5">
      <h3 className="font-bold text-[16px] md:text-[24px] lg:text-[32px]">
        {title}
      </h3>
      {/* Render Paragraphs */}
      <Paragraph content={paragraphs} />
      {/* Render List (if exists) */}
      {list && (
        <ul className="list-outside pl-5">
          {list.split("\n").map((item, index) => (
            <li
              key={index}
              className="list-disc text-[12px] md:text-[16px] lg:text-[24px]"
            >
              <span>{String.fromCharCode(97 + index)}) </span>
              {item}
            </li>
          ))}
        </ul>
      )}
      {/* Render Second Paragraphs (if exists) */}
      {secondParagraphs && <Paragraph content={secondParagraphs} />}
    </section>
  );
};

export default PrivacySection;
