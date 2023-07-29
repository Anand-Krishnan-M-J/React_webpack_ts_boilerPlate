import { fork, all } from 'redux-saga/effects';
import { authWatcher } from './auth';

export function* rootSaga(): any {
  yield all([yield fork(authWatcher)]);
}
