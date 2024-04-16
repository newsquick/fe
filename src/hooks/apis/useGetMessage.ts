import { useEffect, useState } from 'react';
import { MessageApi } from 'src/api/message';

// todo: 에러처리 로직 추가
const useGetMessage = (id: string) => {
  const [data, setData] = useState({
    result: '',
    userName: '',
  });

  const getResult = async () => {
    const { resultData, userName } = await MessageApi.GET(id);
    setData({ result: resultData, userName: userName });
  };

  useEffect(() => {
    getResult();
  }, [id]);

  return { result: data.result, userName: data.userName };
};

export default useGetMessage;
