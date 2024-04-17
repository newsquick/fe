import { FunnelProps, StepProps } from 'hooks/useFunnel';

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
  Funnel: React.ComponentType<FunnelProps>;
  Step: React.ComponentType<StepProps>;
  nextStep: () => void;
}

const QuestionFunnel = ({ Funnel, Step, nextStep }: Props) => {
  return (
    <Funnel>
      <Step name="사용자이름">
        <UserNameStep nextStep={nextStep} />
      </Step>
      <Step name="대상자이름">
        <TargetNameStep nextStep={nextStep} />
      </Step>
      <Step name="대상유형">
        <TargetTypeStep nextStep={nextStep} />
      </Step>
      <Step name="관계">
        <RelationshipStep nextStep={nextStep} />
      </Step>
      <Step name="축사시간">
        <MinuteStep nextStep={nextStep} />
      </Step>
      <Step name="말투">
        <SpeechTypeStep nextStep={nextStep} />
      </Step>
      <Step name="컨셉">
        <ConceptStep nextStep={nextStep} />
      </Step>
      <Step name="이야기">
        <StoryStep nextStep={nextStep} />
      </Step>
      <Step name="마지막할말">
        <LastCommentStep />
      </Step>
    </Funnel>
  );
};

export default QuestionFunnel;
