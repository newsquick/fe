import Modal from 'components/common/Modal';
import useModal from 'hooks/useModal';

type Props = {
  retryResult: () => void;
};

const modalMessage = {
  title: '축사를 다시 받아보시겠어요?',
  subTitle: '입력하신 정보로 더 정확한\n축사를 작성해드릴게요',
};

const ResultRetryButton = ({ retryResult }: Props) => {
  const { isShow, handleShowModal, handleCloseModal } = useModal();

  return (
    <>
      <button
        className="mb-[45px] mt-4 text-sm font-medium tracking-[-0.4px] text-gray600 underline"
        data-ga="result_retry"
        onClick={handleShowModal}
        data-html2canvas-ignore="true"
      >
        축사 다시 받아보기
      </button>

      <Modal isShow={isShow} onClose={handleCloseModal} onConfirm={retryResult} buttonText="다시 받아보기">
        <div className="flex flex-col items-center justify-center gap-[11px] px-3">
          <p className="text-[19px] font-semibold text-gray1000">{modalMessage.title}</p>
          <p className="whitespace-pre-line text-center text-sm text-[#404C5F]">{modalMessage.subTitle}</p>
        </div>
      </Modal>
    </>
  );
};

export default ResultRetryButton;
