import { useFunnel } from 'hooks/useFunnel';

import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Step8 from './Step8';
import Step9 from './Step9';

const STEPS = [
  'userName',
  'targetName',
  'targetType',
  'relationship',
  'minute',
  'speechType',
  'concept',
  'story',
  'lastComment',
] as const;

const QuestionFunnel = () => {
  const { Funnel, setStep } = useFunnel();

  return (
    <Funnel>
      <Funnel.step name="userName">
        <Step1 onNext={() => setStep(STEPS[1])} />
      </Funnel.step>
      <Funnel.step name="targetName">
        <Step2 onNext={() => setStep(STEPS[2])} />
      </Funnel.step>
      <Funnel.step name="targetType">
        <Step3 onNext={() => setStep(STEPS[3])} />
      </Funnel.step>
      <Funnel.step name="relationship">
        <Step4 onNext={() => setStep(STEPS[4])} />
      </Funnel.step>
      <Funnel.step name="minute">
        <Step5 onNext={() => setStep(STEPS[5])} />
      </Funnel.step>
      <Funnel.step name="speechType">
        <Step6 onNext={() => setStep(STEPS[6])} />
      </Funnel.step>
      <Funnel.step name="concept">
        <Step7 onNext={() => setStep(STEPS[7])} />
      </Funnel.step>
      <Funnel.step name="story">
        <Step8 onNext={() => setStep(STEPS[8])} />
      </Funnel.step>
      <Funnel.step name="lastComment">
        <Step9 onNext={() => {}} /> {/* fetch 처리 */}
      </Funnel.step>
    </Funnel>
  );
};

export default QuestionFunnel;
