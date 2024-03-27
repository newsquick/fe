import Button from 'components/common/Button';
import useInput from 'hooks/useInput';

import QuestionTitle from '../QuestionTitle';

type Props = {
  onNext: () => void;
};

export const LastCommentStep = ({ onNext }: Props) => {
  const [value, handleChange] = useInput('');
  return (
    <div className="flex h-[calc(100%-84px)] w-full flex-col justify-between">
      <div>
        <QuestionTitle text={'축사에서 마지막으로 하고\n싶은 말이 있다면 알려 주세요.'} />
        <label className="relative flex flex-col gap-3" htmlFor="textarea">
          <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
            <textarea
              className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px]  text-[15px] leading-[150%] tracking-[-0.5px] text-gray900 placeholder-gray500 focus:outline-none"
              id="textarea"
              maxLength={400}
              placeholder="ex. 행복하게 잘 살아라!"
              onChange={handleChange}
            />
            <span className="absolute bottom-2.5 right-3.5 mt-[30px]  text-[14px] tracking-[-0.3px] text-gray400">
              0/400자
            </span>
          </div>
        </label>
      </div>
      <Button disabled={value.length === 0} onClick={onNext} ga="question_9th">
        내 축사 확인하기
      </Button>
    </div>
  );
};
