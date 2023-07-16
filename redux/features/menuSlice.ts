import { MenuItemTypes } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface HeaderState {
  isModalOpen: boolean;
  hoveredItemId: number | null;
  clickedMenuItem: MenuItemTypes | null;
}

const initialState: HeaderState = {
  isModalOpen: false,
  hoveredItemId: null,
  clickedMenuItem: null,
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
    setClickedMenuItem: (
      state,
      action: PayloadAction<MenuItemTypes | null>
    ) => {
      state.clickedMenuItem = action.payload;
    },
  },
});

export const { toggleModal, setHoveredItemId, setClickedMenuItem } =
  menuSlice.actions;

export default menuSlice.reducer;
