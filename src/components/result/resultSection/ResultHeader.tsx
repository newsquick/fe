import ChevronIcon from 'assets/svg/chevron-left.svg?react';
import ShareButton from 'components/common/ShareButton';
import { Link } from 'react-router-dom';

type Props = {
  shareUrl: string;
};

const ResultHeader = ({ shareUrl }: Props) => {
  return (
    <div className="mb-6 flex h-16 w-full items-center justify-between">
      <Link to={'/question'}>
        <button
          className="flex h-6 w-6 items-center justify-start"
          data-ga="header_back"
          data-html2canvas-ignore="true"
        >
          <ChevronIcon />
        </button>
      </Link>
      <div data-html2canvas-ignore="true">
        <ShareButton url={shareUrl} />
      </div>
    </div>
  );
};

export default ResultHeader;
