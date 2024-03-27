export type AnswerData = {
  userName: string;
  targetName: string;
  targetType: string;
  relationship: string;
  minute: string;
  speechType: string;
  concept: string;
  story: string;
  lastComment: string;
  isRenew: boolean;
};

// SelectComponent type
export type Options = AvatarOptions[] | ButtonOptions[] | string;

export type AvatarOptions = {
  id: number;
  value: string;
  fill: string;
};

export type ButtonOptions = {
  id: number;
  value: string;
};
