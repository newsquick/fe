import NavigateButton from 'components/common/NavigateButton';
import Carousel from 'components/onboarding/Carousel';
import Layout from 'components/onboarding/Layout';

const Onboarding = () => {
  return (
    <Layout>
      <Carousel />
      <NavigateButton path="question" text="축사 만들러 가기" />
    </Layout>
  );
};

export default Onboarding;
