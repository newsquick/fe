import NavigateButton from 'components/common/NavigateButton';
import Banner from 'components/home/Banner';
import HomeHeader from 'components/home/HomeHeader';
import Layout from 'components/home/Layout';

const Home = () => {
  return (
    <Layout>
      <HomeHeader />
      <Banner />
      <NavigateButton path="onboarding" text="시작하기" />
    </Layout>
  );
};

export default Home;
