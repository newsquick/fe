import FlowerIcon from 'assets/svg/flower.svg?react';
import { useFormContext } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

type Props = {
  nextStep: () => void;
};

const BUTTON_VALUE = [
  { id: 1, value: '신랑', fill: '#AEC9FF' },
  { id: 2, value: '신부', fill: '#FB5500' },
];

const TargetTypeStep = ({ nextStep }: Props) => {
  const { setValue } = useFormContext();

  return (
    <Layout type="button">
      <QuestionTitle text={'축사를 받을 사람은\n신랑인가요, 신부인가요?'} />
      <div className="flex justify-between gap-3">
        {BUTTON_VALUE.map(({ id, value, fill }) => (
          <button
            key={id}
            type="button"
            className="custom-hover flex h-[187px] w-full flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 "
            onClick={() => {
              setValue('targetType', value);
              nextStep();
            }}
            data-ga="question_3rd"
          >
            <FlowerIcon fill={fill} className="pointer-events-none" />
            <span className="mt-2 text-[17px]">{value}</span>
          </button>
        ))}
      </div>
    </Layout>
  );
};

export default TargetTypeStep;
