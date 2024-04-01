import Header from 'components/common/Header';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultContentBox from 'components/result/resultSection/ResultContentBox';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { MessageApi } from 'src/apis/MessageAPI';

const Result = () => {
  const { id } = useParams();
  const [result, setResult] = useState('');
  const { state: answer } = useLocation();
  const name = answer.userName;

  useEffect(() => {
    const getResult = async () => {
      const resultData = await MessageApi.GET(String(id));
      setResult(resultData);
    };

    getResult();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center bg-gradient bg-cover px-6">
        <Header />
        <ResultTitle name={name} />
        <ResultContentBox>{result}</ResultContentBox>
        <CopyToClipboardButton copyText={result} />
        {/* <ResultRetryButton onClick={handleRefetch} /> */}
      </div>

      <SpeechCautionSection />
    </>
  );
};

export default Result;
