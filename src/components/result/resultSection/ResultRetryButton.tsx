type Props = {
  retryResult: () => void;
};

const ResultRetryButton = ({ retryResult }: Props) => {
  return (
    <span
      className="mb-[45px] mt-4 cursor-pointer text-sm font-medium tracking-[-0.4px] text-gray600 underline "
      data-ga="result_retry"
      onClick={retryResult}
    >
      축사 다시 받아보기
    </span>
  );
};

export default ResultRetryButton;
