import TriangleIcon from 'assets/svg/triangle.svg?react';
import { useGenericFormContext } from 'contexts/GenericFormContex';

import QuestionTitle from '../QuestionTitle';
import Layout from './Layout';

const BUTTON_VALUE = [
  { id: 1, value: '1분' },
  { id: 2, value: '2분' },
  { id: 3, value: '3분' },
  { id: 4, value: '4분' },
  { id: 5, value: '5분' },
];

type Props = {
  nextStep: () => void;
};

const MinuteStep = ({ nextStep }: Props) => {
  const { setValue } = useGenericFormContext();

  return (
    <Layout type="button">
      <QuestionTitle text={'축사를 몇 분으로\n하면 좋을까요?'} />
      <div className="flex flex-col gap-4">
        {BUTTON_VALUE.map(({ id, value }) => (
          <button
            key={id}
            type="button"
            className={`custom-hover flex h-[55px] w-full items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6  text-gray900 ${
              value === '3분' ? 'relative' : ''
            }`}
            onClick={() => {
              setValue('minute', value);
              nextStep();
            }}
            data-ga="question_5th"
          >
            {value}
            {value === '3분' && (
              <div className="absolute bottom-[-15px] right-[20px] z-10 mt-2.5 w-max rounded bg-gray800 px-3 py-2.5 text-xs text-white">
                3~4분 길이의 축사가 가장 많아요!
                <TriangleIcon className="absolute bottom-[35px] right-0 mr-3 h-2" />
              </div>
            )}
          </button>
        ))}
      </div>
    </Layout>
  );
};

export default MinuteStep;
