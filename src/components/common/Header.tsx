import ChevronIcon from 'assets/svg/chevron-left.svg?react';
import CloseIcon from 'assets/svg/close.svg?react';
import { Link } from 'react-router-dom';

type Props = {
  noCloseBtn?: boolean;
  onPrev?: React.MouseEventHandler<HTMLButtonElement>;
};

const Header = ({ noCloseBtn = false, onPrev }: Props) => {
  return (
    <div className="flex items-center justify-between w-full h-16">
      <button className="flex items-center justify-start w-6 h-6" onClick={onPrev} data-ga="header_back">
        <ChevronIcon className='pointer-events-none'/>
      </button>
      {!noCloseBtn && (
        <Link to={'/'}>
          <button className="flex items-center justify-end w-6 h-6" data-ga="header_close">
            <CloseIcon className='pointer-events-none' />
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
