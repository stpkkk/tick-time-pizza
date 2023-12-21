import { ConfirmationResult } from 'firebase/auth';
import { pizzerias } from '@/constants';
import {
  ChangeMoneyFrom,
  DeliveryTime,
  ExtendedUser,
  IOrder,
  PaymentMethods,
  SupplyType,
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
  paymentMethod: string;
  cashChange: string;
  deliveryTime: string;
  pickPoint?: string;
  supplyType?: string;
  isSignIn?: boolean;
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
  paymentMethod: PaymentMethods.CARD_UPON_RECEIPT,
  cashChange: ChangeMoneyFrom.WITHOUTH_CHANGE,
  deliveryTime: DeliveryTime.SOON,
  pickPoint: pizzerias.at(0)?.address,
  supplyType: SupplyType.DELIVERY,
  isSignIn: false,
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

    //Order Form
    setPaymentMethod: (state, action: PayloadAction<string>) => {
      state.paymentMethod = action.payload;
    },

    setCashChange: (state, action: PayloadAction<string>) => {
      state.cashChange = action.payload;
    },

    setDeliveryTime: (state, action: PayloadAction<string>) => {
      state.deliveryTime = action.payload;
    },

    setPickPoint: (state, action: PayloadAction<string>) => {
      state.pickPoint = action.payload;
    },

    setSupplyType: (state, action: PayloadAction<string>) => {
      state.supplyType = action.payload;
    },

    setSignIn: (state, action: PayloadAction<boolean>) => {
      state.isSignIn = action.payload;
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
  setPaymentMethod,
  setCashChange,
  setDeliveryTime,
  setPickPoint,
  setSupplyType,
  setSignIn,
} = profileSlice.actions;

export default profileSlice.reducer;
