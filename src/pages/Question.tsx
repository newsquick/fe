import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import Layout from 'components/question/Layout';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import { useFunnel } from 'hooks/useFunnel';
import usePostMessage from 'hooks/usePostMessage';
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
  const methods = useForm();
  const { isLoading, handlePost } = usePostMessage();
  const { Funnel, Step, currentStep, setStep } = useFunnel(STEPS[0]);
  const stepNum = STEPS.indexOf(currentStep) + 1;
  console.log(currentStep);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Header onPrev={() => setStep(STEPS[stepNum - 1])} />
          <ProgressBar currentStep={stepNum} />
          <FormProvider {...methods}>
            <QuestionFunnel steps={STEPS} Funnel={Funnel} Step={Step} setStep={setStep} onPost={handlePost} />
          </FormProvider>
        </Layout>
      )}
    </>
  );
};

export default Question;
