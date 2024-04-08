import ChevronIcon from 'assets/images/chevron-left.svg?react';
import ResultTitle from 'components/result/resultSection/ResultTitle';
import useInput from 'hooks/useInput';
import { useLocation, useNavigate } from 'react-router-dom';
import { MessageApi } from 'src/apis/MessageAPI';

const Edit = () => {
  const { result, id, name } = useLocation().state;
  const [value, handleChange] = useInput(result);
  const navigate = useNavigate();

  const handleUpdate = async (id: string, updateAnswer: string) => {
    await MessageApi.PUT(id, updateAnswer);

    navigate(-1);
  };

  return (
    <div className="flex h-screen flex-col items-center bg-gradient bg-cover px-6 pb-9">
      <div className="flex h-16 w-full items-center justify-between">
        <button
          className="flex h-6 w-6 items-center justify-start"
          onClick={() => navigate(-1)}
          data-ga="header_back"
        >
          <ChevronIcon />
        </button>
        <button className="text-[14px] font-medium text-indigo" onClick={() => handleUpdate(id, value)}>
          수정 완료
        </button>
      </div>
      <ResultTitle name={name} />
      <div className="mb-5 h-[calc(100vh-160px)] w-full rounded-[10px] border border-white border-opacity-60 bg-white bg-opacity-50 bg-clip-padding px-[26px] pb-[26px] pt-[29px] backdrop-blur-sm backdrop-filter">
        <textarea
          className="h-full w-full resize-none bg-white bg-opacity-0 text-[15px] leading-[170%] tracking-[-0.6px] text-gray800 focus:outline-none"
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Edit;
