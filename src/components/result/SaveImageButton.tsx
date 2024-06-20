import Modal from 'components/common/Modal';
import Toast from 'components/common/Toast';
import useModal from 'hooks/useModal';
import useToast from 'hooks/useToast';

type Props = {
  onSave: () => void;
  support: boolean;
};

const SaveImageButton = ({ onSave, support }: Props) => {
  const { isShow: showToast, handleShowToast } = useToast(3000);
  const { isShow: showModal, handleShowModal, handleCloseModal } = useModal();

  const handleClick = () => {
    if (support) {
      onSave();
      handleShowToast();
    } else {
      handleShowModal();
      alert('모달 등장 test');
    }
  };

  return (
    <>
      <button
        className="flex h-[55px] w-full items-center justify-center rounded-[10px] bg-white font-bold  text-gray-900"
        onClick={handleClick}
        data-ga="result_download"
      >
        이미지로 저장하기
      </button>
      {support ? (
        <Toast isShow={showToast} message="이미지를 성공적으로 복사했어요!" />
      ) : (
        <Modal isShow={showModal}>
          <Modal.Title>이미지를 저장할 수 없어요</Modal.Title>
          <Modal.SubTitle>
            {
              '카카오 브라우저에서는 지원하지 않는\n기능이에요 다른 모바일 브라우저\n(Chrome, Safari)를 이용해주세요'
            }
          </Modal.SubTitle>
          <Modal.ActionButton action={handleCloseModal}>확인</Modal.ActionButton>
        </Modal>
      )}
    </>
  );
};

export default SaveImageButton;
