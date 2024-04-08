import NavigateButton from 'components/common/NavigateButton';
import Carousel from 'components/onboarding/Carousel';

const Onboarding = () => {
  return (
    <div className="mx-auto flex h-full w-full flex-col justify-between px-6 py-9">
      <Carousel />
      <NavigateButton path="question">축사 만들러 가기</NavigateButton>
    </div>
  );
};

export default Onboarding;
