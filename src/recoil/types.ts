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

export type Step =
  | '사용자이름'
  | '대상자이름'
  | '대상유형'
  | '관계'
  | '축사시간'
  | '말투'
  | '컨셉'
  | '이야기'
  | '마지막할말';
