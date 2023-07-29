import { takeEvery, put, call } from 'redux-saga/effects';
import {
  sendLoginRequest,
  loginFailed,
  loginSuccess,
  sendLogoutRequest,
  logoutSuccess,
} from '../store/auth';
import { loginRequest, logoutRequest } from '../services';
import { APIResponseType } from '../services/types';
import { loginCredsType } from '../store/auth/types';
import { isOk } from '../utils/requests';

interface LoginResponseDataType {
  userName: string;
}

function* sendLoginRequestSaga(action: {
  type: string;
  payload: loginCredsType;
}) {
  try {
    const response: APIResponseType<LoginResponseDataType> = yield call(
      loginRequest,
      action.payload.email,
      action.payload.password
    );
    if (isOk(response)) {
      yield put(loginSuccess({ userName: response.data.userName }));
    } else {
      yield put(loginFailed({ error: response.error }));
    }
  } catch (e) {
    yield put(loginFailed({ error: e }));
  }
}

function* sendLogoutRequestSaga() {
  try {
    const response: APIResponseType<LoginResponseDataType> = yield call(
      logoutRequest
    );
    if (isOk(response)) {
      yield put(logoutSuccess());
    } else {
      yield put(logoutSuccess());
    }
  } catch (e) {
    yield put(loginFailed({ error: e }));
  }
}

export function* authWatcher() {
  yield takeEvery(sendLoginRequest, sendLoginRequestSaga);
  yield takeEvery(sendLogoutRequest, sendLogoutRequestSaga);
}
