import ChevronIcon from 'assets/images/chevron-left.svg?react';
import ShareButton from 'components/common/ShareButton';
import { Link } from 'react-router-dom';

const ResultHeader = () => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <Link to={'/question'}>
        <button className="flex h-6 w-6 items-center justify-start" data-ga="header_back">
          <ChevronIcon />
        </button>
      </Link>
      <ShareButton />
    </div>
  );
};

export default ResultHeader;
