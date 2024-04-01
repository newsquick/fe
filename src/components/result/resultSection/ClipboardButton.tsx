import Button from 'components/common/Button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Swal from 'sweetalert2';

type Props = {
  copyText: string;
};

const COPY_BUTTON_TEXT = '축사 복사하기';

const CopyToClipboardButton = ({ copyText }: Props) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  return (
    <>
      <CopyToClipboard
        text={copyText}
        onCopy={() =>
          Toast.fire({
            icon: 'success',
            title: '축사가 성공적으로 복사되었습니다!',
            iconColor: '#7990F6',
          })
        }
      >
        <Button ga="result_clipboard">{COPY_BUTTON_TEXT}</Button>
      </CopyToClipboard>
    </>
  );
};

export default CopyToClipboardButton;
