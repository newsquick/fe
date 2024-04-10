import Loading from 'components/common/Loading';
import ResultSection from 'components/result/resultSection/ResultSection';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';
import usePostMessage from 'hooks/usePostMessage';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state: answer } = useLocation();
  const { isLoading, handlePost } = usePostMessage();

  return (
    <>
      {isLoading ? (
        <Loading isRenew={true} />
      ) : (
        <>
          <ResultSection answer={answer} onRetry={() => handlePost(answer)} />
          <SpeechCautionSection />
        </>
      )}
    </>
  );
};

export default Result;
