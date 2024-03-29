import { ConfirmationResult } from 'firebase/auth';
import { pizzerias } from '@/constants';
import {
  ChangeMoneyFrom,
  DeliveryDate,
  ExtendedUser,
  IAddress,
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
  isModalRemoveAddressOpen: boolean;
  isModalOrderSuccessOpen: boolean;
  isModalTicketsInfo: boolean;
  orders: IOrder[];
  orderPrice: number;
  isModalAddAddressOpen: boolean;
  orderFormData: IOrder;
  addressToRemove: IAddress | null;
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
  isModalRemoveAddressOpen: false,
  isModalTicketsInfo: false,
  isModalOrderSuccessOpen: false,
  orders: [],
  orderPrice: 0,
  isModalAddAddressOpen: false,
  addressToRemove: null,
  orderFormData: {
    comment: '',
    ticketsToAdd: 0,
    ticketsToUse: 0,
    deliveryAddress: null,
    supplyMethod: Supply.DELIVERY,
    paymentMethod: PaymentMethods.CARD_UPON_RECEIPT,
    cashChange: ChangeMoneyFrom.WITHOUT_CHANGE,
    deliveryDate: DeliveryDate.SOON,
    deliveryTime: { hours: '', minutes: '' },
    pickPoint: pizzerias.at(0)?.address,
    price: 0,
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

    setCurrentUser: (state, action: PayloadAction<ExtendedUser | null>) => {
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

    setModalRemoveAddress: (state, action: PayloadAction<boolean>) => {
      state.isModalRemoveAddressOpen = action.payload;
    },

    setModalOrderSuccessOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalOrderSuccessOpen = action.payload;
    },

    setOrderFormData: (state, action: PayloadAction<IOrder>) => {
      state.orderFormData = action.payload;
    },

    setAddressToRemove: (state, action: PayloadAction<IAddress>) => {
      state.addressToRemove = action.payload;
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
  setModalRemoveAddress,
  setAddressToRemove,
  setModalOrderSuccessOpen,
} = profileSlice.actions;

export default profileSlice.reducer;
