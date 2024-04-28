import { useEffect, useState } from 'react';
import { MessageApi } from 'src/api/message';

// todo: 에러처리 로직 추가
const useGetMessage = (shareKey: string) => {
  const [data, setData] = useState({
    id: '',
    result: '',
    userName: '',
  });

  const getResult = async () => {
    const { messageId, resultData, userName } = await MessageApi.GET(shareKey);
    setData({ id: messageId, result: resultData, userName: userName });
  };

  useEffect(() => {
    getResult();
  }, [shareKey]);

  return { id: data.id, result: data.result, userName: data.userName };
};

export default useGetMessage;
