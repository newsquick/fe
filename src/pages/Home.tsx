import Logo from 'assets/images/logo.svg?react';
import NavigateButton from 'components/common/NavigateButton';

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-[url('/assets/bg_home.png')] bg-cover px-6 py-9">
      <div className="flex h-[calc(100%-55px)] flex-col items-center justify-center gap-3">
        <Logo />
        <p className="text-[18px] font-medium text-gray1000">개인 맞춤형 축사 생성 서비스</p>
      </div>
      <NavigateButton path="onboarding">시작하기</NavigateButton>
    </div>
  );
};

export default Home;
