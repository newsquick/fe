import ShareIcon from 'assets/svg/share.svg?react';

type Props = {
  url: string;
};

const ShareButton = ({ url }: Props) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '블룸(BLOOM)',
        url: url,
      });
    } else if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => alert('링크가 클립보드에 복사되었습니다.'));
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };

  return (
    <button className="flex h-6 w-6 items-center justify-end" onClick={handleShare} data-ga="header_share">
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
