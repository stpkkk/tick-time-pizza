import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HeaderState {
  isMenuOpen: boolean;
  isHoveringPhone: boolean;
  isHoveringCart: boolean;
}

const initialState: HeaderState = {
  isMenuOpen: false,
  isHoveringPhone: false,
  isHoveringCart: false,
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    resetMenu: () => initialState,
    toggleMenu: state => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setIsHoveringPhone: (state, action: PayloadAction<boolean>) => {
      state.isHoveringPhone = action.payload;
    },
    setIsHoveringCart: (state, action: PayloadAction<boolean>) => {
      state.isHoveringCart = action.payload;
    },
  },
});

export const { toggleMenu, resetMenu, setIsHoveringPhone, setIsHoveringCart } =
  headerSlice.actions;

export default headerSlice.reducer;
