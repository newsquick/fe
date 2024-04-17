import { ReactElement, ReactNode, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = (steps: string[]) => {
  const [step, setStep] = useState(steps[0]);
  const navigate = useNavigate();
  const currentStepIndex = steps.indexOf(step);
  const lastStepIndex = steps.length - 1;

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  const prevStep = () => {
    if (currentStepIndex === 0) {
      navigate('/');
    }
    setStep(steps[currentStepIndex - 1]);
  };

  const nextStep = () => {
    if (currentStepIndex === lastStepIndex) {
      return;
    }
    setStep(steps[currentStepIndex + 1]);
  };

  return { Funnel, Step, prevStep, nextStep, stepNum: currentStepIndex + 1 } as const;
};
