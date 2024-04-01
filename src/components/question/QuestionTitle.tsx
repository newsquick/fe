type Props = {
  text: string;
};

const QuestionTitle = ({ text }: Props) => {
  return (
    <div className="mb-[33px] mt-[52px] w-full">
      <span className="whitespace-pre-line text-[24px] font-bold leading-[34px] tracking-[-0.5px] text-gray1000">
        {text}
      </span>
    </div>
  );
};

export default QuestionTitle;
