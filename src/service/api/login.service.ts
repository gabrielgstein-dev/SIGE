import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
import { callApiBaseAsync } from './_base';

const endpoint = '/login';

export const loginApiService = async (data: RequestAuthUser) => {
  return {
    success: true,
    data: {
      token: 'token',
    },
  };
  // return callApiBaseAsync(`${endpoint}`, {
  //   title: 'LOGIN API - loginApiService',
  //   method: 'POST',
  //   headers: new Headers(),
  //   body: data,
  // });
};
