import { useNavigate } from 'react-router-dom';
import { MessageApi } from 'src/api/message';

const usePutMessage = (id: string, updateAnswer: string) => {
  const navigate = useNavigate();

  const handleUpdate = async () => {
    await MessageApi.PUT(id, updateAnswer);

    navigate(-1);
  };

  return { handleUpdate };
};

export default usePutMessage;
