import QuestionTitle from '../QuestionTitle';

const BUTTON_VALUE = [
  { id: 1, value: '반말' },
  { id: 2, value: '존댓말' },
];

type Props = {
  nextStep: (value: string) => void; // eslint-disable-line no-unused-vars
};

const SpeechTypeStep = ({ nextStep }: Props) => {
  return (
    <div className="flex flex-col w-full h-full">
      <QuestionTitle text={'축사 말투는\n어떻게 할까요?'} />
      <div className="flex flex-col gap-4">
        {BUTTON_VALUE.map(({ id, value }) => (
          <button
            key={id}
            className="custom-hover flex h-[55px] w-full items-center justify-items-start rounded-[5px] bg-gray100 p-[13px] py-6  text-gray900"
            onClick={() => nextStep(value)}
            data-ga="question_6th"
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SpeechTypeStep;
