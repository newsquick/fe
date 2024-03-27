import { atom } from 'recoil';

import { AnswerData, Step } from './types';

export const AnswerDataState = atom<AnswerData>({
  key: 'answerDataState',
  default: {
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
});

export const StepState = atom<Step>({
  key: 'stepState',
  default: '사용자이름',
});