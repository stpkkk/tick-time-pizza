import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuItemTypes, Option } from "@/types";

export interface HeaderState {
  isModalOpen: boolean;
  isTooltipOpen: boolean;
  hoveredItemId: number | null;
  clickedMenuItem: MenuItemTypes | null;
  selectedSize: Option | null;
  selectedDough: Option | null;
	removedIngredients: Option[];
  selectedCategory: Option | null;
	counterValue: number;
	isAllIngredients: boolean
}

const initialState: HeaderState = {
  isModalOpen: false,
  isTooltipOpen: false,
  hoveredItemId: null,
  clickedMenuItem: null,
  selectedCategory: null,
  selectedSize: null,
  selectedDough: null,
	removedIngredients: [],
	counterValue: 1,
	isAllIngredients: false,
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
			state.isAllIngredients = false;
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

		setRemovedIngredients: (state, action: PayloadAction<Option[]>) => {
			state.removedIngredients = action.payload
		},

    initializeDefaultValues: state => {
      if (state.clickedMenuItem) {
        state.selectedSize = state.clickedMenuItem.sizes[0];
        state.selectedDough = state.clickedMenuItem.dough[1];
      }
    },

    increment: state => {
			state.counterValue += 1;
    },

    decrement: state => {
			if (state.counterValue > 1) state.counterValue -= 1;
    },

		setAllIngredients: state => {
			state.isAllIngredients = true
		},
  },
});

export const {
  toggleModal,
  setHoveredItemId,
  setClickedMenuItem,
  setSelectedSize,
  setSelectedDough,
	setRemovedIngredients,
  setSelectedCategory,
  initializeDefaultValues,
  increment,
  decrement,
  toggleTooltip,
	setAllIngredients,
} = menuSlice.actions;

export default menuSlice.reducer;
