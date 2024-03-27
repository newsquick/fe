import Button from 'components/common/Button';
import useInput from 'hooks/useInput';
import { useSetRecoilState } from 'recoil';
import { AnswerDataState } from 'src/recoil/atom';

import QuestionTitle from '../QuestionTitle';

type Props = {
  onNext: () => void;
};

export const UserNameStep = ({ onNext }: Props) => {
  const [value, handleChange] = useInput('');
  const setAnswerData = useSetRecoilState(AnswerDataState);

  return (
    <div className="flex h-[calc(100%-84px)] w-full flex-col justify-between">
      <div>
        <QuestionTitle text={'축사를 할 사람의\n이름을 알려 주세요.'} />
        <input
          className="options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4  text-[17px] tracking-[-0.3px] text-gray900 caret-indigo outline-indigo"
          maxLength={10}
          placeholder="홍길동"
          onChange={handleChange}
        />
      </div>
      <Button
        disabled={value.length === 0}
        onClick={() => {
          setAnswerData((prev) => ({ ...prev, userName: value }));
          onNext();
        }}
        data-ga="question_1rd"
      >
        다음
      </Button>
    </div>
  );
};
