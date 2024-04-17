import Button from 'components/common/Button';
import { useFormContext } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

type Props = {
  nextStep: () => void;
};

const StoryStep = ({ nextStep }: Props) => {
  const { register } = useFormContext();

  return (
    <Layout>
      <div>
        <QuestionTitle text={'축사 중간에 들어갈 재밌는\n에피소드가 있다면 알려 주세요.'} />
        <label className="relative flex flex-col gap-3" htmlFor="textarea">
          <div className="h-[200px] w-full rounded-[5px] bg-gray100 pt-[15px]">
            <textarea
              className="h-[159px] w-full resize-none bg-gray100 pl-[16px] pr-[35px]  text-[15px] leading-[150%] tracking-[-0.5px] text-gray900 placeholder-gray500 focus:outline-none"
              id="textarea"
              maxLength={400}
              placeholder="ex. 매일같이 학교 앞에서 떡볶이 사먹으며 친하게 지냈었다."
              {...register('story')}
            />
            <span className="absolute bottom-2.5 right-3.5 mt-[30px]  text-[14px] tracking-[-0.3px] text-gray400">
              0/400자
            </span>
          </div>
        </label>
      </div>
      <Button onClick={nextStep} ga="question_8th">
        다음
      </Button>
    </Layout>
  );
};

export default StoryStep;

/* 
              {value.length}/400자
            </span>
          </div>
        </label>
      </div>
      <Button disabled={value.length === 0} onClick={nextStep} ga="question_8th">
        다음

*/
