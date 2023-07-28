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
	isAllIngredients: boolean
	[itemId: number]: number
	itemAmount: number
	ingredientAmount: number
	additionalIngredients: { [itemId: number]: number }
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
	isAllIngredients: false,
	itemAmount: 1,
	ingredientAmount: 0,
	additionalIngredients: {},
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

		setAllIngredients: state => {
			state.isAllIngredients = true
		},

    initializeDefaultValues: state => {
      if (state.clickedMenuItem) {
        state.selectedSize = state.clickedMenuItem.sizes[0];
        state.selectedDough = state.clickedMenuItem.dough[1];
      }
    },

		// Counters Actions
		incrementItemAmount: (state, action: PayloadAction<number>) => {
			state.itemAmount += 1
    },

		decrementItemAmount: (state, action: PayloadAction<number>) => {
			if (state.itemAmount > 1) state.itemAmount -= 1
		},

		incrementIngredientAmount: (state, action: PayloadAction<{ itemId: number }>) => {
			const { itemId } = action.payload
			if (state.additionalIngredients[itemId]) {
				state.additionalIngredients[itemId] += 1
			} else {
				state.additionalIngredients[itemId] = 1
			}
		},

		decrementIngredientAmount: (state, action: PayloadAction<{ itemId: number }>) => {
			const { itemId } = action.payload
			if (state.additionalIngredients[itemId] && state.additionalIngredients[itemId] > 0) {
				state.additionalIngredients[itemId] -= 1
			}
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
	incrementItemAmount,
	decrementItemAmount,
	incrementIngredientAmount,
	decrementIngredientAmount,
  toggleTooltip,
	setAllIngredients,
} = menuSlice.actions;

export default menuSlice.reducer;


