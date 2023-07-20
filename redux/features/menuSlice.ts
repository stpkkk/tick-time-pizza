import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuItemTypes, Option } from "@/types";

export interface HeaderState {
  isModalOpen: boolean;
  isTooltipOpen: boolean;
  hoveredItemId: number | null;
  clickedMenuItem: MenuItemTypes | null;
  selectedSize: Option | null;
  selectedDough: Option | null;
  selectedCategory: Option | null;
  value: number;
}

const initialState: HeaderState = {
  isModalOpen: false,
  isTooltipOpen: false,
  hoveredItemId: null,
  clickedMenuItem: null,
  selectedCategory: null,
  selectedSize: null,
  selectedDough: null,
  value: 1,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setHoveredItemId: (state, action: PayloadAction<number | null>) => {
      state.hoveredItemId = action.payload;
    },
    setClickedMenuItem: (
      state,
      action: PayloadAction<MenuItemTypes | null>
    ) => {
      state.clickedMenuItem = action.payload;
    },
    setSelectedCategory: (state, action: PayloadAction<Option | null>) => {
      state.selectedCategory = action.payload;
    },

    // Modal
    toggleModal: state => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleTooltip: state => {
      state.isTooltipOpen = !state.isTooltipOpen;
    },
    setSelectedSize: (state, action: PayloadAction<Option | null>) => {
      state.selectedSize = action.payload;
    },
    setSelectedDough: (state, action: PayloadAction<Option | null>) => {
      state.selectedDough = action.payload;
    },
    initializeDefaultValues: state => {
      if (state.clickedMenuItem) {
        state.selectedSize = state.clickedMenuItem.sizes[0];
        state.selectedDough = state.clickedMenuItem.dough[1];
      }
    },
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      if (state.value > 1) state.value -= 1;
    },
  },
});

export const {
  toggleModal,
  setHoveredItemId,
  setClickedMenuItem,
  setSelectedSize,
  setSelectedDough,
  setSelectedCategory,
  initializeDefaultValues,
  increment,
  decrement,
  toggleTooltip,
} = menuSlice.actions;

export default menuSlice.reducer;
