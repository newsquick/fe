import ShareIcon from 'assets/images/share.svg?react';

const ShareButton = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '블룸(BLOOM)',
        url: 'https://ai-bloom.site',
      });
    } else if (navigator.clipboard) {
      navigator.clipboard
        .writeText('https://ai-bloom.site')
        .then(() => alert('링크가 클립보드에 복사되었습니다.'));
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
