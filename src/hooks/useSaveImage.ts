import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';

const useSaveImage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  const handleSaveImage = async () => {
    if (targetRef.current && navigator.userAgent.indexOf('KAKAO') === -1) {
      try {
        const canvas = await html2canvas(targetRef.current, { useCORS: true });
        const downloadLink = document.createElement('a');

        downloadLink.href = canvas.toDataURL('image/jpeg');
        downloadLink.download = 'bloom.jpg';
        downloadLink.click();
      } catch (error) {
        alert('이미지를 다운받을 수 없습니다.');
      }
    } else {
      setIsSupported(false);
    }
  };

  return { targetRef, handleSaveImage, isSupported };
};

export default useSaveImage;
