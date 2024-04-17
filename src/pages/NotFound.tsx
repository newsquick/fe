import ErrorAvatar from 'assets/svg/error-avatar.svg?react';
import Layout from 'components/common/Layout';
import NavigateButton from 'components/common/NavigateButton';

const NotFound = () => {
  return (
    <Layout>
      <div className="h-full px-6 pb-9">
        <div className="flex h-[calc(100%-55px)] flex-col items-center justify-center">
          <ErrorAvatar />
          <span className="mt-[33px] text-[22px] font-bold text-gray1000">404 Not Found</span>
          <span className="mt-[7px] text-[15px]  text-gray800">올바른 주소로 서비스를 이용해주세요.</span>
        </div>
        <NavigateButton path="home" text="처음으로 돌아가기" />
      </div>
    </Layout>
  );
};

export default NotFound;
