import { FunnelProps, StepProps } from 'hooks/useFunnel';
import { useFormContext, useWatch } from 'react-hook-form';

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
}

const QuestionFunnel = ({ steps, Funnel, Step, setStep }: Props) => {
  const { handleSubmit } = useFormContext();
  const watch = useWatch();
  console.log(watch);

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
            nextStep={() => {
              setStep(steps[2]);
            }}
          />
        </Step>
        <Step name="대상유형">
          <TargetTypeStep
            nextStep={() => {
              setStep(steps[3]);
            }}
          />
        </Step>
        <Step name="관계">
          <RelationshipStep
            nextStep={() => {
              setStep(steps[4]);
            }}
          />
        </Step>
        <Step name="축사시간">
          <MinuteStep
            nextStep={() => {
              setStep(steps[5]);
            }}
          />
        </Step>
        <Step name="말투">
          <SpeechTypeStep
            nextStep={() => {
              setStep(steps[6]);
            }}
          />
        </Step>
        <Step name="컨셉">
          <ConceptStep
            nextStep={() => {
              setStep(steps[7]);
            }}
          />
        </Step>
        <Step name="이야기">
          <StoryStep
            nextStep={() => {
              setStep(steps[8]);
            }}
          />
        </Step>
        <Step name="마지막할말">
          <LastCommentStep />
        </Step>
      </Funnel>
    </form>
  );
};

export default QuestionFunnel;
