import ResultTitle from 'components/result/ResultTitle';
import useGetMessage from 'hooks/apis/useGetMessage';
import { useParams } from 'react-router-dom';

const ShareSection = () => {
  const { id } = useParams();
  const { result, userName } = useGetMessage(String(id));

  return (
    <div className="flex flex-col items-center bg-gradient bg-cover px-6 pt-16">
      <ResultTitle name={userName} />
      <div className="mb-[45px] w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
        <span className="whitespace-pre-line text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
          {result}
        </span>
      </div>
    </div>
  );
};

export default ShareSection;
