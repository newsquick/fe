import Logo from 'assets/svg/logo.svg?react';

const HEADER_HEIGHT = 64;
const BUTTON_HEIGHT = 55;
const MAIN_HEIGHT = `calc(100% - ${HEADER_HEIGHT + BUTTON_HEIGHT}px)`;

const Banner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-3" style={{ height: MAIN_HEIGHT }}>
      <Logo />
      <p className="text-[18px] font-medium text-gray1000">개인 맞춤형 축사 생성 서비스</p>
    </div>
  );
};

export default Banner;
