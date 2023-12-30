import { ConfirmationResult } from 'firebase/auth';
import { pizzerias } from '@/constants';
import {
  ChangeMoneyFrom,
  DeliveryTime,
  ExtendedUser,
  IOrder,
  PaymentMethods,
  Supply,
} from '@/types';
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
  isModalTicketsInfo: boolean;
  orders: IOrder[];
  orderPrice: number;
  isModalAddAddressOpen: boolean;
  orderFormData: IOrder;
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
  isModalTicketsInfo: false,
  orders: [],
  orderPrice: 0,
  isModalAddAddressOpen: false,
  orderFormData: {
    comment: '',
    tickets: 0,
    deliveryAddress: '',
    supplyMethod: Supply.DELIVERY,
    paymentMethod: PaymentMethods.CARD_UPON_RECEIPT,
    cashChange: ChangeMoneyFrom.WITHOUT_CHANGE,
    deliveryTime: DeliveryTime.SOON,
    pickPoint: pizzerias.at(0)?.address,
  },
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

    setModalTicketsInfo: (state, action: PayloadAction<boolean>) => {
      state.isModalTicketsInfo = action.payload;
    },

    setOrderPrice: (state, action: PayloadAction<number>) => {
      state.orderPrice = action.payload;
    },

    addToOrders: (state, action: PayloadAction<IOrder[]>) => {
      state.orders = action.payload;
    },

    setModalAddAddress: (state, action: PayloadAction<boolean>) => {
      state.isModalAddAddressOpen = action.payload;
    },

    setOrderFormData: (state, action: PayloadAction<IOrder>) => {
      state.orderFormData = action.payload;
    },

    resetOrderFormData: () => {
      setOrderFormData(initialState.orderFormData);
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
  setModalTicketsInfo,
  setOrderPrice,
  setModalAddAddress,
  setOrderFormData,
  resetOrderFormData,
} = profileSlice.actions;

export default profileSlice.reducer;
