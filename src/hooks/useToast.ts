import { useState } from 'react';

export default function useToast(toastTime: number) {
  const [isShow, setIsShow] = useState(false);

  const hideToast = () => {
    setTimeout(() => {
      setIsShow(false);
    }, toastTime);
  };

  const handleShowToast = () => {
    setIsShow(true);
    hideToast();
  };

  return { isShow, handleShowToast };
}
