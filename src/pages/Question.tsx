import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import { useRecoilValue } from 'recoil';
import { currentStepState } from 'src/recoil/selector';

const Question = () => {
  const { stepNum } = useRecoilValue(currentStepState);
  return (
    <div className="h-full px-6 pb-9">

      <ProgressBar currentStep={stepNum} />
      <QuestionFunnel />
    </div>
  );
};

export default Question;
