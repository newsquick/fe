import Logo from 'assets/images/logo.svg?react';
import HomeHeader from 'components/common/HomeHeader';
import NavigateButton from 'components/common/NavigateButton';

const HEADER_HEIGHT = 64;
const BUTTON_HEIGHT = 55;
const MAIN_HEIGHT = `calc(100% - ${HEADER_HEIGHT + BUTTON_HEIGHT}px)`;

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/assets/bg_home.png')] bg-cover px-6 pb-9">
      <HomeHeader />
      <div className="flex flex-col items-center justify-center gap-3" style={{ height: MAIN_HEIGHT }}>
        <Logo />
        <p className="text-[18px] font-medium text-gray1000">개인 맞춤형 축사 생성 서비스</p>
      </div>
      <NavigateButton path="onboarding">시작하기</NavigateButton>
    </div>
  );
};

export default Home;
