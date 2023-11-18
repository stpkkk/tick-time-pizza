import { ConfirmationResult, User } from 'firebase/auth';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  phone: string;
  otp: string;
  isPhoneValid: boolean;
  isOTPSent: boolean;
  loading: boolean;
  confirmationResult: null | ConfirmationResult;
  user: null | User;
  isOtpValid: boolean;
  users: User[];
}

const initialState: LoginState = {
  phone: '',
  otp: '',
  isOTPSent: false,
  confirmationResult: null,
  isPhoneValid: false,
  loading: false,
  user: null,
  isOtpValid: true,
  users: [],
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setOtpSent: (state, action: PayloadAction<boolean>) => {
      state.isOTPSent = action.payload;
    },
    setConfirmationResult: (
      state,
      action: PayloadAction<null | ConfirmationResult>,
    ) => {
      state.confirmationResult = action.payload;
    },
    setPhoneValid: (state, action: PayloadAction<boolean>) => {
      state.isPhoneValid = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload;
    },
    setOtpValid: (state, action: PayloadAction<boolean>) => {
      state.isOtpValid = action.payload;
    },
    addToUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
});

export const {
  setPhone,
  setOtpSent,
  setConfirmationResult,
  setPhoneValid,
  setOtp,
  setLoading,
  setCurrentUser,
  setOtpValid,
  addToUsers,
} = loginSlice.actions;

export default loginSlice.reducer;
