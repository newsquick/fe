import { STEPS } from 'components/question/QuestionFunnel';
import { selector } from 'recoil';

import { StepState } from './atom';

export const currentStepState = selector({
  key: 'currentStepState',
  get: ({ get }) => {
    const step = get(StepState);
    const stepNum = STEPS.indexOf(step) + 1;
    return { stepNum };
  },
});
