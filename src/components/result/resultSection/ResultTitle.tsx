import ResultAvatar from 'assets/images/result-avatar.svg?react';

type Props = {
  name: string;
};

const ResultTitle = ({ name }: Props) => {
  const RESULT_TITLE = `${name}님을 위한\n축사가 도착했어요`;

  return (
    <div className="mb-7 flex h-[68px] w-full justify-between">
      <span className="whitespace-pre-line text-2xl font-bold text-gray1000">{RESULT_TITLE}</span>
      <ResultAvatar />
    </div>
  );
};

export default ResultTitle;
