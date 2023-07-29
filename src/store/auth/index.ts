import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { authPayloadType, authSiceType, authStateType } from './types';

const intialState: authStateType = {
  userName: '',
  isAuthenticated: false,
  isAuthLoading: false,
  error: null,
};

export const authSlice: authSiceType = createSlice({
  name: 'Authentication',
  initialState: intialState,
  reducers: {
    //login

    sendLoginRequest: state => {
      state.isAuthLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthLoading = false;
      state.userName = action.payload.userName;
    },
    loginFailed: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthLoading = false;
      state.error = action.payload.error;
    },
    //logout

    sendLogoutRequest: state => {
      state.isAuthLoading = true;
    },
    logoutSuccess: state => {
      state.isAuthLoading = false;
      state.userName = '';
    },
    logoutFailed: (state, action: PayloadAction<authPayloadType>) => {
      state.isAuthLoading = false;
      state.error = action.payload.error;
    },
  },
});

export const {
  sendLoginRequest,
  loginSuccess,
  loginFailed,
  sendLogoutRequest,
  logoutSuccess,
  logoutFailed,
} = authSlice.actions;
