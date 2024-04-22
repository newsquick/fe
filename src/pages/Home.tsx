import NavigateButton from 'components/common/NavigateButton';
import Banner from 'components/home/Banner';
import HomeHeader from 'components/home/HomeHeader';
import Layout from 'components/home/Layout';
import { SERVER_URL } from 'constants/env';

const Home = () => {
  return (
    <Layout>
      <HomeHeader shareUrl={SERVER_URL} />
      <Banner />
      <NavigateButton path="onboarding" text="시작하기" />
    </Layout>
  );
};

export default Home;
