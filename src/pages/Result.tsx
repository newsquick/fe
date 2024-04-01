import EditIcon from 'assets/images/edit.svg?react';
import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import CopyToClipboardButton from 'components/result/resultSection/ClipboardButton';
import ResultRetryButton from 'components/result/resultSection/ResultRetryButton';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import SpeechCautionSection from 'components/result/speechCautionSection/SpeechCautionSection';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import { MessageApi } from 'src/apis/MessageAPI';
import { AnswerData } from 'types/index';

const Result = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
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

  const handleRetry = async (answer: AnswerData) => {
    setLoading(true);
    const id = await MessageApi.POST(answer);
    setLoading(false);
    navigate(`/result/${id}`, { state: answer });
  };

  return (
    <>
      {loading ? (
        <Loading isRenew={true} />
      ) : (
        <>
          <div className="flex flex-col items-center bg-gradient bg-cover px-6">
            <Header />
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
                  }}
                >
                  <EditIcon />
                </Link>
              </div>
            </div>
            <CopyToClipboardButton copyText={result} />
            <ResultRetryButton retryResult={() => handleRetry(answer)} />
          </div>

          <SpeechCautionSection />
        </>
      )}
    </>
  );
};

export default Result;
