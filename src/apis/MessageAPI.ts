import { instance } from './instance';

export const MessageApi = {
  GET: async (id: number) => {
    const response = await instance.get(`/api/message/${id}`);
    return response;
  },
  POST: async (body: string) => {
    const response = await instance.post('/api/message', body);
    return response;
  },
  PUT: async (body: string) => {
    const response = await instance.put('/api/message', body);
    return response;
  },
};
