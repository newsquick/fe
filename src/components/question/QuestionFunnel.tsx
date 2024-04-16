import { DevTool } from '@hookform/devtools';
import { FunnelProps, StepProps } from 'hooks/useFunnel';
import { useState } from 'react';
import { useFormContext } from 'react-hook-form';

import ConceptStep from './step/ConceptStep';
import LastCommentStep from './step/LastCommentStep';
import MinuteStep from './step/MinuteStep';
import RelationshipStep from './step/RelationshipStep';
import SpeechTypeStep from './step/SpeechTypeStep';
import StoryStep from './step/StoryStep';
import TargetNameStep from './step/TargetNameStep';
import TargetTypeStep from './step/TargetTypeStep';
import UserNameStep from './step/UserNameStep';

export interface Props {
  steps: string[];
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  setStep: React.Dispatch<React.SetStateAction<string>>;
  onPost: (answer: AnswerData) => void; // eslint-disable-line no-unused-vars
}

const QuestionFunnel = ({ steps, Funnel, Step, setStep, onPost }: Props) => {
  const { register, control, handleSubmit } = useFormContext();
  const [answerData, setAnswerData] = useState({
    userName: '',
    targetName: '',
    targetType: '',
    relationship: '',
    minute: '',
    speechType: '',
    concept: '',
    story: '',
    lastComment: '',
    isRenew: false,
  });

  const updateAnswer = (step: string, value: string) => {
    setAnswerData((prevAnswer) => ({
      ...prevAnswer,
      [step]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <Funnel>
        <Step name="사용자이름">
          <UserNameStep
            nextStep={() => {
              setStep(steps[1]);
            }}
          />
        </Step>
        <Step name="대상자이름">
          <TargetNameStep
            nextStep={(value) => {
              updateAnswer('targetName', value);
              setStep(steps[2]);
            }}
          />
        </Step>
        <Step name="대상유형">
          <TargetTypeStep
            nextStep={(value) => {
              updateAnswer('targetType', value);
              setStep(steps[3]);
            }}
          />
        </Step>
        <Step name="관계">
          <RelationshipStep
            nextStep={(value) => {
              updateAnswer('relationship', value);
              setStep(steps[4]);
            }}
          />
        </Step>
        <Step name="축사시간">
          <MinuteStep
            nextStep={(value) => {
              updateAnswer('minute', value);
              setStep(steps[5]);
            }}
          />
        </Step>
        <Step name="말투">
          <SpeechTypeStep
            nextStep={(value) => {
              updateAnswer('speechType', value);
              setStep(steps[6]);
            }}
          />
        </Step>
        <Step name="컨셉">
          <ConceptStep
            nextStep={(value) => {
              updateAnswer('concept', value);
              setStep(steps[7]);
            }}
          />
        </Step>
        <Step name="이야기">
          <StoryStep
            nextStep={(value) => {
              updateAnswer('story', value);
              setStep(steps[8]);
            }}
          />
        </Step>
        <Step name="마지막할말">
          <LastCommentStep
            onSubmit={(value) => {
              updateAnswer('lastComment', value);
              onPost(answerData);
            }}
          />
        </Step>
      </Funnel>
      <DevTool control={control} />
    </form>
  );
};

export default QuestionFunnel;
