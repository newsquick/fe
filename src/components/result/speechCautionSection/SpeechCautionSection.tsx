import NavigateButton from 'components/common/NavigateButton';

import CautionList from './CautionList';
import CautionTitle from './CautionTitle';

const SpeechCautionSection = () => {
  return (
    <div className="bg-white px-6 pb-10 pt-[62px]">
      <CautionTitle title={'축사를 읽을 때 이런 부분을\n조심해주세요'} />
      <CautionList />
      <NavigateButton path="home" ga="result_home" text="홈으로 가기" />
    </div>
  );
};

export default SpeechCautionSection;
