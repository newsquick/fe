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
          placeholder="ex. 매일같이 학교 앞에서 떡볶이 사먹으며 친하게 지냈었지."
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
