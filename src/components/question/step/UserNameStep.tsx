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
            required: '이름은 필수 입력입니다.',
            minLength: {
              value: 2,
              message: '2글자 이상 입력해주세요.',
            },
            pattern: {
              value: /^[가-힣]+$/,
              message: '올바르지 않은 형식입니다. (영문, 특수문자, 자음 + 모음만 입력 X)',
            },
          })}
          error={errors.userName?.message}
          placeholder="홍길동"
          maxLength={5}
        />
      </div>
      <Button type="button" onClick={nextStep} disabled={!isValid} data-ga="question_1rd">
        다음
      </Button>
    </Layout>
  );
};

export default UserNameStep;
