import Button from 'components/common/Button';
import Textarea from 'components/common/Textarea';
import { useGenericFormContext } from 'contexts/GenericFormContex';
import { useWatch } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

type Props = {
  nextStep: () => void;
};

const StoryStep = ({ nextStep }: Props) => {
  const {
    register,
    control,
    formState: { isValid, errors },
  } = useGenericFormContext();

  const story = useWatch({
    control,
    name: 'story',
  });

  return (
    <Layout>
      <div>
        <QuestionTitle text={'축사 중간에 들어갈 재밌는\n에피소드가 있다면 알려 주세요.'} />
        <Textarea
          register={register('story', {
            required: '3글자 이상 입력해 주세요.',
            minLength: {
              value: 3,
              message: '3글자 이상 입력해주세요.',
            },
          })}
          error={errors.story?.message}
          counter={story.length}
          id="lastComment"
          placeholder={
            '자세히 작성할수록 더 진심이 담긴 축사 문장을\n받아볼 수 있어요. ex: 나에게 연애 상담을 하던 게\n엊그제 같은데 결혼을 한다니 정말 감회가 새롭다.'
          }
          maxLength={400}
        />
      </div>
      <Button type="button" disabled={!isValid} onClick={nextStep} ga="question_8th">
        다음
      </Button>
    </Layout>
  );
};

export default StoryStep;
