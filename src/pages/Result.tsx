import Loading from 'components/common/Loading';
import SpeechCautionSection from 'components/common/speechCautionSection/SpeechCautionSection';
import ResultSection from 'components/result/resultSection/ResultSection';
import usePostMessage from 'hooks/apis/usePostMessage';
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
          <ResultSection onRetry={() => handlePost(answer)} />
          <SpeechCautionSection />
        </>
      )}
    </>
  );
};

export default Result;
