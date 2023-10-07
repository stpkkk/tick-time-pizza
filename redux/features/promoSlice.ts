import { Promo } from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PromoState {
  selectedPromo: Promo | null;
}

const initialState: PromoState = {
  selectedPromo: null,
};

const promoSlice = createSlice({
  name: 'promo',
  initialState,
  reducers: {
    setSelectedPromo: (state, action: PayloadAction<Promo>) => {
      state.selectedPromo = action.payload;
    },
  },
});

export const { setSelectedPromo } = promoSlice.actions;

export default promoSlice.reducer;
