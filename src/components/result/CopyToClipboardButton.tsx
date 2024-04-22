import useToast from 'hooks/useToast';

import Toast from '../common/Toast';

const CopyToClipboardButton = () => {
  const { isShow, handleShowToast } = useToast(3000);

  return (
    <>
      <button
        className="flex h-[55px] w-full items-center justify-center rounded-[10px] bg-gray900 font-bold text-white"
        onClick={handleShowToast}
        data-ga="result_clipboard"
      >
        축사 복사하기
      </button>
      <Toast isShow={isShow} message="축사를 성공적으로 복사했어요!" />
    </>
  );
};

export default CopyToClipboardButton;
