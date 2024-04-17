import Header from 'components/common/Header';
import Loading from 'components/common/Loading';
import Layout from 'components/question/Layout';
import ProgressBar from 'components/question/ProgressBar';
import QuestionFunnel from 'components/question/QuestionFunnel';
import { QUESTION_STEPS } from 'constants/index';
import { GenericFormProvider } from 'contexts/GenericFormContex';
import usePostMessage from 'hooks/apis/usePostMessage';
import { useFunnel } from 'hooks/useFunnel';

const Question = () => {
  const { isLoading, handlePost } = usePostMessage();
  const { Funnel, Step, prevStep, nextStep, stepNum } = useFunnel(QUESTION_STEPS);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Layout>
          <Header onPrev={prevStep} />
          <ProgressBar currentStep={stepNum} />
          <GenericFormProvider onSubmit={handlePost}>
            <QuestionFunnel Funnel={Funnel} Step={Step} nextStep={nextStep} />
          </GenericFormProvider>
        </Layout>
      )}
    </>
  );
};

export default Question;
