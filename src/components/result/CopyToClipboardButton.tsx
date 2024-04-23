import useToast from 'hooks/useToast';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Toast from '../common/Toast';

type Props = {
  copyText: string;
};

const CopyToClipboardButton = ({ copyText }: Props) => {
  const { isShow, handleShowToast } = useToast(3000);

  return (
    <>
      <CopyToClipboard text={copyText} onCopy={handleShowToast}>
        <button
          className="flex h-[55px] w-full items-center justify-center rounded-[10px] bg-gray900 font-bold text-white"
          onClick={handleShowToast}
          data-ga="result_clipboard"
        >
          축사 복사하기
        </button>
      </CopyToClipboard>
      <Toast isShow={isShow} message="축사를 성공적으로 복사했어요!" />
    </>
  );
};

export default CopyToClipboardButton;
