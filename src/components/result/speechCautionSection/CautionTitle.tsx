const CAUTION_TITLE = '축사를 읽을 때 이런 부분을\n조심해주세요';

const CautionTitle = () => {
  return (
    <div className="mb-[14px] whitespace-pre-line text-[20px] font-bold leading-[28px] tracking-[-0.5px] text-gray1000">
      {CAUTION_TITLE}
    </div>
  );
};

export default CautionTitle;
