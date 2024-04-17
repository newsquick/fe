import html2canvas from 'html2canvas';
import { useRef } from 'react';

const useSaveImage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const handleSaveImage = async () => {
    if (targetRef.current) {
      const canvas = await html2canvas(targetRef.current, { useCORS: true });
      const downloadLink = document.createElement('a');

      downloadLink.href = canvas.toDataURL('image/jpeg');
      downloadLink.download = 'bloom.jpg';
      downloadLink.click();
    }
  };

  return { targetRef, handleSaveImage };
};

export default useSaveImage;
