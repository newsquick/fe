import { AxiosResponse } from 'axios';
import { AnswerData } from 'types/index';

import { createInstance } from './instance';

export interface MessageGetResponse {
  messageId: string;
  regData: string;
  resultData: string;
}

export const MessageApi = {
  GET: async <T>(id: string): Promise<T | null> => {
    const { data }: AxiosResponse<T> = await createInstance().get(`/api/message/${id}`);
    return data;
  },

  POST: async (answerData: AnswerData) => {
    const response = await createInstance().post('/api/message', answerData, {
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  },

  PUT: async (body: string) => {
    const response = await createInstance().put('/api/message', body);
    return response;
  },
};
