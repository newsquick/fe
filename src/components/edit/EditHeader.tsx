import ChevronIcon from 'assets/svg/chevron-left.svg?react';
import { useNavigate } from 'react-router-dom';

type Props = {
  onUpdate: React.MouseEventHandler<HTMLButtonElement>;
};

const EditHeader = ({ onUpdate }: Props) => {
  const navigate = useNavigate();

  return (
    <div className="mb-6 flex h-16 w-full items-center justify-between">
      <button
        className="flex h-6 w-6 items-center justify-start"
        onClick={() => navigate(-1)}
        data-ga="header_back"
      >
        <ChevronIcon className="pointer-events-none" />
      </button>
      <button className="text-[14px] font-medium text-indigo" onClick={onUpdate} data-ga="result_modify_cta">
        수정 완료
      </button>
    </div>
  );
};

export default EditHeader;
