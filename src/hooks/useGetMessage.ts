import { useEffect, useState } from 'react';
import { MessageApi } from 'src/api/message';

const useGetMessage = (id: string) => {
  const [result, setResult] = useState('');

  const getResult = async () => {
    const resultData = await MessageApi.GET(id);
    setResult(resultData);
  };

  useEffect(() => {
    getResult();
  }, [id]);

  return { result };
};

export default useGetMessage;
