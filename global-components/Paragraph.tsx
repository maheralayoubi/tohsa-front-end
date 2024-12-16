interface IParagraphProps {
  title?: string;
  content?: string;
  children?: React.ReactNode;
}

const Paragraph = ({ title, content, children }: IParagraphProps) => {
  return (
    <div className="space-y-2 lg:space-y-5 max-w-full">
      {title && (
        <h3 className="font-bold text-[16px] lg:text-[32px]">{title}</h3>
      )}
      {content &&
        content.split("\n").map((item, index) => (
          <p key={index} className="text-[12px] md:text-[16px] lg:text-[24px]">
            {item}
          </p>
        ))}
      {children}
    </div>
  );
};

export default Paragraph;
