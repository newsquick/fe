import NavigateButton from 'components/common/NavigateButton';
import Slider from 'components/home/Slider';

const slides = [
  {
    image: '/assets/onboarding_1.webp',
    description: {
      title: '막막한 축사 준비를 손쉽게',
      subTitle: '소중한 사람의 축복을 위해 진심을 전할 수 있도록\nAI가 맞춤형 축사 문장을 바로 생성해 줘요.',
    },
  },

  {
    image: '/assets/onboarding_2.webp',
    description: {
      title: '축사 주의사항도 미리 살펴보세요',
      subTitle: '축사가 막막하게 느껴진다면, 주의사항을\n미리 살펴보고 걱정을 덜어보세요.',
    },
  },
  {
    image: '/assets/onboarding_3.webp',
    description: {
      title: '뻔하지 않은, 진심을 담은 축사',
      subTitle: '내 상황에 맞춰, 단 하나밖에 없는\n축사 문장을 만들어 드려요.',
    },
  },
];

// TODO: 무한 슬라이더 구현
const Onboarding = () => {
  const options = {
    slideWidth: 452,
    slideCount: 3,
    showDots: true,
  };

  return (
    <div className="mx-auto h-screen w-full px-6 py-9">
      <div className="h-[calc(100%-55px)] w-full">
        <Slider {...options}>
          {slides.map(({ image, description }, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <img src={image} className="w-[452px]" />
              <div className="flex flex-col gap-[10px]">
                <p className="text-center  text-[23px] font-bold text-gray1000">{description.title}</p>
                <p className="trackimg-[-0.5px]  whitespace-pre-line text-center text-[14px] text-gray800">
                  {description.subTitle}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <NavigateButton path="question">축사 만들러 가기</NavigateButton>
    </div>
  );
};

export default Onboarding;
