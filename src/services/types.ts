export interface APIResponseType<T> {
  status: 'ok' | 'nok';
  data: T;
  error: string;
}
