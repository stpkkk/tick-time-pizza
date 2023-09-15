import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IProduct, IOption, IAdditionalIngredient } from '@/types';

export interface HeaderState {
  isModalOpen: boolean;
  isTooltipOpen: boolean;
  hoveredItemId: number | null;
  selectedProduct: IProduct | null;
  selectedSize: IOption | null;
  selectedDough: IOption | null;
  removedIngredients: IOption[];
  selectedCategory: IOption | null;
  isAllIngredients: boolean;
  isDisabled: boolean;
  additionalIngredients: IAdditionalIngredient[];
  favoriteProducts: IProduct[];
  productQuantity: number;
  cartProducts: IProduct[];
}

const initialState: HeaderState = {
  isModalOpen: false,
  isTooltipOpen: false,
  hoveredItemId: null,
  selectedProduct: null,
  selectedCategory: null,
  selectedSize: null,
  selectedDough: null,
  isAllIngredients: false,
  isDisabled: false,
  removedIngredients: [],
  additionalIngredients: [],
  favoriteProducts: [],
  productQuantity: 1,
  cartProducts: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setHoveredItemId: (state, action: PayloadAction<number | null>) => {
      state.hoveredItemId = action.payload;
    },

    setSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
    },

    setSelectedCategory: (state, action: PayloadAction<IOption | null>) => {
      state.selectedCategory = action.payload;
    },

    // Modal
    toggleModal: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload;
    },

    toggleTooltip: (state) => {
      state.isTooltipOpen = !state.isTooltipOpen;
    },

    setSelectedSize: (state, action: PayloadAction<IOption>) => {
      state.selectedSize = action.payload;
    },

    setSelectedDough: (state, action: PayloadAction<IOption>) => {
      state.selectedDough = action.payload;
    },

    setRemovedIngredients: (state, action: PayloadAction<IOption[]>) => {
      state.removedIngredients = action.payload;
    },

    setAllIngredients: (state) => {
      state.isAllIngredients = true;
    },

    incrementproductQuantity: (state) => {
      state.productQuantity++;
    },

    decrementproductQuantity: (state) => {
      state.productQuantity--;
    },

    initializeDefaultValues: (state) => {
      if (state.selectedProduct) {
        state.selectedSize = state.selectedProduct.sizes[0];
        state.selectedDough = state.selectedProduct.dough[1];
        state.isAllIngredients = false;
        state.removedIngredients = [];
        state.additionalIngredients = [];
        state.productQuantity = 1;
      }

      if (state.selectedSize?.name === null) {
        state.selectedSize = state.selectedProduct?.sizes[1] || null;
        state.selectedDough = state.selectedProduct?.dough[0] || null;
      }
    },

    //Favorite Actions
    addToFavorites: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      if (!state.favoriteProducts?.some((item) => item.id === product?.id)) {
        state.favoriteProducts?.push(product);
      }
    },

    removeFromFavorites: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.favoriteProducts = state.favoriteProducts.filter(
        (item) => item.id !== productId
      );
    },

    //Ingredient Quantity
    incrementIngredientQuantity: (
      state,
      action: PayloadAction<{ ingredient: IAdditionalIngredient }>
    ) => {
      const { ingredient } = action.payload;
      const existingIngredient = state.additionalIngredients.find(
        (item) => item.id === ingredient.id
      );

      if (existingIngredient) {
        existingIngredient.quantity = (existingIngredient.quantity || 0) + 1;
      } else {
        state.additionalIngredients.push({ ...ingredient, quantity: 1 });
      }
    },

    decrementIngredientQuantity: (
      state,
      action: PayloadAction<{ ingredient: IAdditionalIngredient }>
    ) => {
      const { ingredient } = action.payload;
      const existingIngredient = state.additionalIngredients.find(
        (item) => item.id === ingredient.id
      );

      if (
        existingIngredient &&
        existingIngredient.quantity &&
        existingIngredient.quantity > 0
      ) {
        existingIngredient.quantity -= 1;
        if (existingIngredient.quantity === 0) {
          state.additionalIngredients = state.additionalIngredients.filter(
            (item) => item.id !== ingredient.id
          );
        }
      }
    },

    addToCart: (state, action: PayloadAction<IProduct[]>) => {
      state.cartProducts = action.payload;
    },
  },
});

export const {
  toggleModal,
  setHoveredItemId,
  setSelectedProduct,
  setSelectedSize,
  setSelectedDough,
  setRemovedIngredients,
  setSelectedCategory,
  initializeDefaultValues,
  incrementIngredientQuantity,
  decrementIngredientQuantity,
  toggleTooltip,
  setAllIngredients,
  addToFavorites,
  removeFromFavorites,
  decrementproductQuantity,
  incrementproductQuantity,
  addToCart,
} = menuSlice.actions;

export default menuSlice.reducer;
