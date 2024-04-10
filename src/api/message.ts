import { MessageGetResponse, MessagePostResponse } from 'types/api';

import { axiosInstance } from './config';

export const MessageApi = {
  GET: async (id: string) => {
    const { data } = await axiosInstance.get<{ data: MessageGetResponse }>(`/api/message/${id}`);
    const { resultData } = data.data;

    return resultData;
  },

  POST: async (answerData: AnswerData): Promise<string> => {
    const { data } = await axiosInstance.post<{ data: MessagePostResponse }>('/api/message', answerData, {
      headers: { 'Content-Type': 'application/json' },
    });
    const { messageId } = data.data;

    return messageId;
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
