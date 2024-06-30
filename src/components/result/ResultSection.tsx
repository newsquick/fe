import EditIcon from 'assets/svg/edit.svg?react';
import CopyToClipboardButton from 'components/result/CopyToClipboardButton';
import ResultHeader from 'components/result/ResultHeader';
import ResultRetryButton from 'components/result/ResultRetryButton';
import ResultTitle from 'components/result/ResultTitle';
import SaveImageButton from 'components/result/SaveImageButton';
import { SERVER_URL } from 'constants/env';
import useGetMessage from 'hooks/apis/useGetMessage';
import useSaveImage from 'hooks/useSaveImage';
import { Link, useParams } from 'react-router-dom';

type Props = {
  onRetry: () => void;
};

const ResultSection = ({ onRetry }: Props) => {
  const { shareKey } = useParams();
  const { id, result, userName } = useGetMessage(String(shareKey));
  const { targetRef, handleSaveImage, isSupported } = useSaveImage();

  return (
    <div className="flex flex-col items-center px-6 bg-cover bg-gradient" ref={targetRef}>
      <ResultHeader shareUrl={`${SERVER_URL}/share/${shareKey}`} />
      <ResultTitle name={userName} />
      <div className="mb-5 w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
        <span className="whitespace-pre-line text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
          {result}
        </span>
        <div className="float-right mt-[17px]" data-html2canvas-ignore="true">
          <Link
            to="/edit"
            state={{
              id: id,
              result: result,
              name: userName,
            }}
          >
            <button data-ga="result_modify">
              <EditIcon className='pointer-events-none' />
            </button>
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-2" data-html2canvas-ignore="true">
        <SaveImageButton onSave={handleSaveImage} support={isSupported} />
        <CopyToClipboardButton copyText={result} />
      </div>
      <ResultRetryButton retryResult={onRetry} />
    </div>
  );
};

export default ResultSection;
