import ChevronIcon from 'assets/images/chevron-left.svg?react';
import CloseIcon from 'assets/images/close.svg?react';
import { Link } from 'react-router-dom';

type Props = {
  onPrev: React.MouseEventHandler<HTMLButtonElement>;
};

const QuestionHeader = ({ onPrev }: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <button className="flex h-6 w-6 items-center justify-start" onClick={onPrev} data-ga="header_back">
        <ChevronIcon />
      </button>

      <Link to={'/'}>
        <button className="flex h-6 w-6 items-center justify-end" data-ga="header_close">
          <CloseIcon />
        </button>
      </Link>
    </div>
  );
};

export default QuestionHeader;
