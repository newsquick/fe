type Props = {
  title: string;
};

const CautionTitle = ({ title }: Props) => {
  return (
    <div className="mb-[14px] whitespace-pre-line text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray1000">
      {title}
    </div>
  );
};

export default CautionTitle;
