import Portal from 'components/common/Portal';

type ModalProps = {
  children: React.ReactNode;
  isShow: boolean;
};

const Modal = ({ children, isShow }: ModalProps) => {
  return (
    <>
      {isShow && (
        <Portal>
          <Modal.Dimmed />
          <Modal.Wrapper>{children}</Modal.Wrapper>
        </Portal>
      )}
    </>
  );
};

const Dimmed = () => {
  return <div className="fixed left-0 top-0 h-screen w-full bg-[#0B0B0B] opacity-70" />;
};

const Wrapper = ({ children }: ChildrenProps) => {
  return (
    <div className="fixed left-2/4 top-2/4 z-50 translate-x-[-50%] translate-y-[-50%]">
      <div className="flex w-[285px] flex-col items-center rounded-[10px] bg-white px-5 pb-5 pt-[32px]">
        {children}
      </div>
    </div>
  );
};

const Title = ({ children }: ChildrenProps) => {
  return <p className="mb-[13px] text-[18px] font-semibold text-gray1000">{children}</p>;
};

const SubTitle = ({ children }: ChildrenProps) => {
  return <p className="whitespace-pre-line text-center text-sm text-[#7A828B]">{children}</p>;
};

type ActionButtonProps = ChildrenProps & {
  action: () => void;
};

const ActionButton = ({ children, action }: ActionButtonProps) => {
  return (
    <button
      className="mt-[32px] flex h-[48px] w-full items-center justify-center rounded-[10px] bg-gray900 font-semibold text-white"
      onClick={action}
    >
      {children}
    </button>
  );
};

Modal.Wrapper = Wrapper;
Modal.Dimmed = Dimmed;
Modal.Title = Title;
Modal.SubTitle = SubTitle;
Modal.ActionButton = ActionButton;

export default Modal;
