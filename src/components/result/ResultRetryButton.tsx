import Modal from 'components/common/Modal';
import useModal from 'hooks/useModal';

type Props = {
  retryResult: () => void;
};

const ResultRetryButton = ({ retryResult }: Props) => {
  const { isShow, handleShowModal } = useModal();

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

      <Modal isShow={isShow}>
        <Modal.Title>축사를 다시 받아보시겠어요?</Modal.Title>
        <Modal.SubTitle>{'입력하신 정보로 더 정확한\n축사를 작성해드릴게요'}</Modal.SubTitle>
        <Modal.ActionButton action={retryResult}>다시 받아보기</Modal.ActionButton>
      </Modal>
    </>
  );
};

export default ResultRetryButton;
