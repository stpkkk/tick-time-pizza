import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { MenuItemTypes, Option, additionalIngredientsTypes } from "@/types";

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
	isDisabled: boolean;
	itemAmount: number
	additionalIngredients: additionalIngredientsTypes[]
}

const initialState: HeaderState = {
  isModalOpen: false,
  isTooltipOpen: false,
  hoveredItemId: null,
  clickedMenuItem: null,
  selectedCategory: null,
  selectedSize: null,
	selectedDough: null,
	isAllIngredients: false,
	isDisabled: false,
	itemAmount: 1,
	removedIngredients: [],
	additionalIngredients: [],
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

		setRemovedIngredients: (state, action: PayloadAction<Option[]>) => {
			state.removedIngredients = action.payload
		},

		setAllIngredients: state => {
			state.isAllIngredients = true
		},

		initializeDefaultValues: state => {
			if (state.clickedMenuItem) {
				state.selectedSize = state.clickedMenuItem.sizes[0]
				state.selectedDough = state.clickedMenuItem.dough[1]
				state.isAllIngredients = false
				state.removedIngredients = []
				state.additionalIngredients = []
				state.itemAmount = 1
			}

			if (state.selectedSize?.name === null) {
				state.selectedSize = state.clickedMenuItem?.sizes[1] || null
				state.selectedDough = state.clickedMenuItem?.dough[0] || null
			}
		},

		// Counters Actions
		incrementItemAmount: (state, action: PayloadAction<number>) => {
			state.itemAmount++
    },

		decrementItemAmount: (state, action: PayloadAction<number>) => {
			if (state.itemAmount > 1) state.itemAmount--
		},

		incrementIngredientAmount: (
			state,
			action: PayloadAction<{ ingredient: additionalIngredientsTypes }>
		) => {
			const { ingredient } = action.payload
			const existingIngredient = state.additionalIngredients.find(
				(item) => item.id === ingredient.id
			);

			if (existingIngredient) {
				existingIngredient.amount = (existingIngredient.amount || 0) + 1
			} else {
				state.additionalIngredients.push({ ...ingredient, amount: 1 })
			}
		},

		decrementIngredientAmount: (
			state,
			action: PayloadAction<{ ingredient: additionalIngredientsTypes }>
		) => {
			const { ingredient } = action.payload
			const existingIngredient = state.additionalIngredients.find(
				(item) => item.id === ingredient.id
			);

			if (existingIngredient && existingIngredient.amount && existingIngredient.amount > 0) {
				existingIngredient.amount -= 1
				if (existingIngredient.amount === 0) {
					state.additionalIngredients = state.additionalIngredients.filter(
						(item) => item.id !== ingredient.id
					)
				}
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

