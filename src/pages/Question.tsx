import Header from 'components/common/Header';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import { useFunnel } from 'hooks/useFunnel';

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
  const { Funnel, Step, currentStep, setStep } = useFunnel(STEPS[0]);

  const stepNum = STEPS.indexOf(currentStep) + 1;

  return (
    <div className="h-full px-6 pb-9">
      <Header onPrev={() => setStep(STEPS[stepNum - 1])} />
      <ProgressBar currentStep={stepNum} />
      <QuestionFunnel steps={STEPS} Funnel={Funnel} Step={Step} setStep={setStep} />
    </div>
  );
};

export default Question;
