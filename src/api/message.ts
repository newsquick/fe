import { MessageGetResponse, MessagePostResponse } from 'types/api';

import { axiosInstance } from './config';

export const MessageApi = {
  GET: async (shareKey: string) => {
    const { data } = await axiosInstance.get<{ data: MessageGetResponse }>(
      `/api/message?shareKey=${shareKey}`,
    );
    const { messageId, resultData, userName } = data.data;

    return { messageId, resultData, userName };
  },

  POST: async (answerData: AnswerData): Promise<string> => {
    const { data } = await axiosInstance.post<{ data: MessagePostResponse }>('/api/message', answerData, {
      headers: { 'Content-Type': 'application/json' },
    });
    const { shareKey } = data.data;

    return shareKey;
  },

  PUT: async (id: string, updateAnswer: string) => {
    const body = {
      messageId: id,
      resultUpdateData: updateAnswer,
    };
    const { data: response } = await axiosInstance.put('/api/message', body);

    return response;
  },
};
