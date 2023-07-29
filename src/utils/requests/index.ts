import { APIResponseType } from '../../services/types';

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export const isOk = (response: APIResponseType<any>) => {
  return response.status === 'ok';
};
