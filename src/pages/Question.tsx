import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import { useFunnel } from 'hooks/useFunnel';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageApi } from 'src/apis/MessageAPI';
import { AnswerData } from 'types/index';

export const STEPS = [
  '사용자이름',
  '대상자이름',
  '대상유형',
  '관계',
  '축사시간',
  '말투',
  '컨셉',
  '이야기',
  '마지막할말',
];

const Question = () => {
  const [loading, setLoading] = useState(false);
  const { Funnel, Step, currentStep, setStep } = useFunnel(STEPS[0]);
  const navigate = useNavigate();

  const handlePost = async (answer: AnswerData) => {
    setLoading(true);
    const id = await MessageApi.POST(answer);
    setLoading(false);
    navigate(`/result/${id}`, { state: answer });
  };

  const stepNum = STEPS.indexOf(currentStep) + 1;

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="h-full px-6 pb-9">
          <Header onPrev={() => setStep(STEPS[stepNum - 1])} />
          <ProgressBar currentStep={stepNum} />
          <QuestionFunnel steps={STEPS} Funnel={Funnel} Step={Step} setStep={setStep} onPost={handlePost} />
        </div>
      )}
    </>
  );
};

export default Question;
