import { useState } from 'react';

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = () => {
    setIsShow(true);
  };

  const handleCloseModal = () => {
    setIsShow(false);
  };

  return { isShow, handleShowModal, handleCloseModal };
};

export default useModal;
