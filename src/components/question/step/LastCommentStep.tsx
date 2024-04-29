import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';
import { useGenericFormContext } from 'contexts/GenericFormContex';
import { useWatch } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

const LastCommentStep = () => {
  const {
    register,
    control,
    formState: { isValid, errors },
  } = useGenericFormContext();

  const lastComment = useWatch({
    control,
    name: 'lastComment',
  });

  return (
    <Layout>
      <div>
        <QuestionTitle text={'축사에서 마지막으로 하고\n싶은 말이 있다면 알려 주세요.'} />
        <Textarea
          register={register('lastComment', {
            required: '3글자 이상 입력해 주세요.',
            minLength: {
              value: 3,
              message: '3글자 이상 입력해주세요.',
            },
          })}
          error={errors.lastComment?.message}
          counter={lastComment.length}
          id="lastComment"
          placeholder="ex. 행복하게 잘 살아라!"
          maxLength={400}
        />
      </div>
      <Button type="submit" disabled={!isValid} ga="question_9th">
        내 축사 확인하기
      </Button>
    </Layout>
  );
};

export default LastCommentStep;
