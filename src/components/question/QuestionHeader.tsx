import ChevronIcon from 'assets/svg/chevron-left.svg?react';
import CloseIcon from 'assets/svg/close.svg?react';
import { Link } from 'react-router-dom';

type Props = {
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
};

const QuestionHeader = ({ onPrev }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <button className="flex h-6 w-6 items-center justify-start" onClick={onPrev} data-ga="header_back">
        <ChevronIcon className="pointer-events-none" />
      </button>

      <Link to={'/'}>
        <button className="flex h-6 w-6 items-center justify-end" data-ga="header_close">
          <CloseIcon className="pointer-events-none" />
        </button>
      </Link>
    </div>
  );
};

export default QuestionHeader;
