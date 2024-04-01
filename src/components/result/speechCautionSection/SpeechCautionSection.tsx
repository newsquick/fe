import NavigateButton from 'components/common/NavigateButton';

import CautionList from './CautionList';
import CautionTitle from './CautionTitle';

const HOME_BUTTON_TEXT = '홈으로 가기';

const SpeechCautionSection = () => {
  return (
    <div className="bg-white px-6 pb-10 pt-[62px]">
      <CautionTitle />
      <CautionList />
      <NavigateButton path="home" ga="result_home">
        {HOME_BUTTON_TEXT}
      </NavigateButton>
    </div>
  );
};

export default SpeechCautionSection;
