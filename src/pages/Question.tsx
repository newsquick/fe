import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import Layout from 'components/question/Layout';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import usePostMessage from 'hooks/apis/usePostMessage';
import { useFunnel } from 'hooks/useFunnel';
import { FormProvider, useForm } from 'react-hook-form';

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
  const methods = useForm<AnswerData>();
  const { isLoading, handlePost } = usePostMessage();
  const { Funnel, Step, currentStep, setStep } = useFunnel(STEPS[0]);
  const stepNum = STEPS.indexOf(currentStep) + 1;

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Header onPrev={() => setStep(STEPS[stepNum - 2])} />
          <ProgressBar currentStep={stepNum} />
          <FormProvider {...methods}>
            <form className="h-full" onSubmit={methods.handleSubmit(handlePost)}>
              <QuestionFunnel steps={STEPS} Funnel={Funnel} Step={Step} setStep={setStep} />
            </form>
          </FormProvider>
        </Layout>
      )}
    </>
  );
};

export default Question;
