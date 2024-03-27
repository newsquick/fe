import { useSetRecoilState } from 'recoil';
import { AnswerDataState } from 'src/recoil/atom';

import QuestionTitle from '../QuestionTitle';

const BUTTON_VALUE = [
  { id: 1, value: '감동' },
  { id: 2, value: '행복' },
  { id: 3, value: '재치' },
  { id: 4, value: '차분' },
  { id: 5, value: '눈물' },
];

type Props = {
  onNext: () => void;
};

export const ConceptStep = ({ onNext }: Props) => {
  const setAnswerData = useSetRecoilState(AnswerDataState);
  return (
    <div className="flex h-full w-full flex-col">
      <QuestionTitle text={'축사의 컨셉은\n무엇인가요?'} />
      <div className="flex flex-col gap-4">
        {BUTTON_VALUE.map(({ id, value }) => (
          <button
            key={id}
            className="custom-hover flex h-[55px] w-full items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6  text-gray900"
            onClick={() => {
              setAnswerData((prev) => ({ ...prev, concept: value }));
              onNext();
            }}
            data-ga="question_7th"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};
