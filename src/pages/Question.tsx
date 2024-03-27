import Header from 'components/common/Header';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel, { STEPS } from 'components/question/QuestionFunnel';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { StepState } from 'src/recoil/atom';
import { currentStepState } from 'src/recoil/selector';

const Question = () => {
  const { stepIdx, stepNum } = useRecoilValue(currentStepState);
  const setStep = useSetRecoilState(StepState);

  return (
    <div className="h-full px-6 pb-9">
      <Header onPrev={() => setStep(STEPS[stepIdx - 1])} />
      <ProgressBar currentStep={stepNum} />
      <QuestionFunnel />
    </div>
  );
};

export default Question;
