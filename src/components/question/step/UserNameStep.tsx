import Button from 'components/common/Button';
import Input from 'components/common/Input';
import { useGenericFormContext } from 'contexts/GenericFormContex';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

type Props = {
  nextStep: () => void;
};

const UserNameStep = ({ nextStep }: Props) => {
  const {
    register,
    formState: { isValid, errors },
  } = useGenericFormContext();

  return (
    <Layout>
      <div>
        <QuestionTitle text={'축사를 할 사람의\n이름을 알려 주세요.'} />
        <Input
          register={register('userName', {
            required: '2글자 이상 입력해 주세요.',
            minLength: {
              value: 2,
              message: '2글자 이상 입력해주세요.',
            },
            pattern: {
              value: /^[가-힣]+$/,
              message: '올바른 한글만 입력해 주세요.',
            },
          })}
          error={errors.userName?.message}
          placeholder="홍길동"
          maxLength={5}
        />
      </div>
      <Button type="button" onClick={nextStep} disabled={!isValid} ga="question_1st">
        다음
      </Button>
    </Layout>
  );
};

export default UserNameStep;
