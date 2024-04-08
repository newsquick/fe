import NavigateButton from 'components/common/NavigateButton';
import Banner from 'components/home/Banner';
import HeaderWithShare from 'components/home/HeaderWithShare';
import Layout from 'components/home/Layout';

const Home = () => {
  return (
    <Layout>
      <HeaderWithShare />
      <Banner />
      <NavigateButton path="onboarding">시작하기</NavigateButton>
    </Layout>
  );
};

export default Home;
