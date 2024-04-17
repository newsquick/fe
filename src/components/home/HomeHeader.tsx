import ShareButton from '../common/ShareButton';

type Props = {
  shareUrl: string;
};

const HomeHeader = ({ shareUrl }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-end">
      <ShareButton url={shareUrl} />
    </div>
  );
};

export default HomeHeader;
