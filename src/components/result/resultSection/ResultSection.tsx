import EditIcon from 'assets/svg/edit.svg?react';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultHeader from 'components/result/resultSection/ResultHeader';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SaveImageButton from 'components/result/resultSection/SaveImageButton';
import { SERVER_URL } from 'constants/env';
import useGetMessage from 'hooks/useGetMessage';
import useSaveImage from 'hooks/useSaveImage';
import { Link, useParams } from 'react-router-dom';

type Props = {
  onRetry: () => void;
};

const ResultSection = ({ onRetry }: Props) => {
  const { id } = useParams();
  const { result, userName } = useGetMessage(String(id));
  const { targetRef, handleSaveImage } = useSaveImage();

  return (
    <div className="flex flex-col items-center bg-gradient bg-cover px-6" ref={targetRef}>
      <ResultHeader shareUrl={`${SERVER_URL}/share/${id}`} />
      <ResultTitle name={userName} />
      <div className="mb-5 w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
        <span className="whitespace-pre-line text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
          {result}
        </span>
        <div className="float-right mt-[17px]">
          <Link
            to="/edit"
            state={{
              id: id,
              result: result,
              name: userName,
            }}
          >
            <button>
              <EditIcon />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <SaveImageButton onSave={handleSaveImage} />
        <CopyToClipboardButton copyText={result} />
      </div>
      <ResultRetryButton retryResult={onRetry} />
    </div>
  );
};

export default ResultSection;
