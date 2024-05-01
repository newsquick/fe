import html2canvas from 'html2canvas';
import { useRef, useState } from 'react';

const useSaveImage = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const [isSupported, setIsSupported] = useState(true);

  const handleSaveImage = async () => {
    if (!targetRef.current) return;

    try {
      const canvas = await html2canvas(targetRef.current, { useCORS: true });
      const downloadLink = document.createElement('a');

      downloadLink.href = canvas.toDataURL('image/jpeg');
      downloadLink.download = 'bloom.jpg';
      downloadLink.click();
    } catch (error) {
      setIsSupported(false);
    }
  };

  return { targetRef, handleSaveImage, isSupported };
};

export default useSaveImage;
