import { ConfirmationResult } from 'firebase/auth';
import { ExtendedUser, IOrder, IProduct } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface ProfileState {
  phone: string;
  otp: string;
  isPhoneValid: boolean;
  isOTPSent: boolean;
  loading: boolean;
  confirmationResult: null | ConfirmationResult;
  user: null | ExtendedUser;
  isOtpValid: boolean;
  isModalEditProfileOpen: boolean;
  orders: IOrder[];
}

const initialState: ProfileState = {
  phone: '',
  otp: '',
  isOTPSent: false,
  confirmationResult: null,
  isPhoneValid: false,
  loading: false,
  user: null,
  isOtpValid: true,
  isModalEditProfileOpen: false,
  orders: [],
};

const profileSlice = createSlice({
  name: 'profile',
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
    setCurrentUser: (state, action: PayloadAction<null | ExtendedUser>) => {
      state.user = action.payload;
    },
    setOtpValid: (state, action: PayloadAction<boolean>) => {
      state.isOtpValid = action.payload;
    },
    setModalEditProfile: (state, action: PayloadAction<boolean>) => {
      state.isModalEditProfileOpen = action.payload;
    },
    addToOrders: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
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
  setModalEditProfile,
  addToOrders,
} = profileSlice.actions;

export default profileSlice.reducer;
