type Props = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
};

const EditSection = ({ value, onChange }: Props) => {
  return (
    <div className="h-[calc(100%-184px)] w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
      <textarea
        className="h-full w-full resize-none bg-white bg-opacity-0 text-[15px] leading-[170%] tracking-[-0.6px] text-gray800 focus:outline-none"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default EditSection;
