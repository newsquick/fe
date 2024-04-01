import ErrorAvatar from 'assets/images/error-avatar.svg?react';
import NavigateButton from 'components/common/NavigateButton';

const TITLE = '일시적인 오류가 발생했습니다';
const SUB_TITLE = '다시 시도해주세요';
const BUTTON_TEXT = '처음으로 돌아가기';

const Error = () => {
  return (
    <>
      <div className="flex h-[calc(100vh-95px)] flex-col items-center justify-center px-6">
        <ErrorAvatar />
        <span className="mt-[33px] text-[22px] font-bold text-gray1000">{TITLE}</span>
        <span className="mt-[7px] text-[15px]  text-gray800">{SUB_TITLE}</span>
      </div>
      <NavigateButton path="home">{BUTTON_TEXT}</NavigateButton>
    </>
  );
};

export default Error;
