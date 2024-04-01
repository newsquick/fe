import { AxiosResponse } from 'axios';
import { AnswerData } from 'types/index';

import { createInstance } from './instance';

export interface CommonResponse<T> {
  status: string;
  code: string;
  message: string;
  data: T;
}

export interface MessageGetResponse {
  messageId: string;
  regData: string;
  resultData: string;
}

export const MessageApi = {
  GET: async <T>(id: string): Promise<T | null> => {
    const { data }: AxiosResponse<CommonResponse<T>> = await createInstance().get(`/api/message/${id}`);
    return data.data;
  },

  POST: async (answerData: AnswerData): Promise<string> => {
    const { data } = await createInstance().post('/api/message', answerData, {
      headers: { 'Content-Type': 'application/json' },
    });
    const { messageId } = data.data;

    return messageId;
  },

  PUT: async (body: string) => {
    const response = await createInstance().put('/api/message', body);
    return response;
  },
};
