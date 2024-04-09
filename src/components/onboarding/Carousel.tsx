import { ONBOARDING_SLIDES } from 'constants/index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  dotsClass: 'dots-custom',
};

const TEXT_HEIGHT = 80;
const IMAGE_HEIGHT = `calc(100% - ${TEXT_HEIGHT}px)`;

const Carousel = () => {
  return (
    <div className="h-full w-full pb-16">
      <Slider {...SLIDER_SETTINGS}>
        {ONBOARDING_SLIDES.map(({ image, description }, index) => (
          <div key={index} className="flex h-full w-full cursor-pointer flex-col items-center justify-center">
            <div
              className="bg-bottom-4 w-full bg-contain bg-no-repeat"
              style={{
                height: IMAGE_HEIGHT,
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
