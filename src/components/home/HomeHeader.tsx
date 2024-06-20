import ShareButton from '../common/ShareButton';

type Props = {
  shareUrl: string;
};

const HomeHeader = ({ shareUrl }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <a
        className="text-[14px] font-medium text-[#8F8E9C]"
        href="mailto:bloom.wedding.cs@gmail.com"
        data-ga="splash_cs"
      >
        문의하기
      </a>
      <ShareButton url={shareUrl} ga="splash_share" />
    </div>
  );
};

export default HomeHeader;
