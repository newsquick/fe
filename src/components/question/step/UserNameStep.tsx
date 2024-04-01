/* eslint-disable no-unused-vars */
import Button from 'components/common/Button';
import useInput from 'hooks/useInput';

import QuestionTitle from '../QuestionTitle';

type Props = {
  nextStep: (value: string) => void;
};

const UserNameStep = ({ nextStep }: Props) => {
  const [value, handleChange] = useInput('');

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
      <Button disabled={value.length === 0} onClick={() => nextStep(value)} data-ga="question_1rd">
        다음
      </Button>
    </div>
  );
};

export default UserNameStep;
