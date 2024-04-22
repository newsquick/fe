import Portal from 'components/common/Portal';

type Props = {
  isShow: boolean;
  message: string;
};

const Toast = ({ isShow, message }: Props) => {
  return (
    <>
      {isShow && (
        <Portal>
          <div className="animate-fadeIn animate-fadeOut fixed left-2/4 top-7 translate-x-[-50%]">
            <div className="animate-fadeInOut flex h-[42px] w-fit items-center justify-center rounded-md bg-gray800 px-[19px]">
              <p className="font-medium text-white">{message}</p>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Toast;
