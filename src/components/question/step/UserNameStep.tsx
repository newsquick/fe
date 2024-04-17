import Button from 'components/common/Button';
import { useFormContext } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

type Props = {
  nextStep: () => void;
};

const UserNameStep = ({ nextStep }: Props) => {
  const {
    register,
    formState: { isValid },
  } = useFormContext();

  return (
    <Layout>
      <div>
        <QuestionTitle text={'축사를 할 사람의\n이름을 알려 주세요.'} />
        <input
          className="options-gray500 h-[55px] w-full rounded-[5px] bg-gray100 p-4  text-[17px] tracking-[-0.3px] text-gray900 caret-indigo outline-indigo"
          {...register('userName', { required: true })}
          placeholder="홍길동"
          maxLength={10}
        />
      </div>
      <Button disabled={!isValid} onClick={nextStep} data-ga="question_1rd">
        다음
      </Button>
    </Layout>
  );
};

export default UserNameStep;
