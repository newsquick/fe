import { AnswerData } from 'types/index';

import { instance } from './instance';

export const MessageApi = {
  GET: async (id: string): Promise<string> => {
    const { data } = await instance.get(`/api/message/${id}`);
    const { resultData } = data.data;

    return resultData;
  },

  POST: async (answerData: AnswerData): Promise<string> => {
    const { data } = await instance.post('/api/message', answerData, {
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
    const { data: response } = await instance.put('/api/message', body);

    return response;
  },
};
