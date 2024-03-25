import Header from 'components/common/Header';
import QuestionFunnel from 'components/question/\bfunnel/QuestionFunnel';
import ProgressBar from 'components/question/ProgressBar';

const Question = () => {
  return (
    <div className="h-full px-6 pb-9">
      {/* <Header onPrev={prevStep} />
       <ProgressBar currentStep={currentStep} />*/}
      <QuestionFunnel />
    </div>
  );
};

export default Question;
