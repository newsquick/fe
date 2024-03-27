import { useFunnel } from 'hooks/useFunnel';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { AnswerDataState, StepState } from 'src/recoil/atom';

import {
  ConceptStep,
  LastCommentStep,
  MinuteStep,
  RelationshipStep,
  SpeechTypeStep,
  StoryStep,
  TargetNameStep,
  TargetTypeStep,
  UserNameStep,
} from './step';

export const STEPS = [
  '사용자이름',
  '대상자이름',
  '대상유형',
  '관계',
  '축사시간',
  '말투',
  '컨셉',
  '이야기',
  '마지막할말',
] as const;

const QuestionFunnel = () => {
  const { Funnel } = useFunnel();
  const setStep = useSetRecoilState(StepState);
  const answerData = useRecoilValue(AnswerDataState);
  console.log(answerData);

  return (
    <Funnel>
      <Funnel.step name="사용자이름">
        <UserNameStep onNext={() => setStep(STEPS[1])} />
      </Funnel.step>
      <Funnel.step name="대상자이름">
        <TargetNameStep onNext={() => setStep(STEPS[2])} />
      </Funnel.step>
      <Funnel.step name="대상유형">
        <TargetTypeStep onNext={() => setStep(STEPS[3])} />
      </Funnel.step>
      <Funnel.step name="관계">
        <RelationshipStep onNext={() => setStep(STEPS[4])} />
      </Funnel.step>
      <Funnel.step name="축사시간">
        <MinuteStep onNext={() => setStep(STEPS[5])} />
      </Funnel.step>
      <Funnel.step name="말투">
        <SpeechTypeStep onNext={() => setStep(STEPS[6])} />
      </Funnel.step>
      <Funnel.step name="컨셉">
        <ConceptStep onNext={() => setStep(STEPS[7])} />
      </Funnel.step>
      <Funnel.step name="이야기">
        <StoryStep onNext={() => setStep(STEPS[8])} />
      </Funnel.step>
      <Funnel.step name="마지막할말">
        <LastCommentStep onNext={() => {}} /> {/* fetch 처리 */}
      </Funnel.step>
    </Funnel>
  );
};

export default QuestionFunnel;
