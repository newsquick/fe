import CloseIcon from 'assets/svg/close.svg?react';
import Portal from 'components/common/Portal';

type Props = {
  children?: React.ReactNode;
  isShow: boolean;
  onClose: () => void;
  onConfirm?: () => void;
  buttonText: string;
};

const Modal = ({ children, isShow, onClose, onConfirm, buttonText }: Props) => {
  return (
    <>
      {isShow && (
        <Portal>
          {/* dimmed */}
          <div className="fixed left-0 top-0 h-screen w-full bg-[#0B0B0B] opacity-70" />
          {/* modal */}
          <div className="fixed left-2/4 top-2/4 z-50 translate-x-[-50%] translate-y-[-50%]">
            <div className="w-fit rounded-[10px] bg-white px-[20px] pb-[19px] pt-[49px]">
              <button className="absolute right-4 top-4" onClick={onClose}>
                <CloseIcon width={10} height={10} />
              </button>
              {children}
              <button
                className="mt-[32px] flex h-[48px] w-full items-center justify-center rounded-[10px] bg-gray900 font-semibold text-white"
                onClick={onConfirm}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </Portal>
      )}
    </>
  );
};

export default Modal;
