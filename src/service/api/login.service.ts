import { callApiBaseAsync } from './_base';

export const loginApiService = async (data: unknown) => {
  const endpoint = process.env.REACT_APP_API_URL_RESERVE_FUNDS;

  return callApiBaseAsync(`${endpoint}`, {
    title: 'RESERVE FUNDS - requestReserveFundsTradeAsync',
    method: 'POST',
    headers: new Headers({
      device: '',
    }),
    body: data,
  });
};
