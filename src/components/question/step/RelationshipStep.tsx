import CloudIcon from 'assets/images/cloud.svg?react';

import QuestionTitle from '../QuestionTitle';

const BUTTON_VALUE = [
  { id: 1, value: '친구', fill: '#C9F4B4' },
  { id: 2, value: '오빠', fill: '#D6E3FF' },
  { id: 3, value: '언니', fill: '#F96E47' },
  { id: 4, value: '동생', fill: '#D1CEFF' },
  { id: 5, value: '형', fill: '#AEC9FF' },
  { id: 6, value: '누나', fill: '#E991FB' },
];

type Props = {
  nextStep: (value: string) => void; // eslint-disable-line no-unused-vars
};

const RelationshipStep = ({ nextStep }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <QuestionTitle text={'축사를 받는 사람을\n뭐라고 부르면 좋을까요?'} />
      <div className="grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-7">
        {BUTTON_VALUE.map(({ id, value, fill }) => {
          return (
            <div key={id} className="flex flex-col items-center gap-[9px]">
              <CloudIcon
                className="cursor-pointer hover:fill-indigo"
                onClick={() => nextStep(value)}
                data-ga="question_4rd"
                fill={fill}
              />
              <span className="text-sm text-gray700">{value}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RelationshipStep;
