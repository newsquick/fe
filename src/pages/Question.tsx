import QuestionFunnel from 'components/question/QuestionFunnel';

const Question = () => {
  return (
    <div className="h-full px-6 pb-9">
      {/* <Header onPrev={prevStep} />
       <ProgressBar currentStep={currentStep} /> */}
      <QuestionFunnel />
    </div>
  );
};

export default Question;
