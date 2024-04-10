import EditIcon from 'assets/images/edit.svg?react';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultHeader from 'components/result/resultSection/ResultHeader';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SaveImageButton from 'components/result/resultSection/SaveImageButton';
import useGetMessage from 'hooks/useGetMessage';
import { Link, useParams } from 'react-router-dom';

type Props = {
  answer: AnswerData;
  onRetry: () => void;
};

const ResultSection = ({ answer, onRetry }: Props) => {
  const name = answer.userName;
  const { id } = useParams();
  const { result } = useGetMessage(String(id));

  return (
    <div className="flex flex-col items-center bg-gradient bg-cover px-6">
      <ResultHeader />
      <ResultTitle name={name} />
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
              name: name,
            }}
          >
            <EditIcon />
          </Link>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <SaveImageButton />
        <CopyToClipboardButton copyText={result} />
      </div>
      <ResultRetryButton retryResult={onRetry} />
    </div>
  );
};

export default ResultSection;
