import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SLIDES = [
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

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'dots-custom',
};

const TEXT_HEIGHT = 80;
const IMAGE_HEIGHT = `h-[calc(100%-${TEXT_HEIGHT}px)]`;

const Carousel = () => {
  return (
    <div className="h-full w-full pb-16">
      <Slider {...SLIDER_SETTINGS}>
        {SLIDES.map(({ image, description }, index) => (
          <div key={index} className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
            <div
              className={`bg-bottom-4 w-full bg-contain bg-no-repeat ${IMAGE_HEIGHT}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundPosition: 'center',
              }}
            />
            <div className="flex h-20 flex-col justify-between">
              <p className="text-center text-[23px] font-bold text-gray1000">{description.title}</p>
              <p className="trackimg-[-0.5px] whitespace-pre-line text-center text-[14px] text-gray800">
                {description.subTitle}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
