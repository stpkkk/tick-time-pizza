import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface HeaderState {
  isNavOpen: boolean;
  isHoveringPhone: boolean;
  isHoveringCart: boolean;
}

const initialState: HeaderState = {
  isNavOpen: false,
  isHoveringPhone: false,
  isHoveringCart: false,
};

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },
    setIsHoveringPhone: (state, action: PayloadAction<boolean>) => {
      state.isHoveringPhone = action.payload;
    },
    setIsHoveringCart: (state, action: PayloadAction<boolean>) => {
      state.isHoveringCart = action.payload;
    },
  },
});

export const { toggleNav, setIsHoveringPhone, setIsHoveringCart } =
  headerSlice.actions;

export default headerSlice.reducer;
