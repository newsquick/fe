import ChevronIcon from 'assets/svg/chevron-left.svg?react';
import ShareButton from 'components/common/ShareButton';
import { Link } from 'react-router-dom';

type Props = {
  shareUrl: string;
};

const ResultHeader = ({ shareUrl }: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-16 mb-6">
      <Link to={'/question'}>
        <button
          className="flex items-center justify-start w-6 h-6"
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