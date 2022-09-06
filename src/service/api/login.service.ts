import { RequestAuthUser } from '~/models/datacore/RequestAuthUser';
// const endpoint = '/login';

export const loginApiService = async (_data: RequestAuthUser) => {
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
