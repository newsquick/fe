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
          <div className="fixed left-2/4 top-7 z-50 translate-x-[-50%]">
            <div className="flex h-[42px] w-[230px] items-center justify-center rounded-md bg-gray800 px-[19px] animate-fadeInOut">
              <p className="font-medium text-white">{message}</p>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Toast;
