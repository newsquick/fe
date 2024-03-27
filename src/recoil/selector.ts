import { STEPS } from 'components/question/QuestionFunnel';
import { selector } from 'recoil';

import { StepState } from './atom';

export const currentStepState = selector({
  key: 'currentStepState',
  get: ({ get }) => {
    const step = get(StepState);

    const stepIdx = STEPS.indexOf(step);
    const stepNum = stepIdx + 1;

    return { stepIdx, stepNum };
  },
});