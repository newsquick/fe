import { useState } from 'react';

type Props = {
  children: React.ReactNode;
  slideWidth: number;
  slideCount: number;
  showDots: boolean;
};

const Slider = ({ children, slideWidth, slideCount, showDots }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <>
      {/* Viewer */}
      <div className="overflow-hidden">
        {/* Slider */}
        <div
          className="flex"
          style={{
            width: `${slideWidth * slideCount}px`,
            transform: `translateX(-${currentSlide * slideWidth}px)`,
          }}
        >
          {/* Slide */}
          {children}
        </div>
      </div>
      {/* Dots : showDots === true */}
      {showDots && (
        <div className="mt-5 flex cursor-pointer justify-center gap-2">
          {[...Array(slideCount)].map((_, idx) => (
            <button
              key={idx}
              className={`h-[9px] w-[9px] rounded-full ${currentSlide === idx ? 'bg-indigo' : 'bg-gray-200'}`}
              onClick={() => {
                setCurrentSlide(idx);
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Slider;

/* Use Example
<Slider {...options}>
  <div className="w-[slideWidth] flex-shrink-0 ..."> --> slideContentWrapper
    ...innerSlideContent
  </div>
</Slider>
*/
