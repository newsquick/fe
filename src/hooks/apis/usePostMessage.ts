import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageApi } from 'src/api/message';

const usePostMessage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handlePost = async (answer: AnswerData) => {
    setIsLoading(true);
    const id = await MessageApi.POST(answer);
    setIsLoading(false);
    navigate(`/result/${id}`, { state: answer });
  };

  return { isLoading, handlePost };
};

export default usePostMessage;
