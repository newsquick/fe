import ShareIcon from 'assets/svg/share.svg?react';
import Toast from 'components/result/Toast';
import useToast from 'hooks/useToast';

type Props = {
  url: string;
};

const ShareButton = ({ url }: Props) => {
  const { isShow, handleShowToast } = useToast(3000);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '블룸(BLOOM)',
        url: url,
      });
    } else if (navigator.clipboard) {
      handleShowToast();
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };

  return (
    <>
      <button className="flex items-center justify-end w-6 h-6" onClick={handleShare} data-ga="header_share">
        <ShareIcon />
      </button>
      <Toast isShow={isShow} message="링크를 성공적으로 복사했어요!" />
    </>
  );
};

export default ShareButton;
