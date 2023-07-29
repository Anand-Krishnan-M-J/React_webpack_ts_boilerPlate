import { Slice, PayloadAction } from '@reduxjs/toolkit';

export interface loginCredsType {
  email: string;
  password: string;
}

export interface authStateType {
  userName: string;
  isAuthenticated: boolean;
  isAuthLoading: boolean;
  error: any;
}

export interface authPayloadType {
  userName?: string;
  error?: string;
}

export type authSiceType = Slice<
  authStateType,
  {
    sendLoginRequest: (
      state: authStateType,
      action?: PayloadAction<loginCredsType>
    ) => void;
    loginSuccess: (
      state: authStateType,
      action: PayloadAction<authPayloadType>
    ) => void;
    loginFailed: (
      state: authStateType,
      action: PayloadAction<authPayloadType>
    ) => void;

    sendLogoutRequest: (state: authStateType) => void;
    logoutSuccess: (state: authStateType) => void;
    logoutFailed: (
      state: authStateType,
      action: PayloadAction<authPayloadType>
    ) => void;
  }
>;
