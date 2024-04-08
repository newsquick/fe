import ShareIcon from 'assets/images/share.svg?react';

const HomeHeader = () => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: '블룸',
        text: '막막한 축사 준비를 손쉽게',
        url: 'https://ai-bloom.site',
      });
    } else {
      alert('공유하기가 지원되지 않는 환경 입니다.');
    }
  };

  return (
    <div className="flex h-16 w-full items-center justify-end">
      <button className="flex h-6 w-6 items-center justify-end" onClick={handleShare} data-ga="header_share">
        <ShareIcon />
      </button>
    </div>
  );
};

export default HomeHeader;
