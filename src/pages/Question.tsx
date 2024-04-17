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
  const { Funnel, Step, prevStep, nextStep, stepNum } = useFunnel(STEPS);
  console.log(stepNum);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Header onPrev={prevStep} />
          <ProgressBar currentStep={stepNum} />
          <FormProvider {...methods}>
            <form className="h-full" onSubmit={methods.handleSubmit(handlePost)}>
              <QuestionFunnel Funnel={Funnel} Step={Step} nextStep={nextStep} />
            </form>
          </FormProvider>
        </Layout>
      )}
    </>
  );
};

export default Question;
