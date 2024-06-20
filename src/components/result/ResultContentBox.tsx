import EditIcon from 'assets/svg/edit.svg?react';
import { Link } from 'react-router-dom';

const ResultContentBox = ({ children }: ChildrenProps) => {
  return (
    <div className="mb-5 w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
      <span className="whitespace-pre-line text-[15px] leading-[170%] tracking-[-0.6px] text-gray800">
        {children}
      </span>
      <div className="float-right mt-[17px]">
        <Link to={'/edit'}>
          <EditIcon />
        </Link>
      </div>
    </div>
  );
};

export default ResultContentBox;
