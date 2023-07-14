import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HeaderState {
  isModalOpen: boolean;
  hoveredItemId: number | null;
}

const initialState: HeaderState = {
  isModalOpen: false,
  hoveredItemId: null,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    setHoveredItemId: (state, action: PayloadAction<number | null>) => {
      state.hoveredItemId = action.payload;
    },
  },
});

export const { toggleModal, setHoveredItemId } = menuSlice.actions;

export default menuSlice.reducer;
