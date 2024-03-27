import { atom } from 'recoil';

import { AnswerList } from './types';

export const AnswerDataState = atom<AnswerList[]>({
  key: 'answerDataState',
  default: [
    {
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
    },
  ],
});

export const StepState = atom({
  key: 'stepState',
  default: 'userName',
});
