import Loading from 'components/common/Loading';
import SpeechCautionSection from 'components/common/speechCautionSection/SpeechCautionSection';
import Footer from 'components/result/Footer';
import ResultSection from 'components/result/ResultSection';
import usePostMessage from 'hooks/apis/usePostMessage';
import { useLocation } from 'react-router-dom';

const Result = () => {
  const { state: answer } = useLocation();
  const retryAnswer = { ...answer, isRenew: true };
  const { isLoading, handlePost } = usePostMessage();

  return (
    <>
      {isLoading ? (
        <Loading isRenew={true} />
      ) : (
        <>
          <ResultSection onRetry={() => handlePost(retryAnswer)} />
          <SpeechCautionSection />
          <Footer />
        </>
      )}
    </>
  );
};

export default Result;
