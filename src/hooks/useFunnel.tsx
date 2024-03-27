import { ReactElement, ReactNode } from 'react';
import { useRecoilValue } from 'recoil';
import { StepState } from 'src/recoil/atom';

export interface StepProps {
  name: string;
  children: ReactNode;
}

export interface FunnelProps {
  children: Array<ReactElement<StepProps>>;
}

export const useFunnel = () => {
  const step = useRecoilValue(StepState);

  const Step = (props: StepProps): ReactElement => {
    return <>{props.children}</>;
  };

  const Funnel = ({ children }: FunnelProps) => {
    const targetStep = children.find((childStep) => childStep.props.name === step);

    return <>{targetStep}</>;
  };

  Funnel.step = Step;

  return { Funnel } as const;
};
