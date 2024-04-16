import Button from 'components/common/Button';
import { useFormContext } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';

type Props = {
  nextStep: (value: string) => void; // eslint-disable-line no-unused-vars
};

const UserNameStep = ({ nextStep }: Props) => {
  const { register } = useFormContext();

  return (
    <div className="flex h-[calc(100%-84px)] w-full flex-col justify-between">
      <div>
        <QuestionTitle text={'축사를 할 사람의\n이름을 알려 주세요.'} />
        <input
          className="options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4  text-[17px] tracking-[-0.3px] text-gray900 caret-indigo outline-indigo"
          {...register('userName', { required: 'error message' })}
          maxLength={10}
          placeholder="홍길동"
        />
      </div>
      <Button disabled={register.length === 0} onClick={() => nextStep(register.name)} data-ga="question_1rd">
        다음
      </Button>
    </div>
  );
};

export default UserNameStep;
