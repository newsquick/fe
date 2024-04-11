import DomToImage from 'dom-to-image';
import { saveAs } from 'file-saver';
import { useRef } from 'react';

const useSaveImage = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const options = {
    filter: (node: Node) => {
      return node.nodeName !== 'BUTTON';
    },
  };

  const handleSaveImage = () => {
    if (targetRef.current === null) {
      return;
    }
    DomToImage.toBlob(targetRef.current, options).then((blob) => {
      saveAs(blob, 'bloom.png');
    });
  };

  return { targetRef, handleSaveImage };
};

export default useSaveImage;
