type Props = {
  retryResult: () => void;
};

const ResultRetryButton = ({ retryResult }: Props) => {
  return (
    <button
      className="mb-[45px] mt-4 text-sm font-medium tracking-[-0.4px] text-gray600 underline"
      data-ga="result_retry"
      onClick={retryResult}
      data-html2canvas-ignore="true"
    >
      축사 다시 받아보기
    </button>
  );
};

export default ResultRetryButton;
