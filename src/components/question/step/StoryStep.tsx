import Button from 'components/common/Button';
import useInput from 'hooks/useInput';

import QuestionTitle from '../QuestionTitle';

type Props = {
  nextStep: (value: string) => void; // eslint-disable-line no-unused-vars
};

const StoryStep = ({ nextStep }: Props) => {
  const [value, handleChange] = useInput('');

  return (
    <div className="flex h-[calc(100%-84px)] w-full flex-col justify-between">
      <div>
        <QuestionTitle text={'축사 중간에 들어갈 재밌는\n에피소드가 있다면 알려 주세요.'} />
        <label className="relative flex flex-col gap-3" htmlFor="textarea">
          <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
            <textarea
              className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px]  text-[15px] leading-[150%] tracking-[-0.5px] text-gray900 placeholder-gray500 focus:outline-none"
              id="textarea"
              maxLength={400}
              placeholder="ex. 매일같이 학교 앞에서 떡볶이 사먹으며 친하게 지냈었다."
              onChange={handleChange}
            />
            <span className="absolute bottom-2.5 right-3.5 mt-[30px]  text-[14px] tracking-[-0.3px] text-gray400">
              0/400자
            </span>
          </div>
        </label>
      </div>
      <Button disabled={value.length === 0} onClick={() => nextStep(value)} ga="question_8th">
        다음
      </Button>
    </div>
  );
};

export default StoryStep;
