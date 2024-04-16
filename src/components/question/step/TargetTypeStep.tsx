import FlowerIcon from 'assets/svg/flower.svg?react';
import { useFormContext } from 'react-hook-form';

import QuestionTitle from '../QuestionTitle';

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
    <div className="flex h-[calc(100%-84px)] w-full flex-col">
      <QuestionTitle text={'축사를 받을 사람은\n신랑인가요, 신부인가요?'} />
      <div className="flex justify-between gap-3">
        {BUTTON_VALUE.map(({ id, value, fill }) => (
          <button
            key={id}
            className="custom-hover flex h-[187px] w-full flex-col items-center justify-between rounded-[5px] bg-gray-100 py-6 "
            onClick={() => {
              setValue('targetType', value);
              nextStep();
            }}
            data-ga="question_3rd"
          >
            <FlowerIcon fill={fill} />
            <span className="mt-2  text-[17px]">{value}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TargetTypeStep;
