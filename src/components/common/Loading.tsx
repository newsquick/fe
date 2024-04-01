import LoadingAvatar from 'assets/images/loading-avatar.svg?react';
import RenewAvatar from 'assets/images/renew-avatar.svg?react';
import { CAUTION_LIST } from 'constants/index';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { getRandomText } from 'utils/index';

import Header from './Header';

type Props = {
  isRenew?: boolean;
};

const SUB_TITLE = '잠시만 기다려 주세요';

const Loading = ({ isRenew = false }: Props) => {
  const TITLE = isRenew ? '축사를 다시 작성하고 있어요!' : '축사를 작성하고 있어요!';
  const randomCaution = getRandomText(CAUTION_LIST);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/question');
  };

  return (
    <div className="px-6">
      <Header onPrev={handleClick} />
      <div className="flex flex-col gap-1.5">
        <div className="mt-[36px] flex items-center justify-between">
          <span className="text-[22px] font-bold tracking-[-0.5px] text-gray1000">{TITLE}</span>
          <BeatLoader color="#606873" size={9} />
        </div>
        <span className="block tracking-[-0.4px] text-gray800">{SUB_TITLE}</span>
      </div>
      {isRenew ? (
        <div className="float-right mt-[25px]">
          <RenewAvatar />
        </div>
      ) : (
        <div className="mt-6 flex h-[185px] w-full justify-between rounded-xl bg-gray100 pl-4 pt-[30px] tracking-[-0.6px]">
          <span className="whitespace-pre-line text-[15px] leading-[165%] text-gray800">{randomCaution}</span>
          <LoadingAvatar />
        </div>
      )}
    </div>
  );
};

export default Loading;
