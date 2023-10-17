import {
  IProduct,
  IOption,
  IAdditionalIngredient,
  Promos,
  Promo,
  Sizes,
  Dough,
} from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MenuState {
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
  bookmarks: IProduct[];
  productQuantity: number;
  cartProducts: IProduct[];
  selectedPromo: Promo | null;
  promoProductsList: IProduct[];
}

const initialState: MenuState = {
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
  bookmarks: [],
  productQuantity: 1,
  cartProducts: [],
  selectedPromo: null,
  promoProductsList: [],
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    //Menu
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

    incrementProductQuantity: (state) => {
      state.productQuantity++;
    },

    decrementProductQuantity: (state) => {
      state.productQuantity--;
    },

    incrementIngredientQuantity: (
      state,
      action: PayloadAction<{ ingredient: IAdditionalIngredient }>,
    ) => {
      const { ingredient } = action.payload;
      const existingIngredient = state.additionalIngredients.find(
        (item) => item.id === ingredient.id,
      );

      if (existingIngredient) {
        existingIngredient.quantity = (existingIngredient.quantity || 0) + 1;
      } else {
        state.additionalIngredients.push({ ...ingredient, quantity: 1 });
      }
    },

    decrementIngredientQuantity: (
      state,
      action: PayloadAction<{ ingredient: IAdditionalIngredient }>,
    ) => {
      const { ingredient } = action.payload;
      const existingIngredient = state.additionalIngredients.find(
        (item) => item.id === ingredient.id,
      );

      if (
        existingIngredient &&
        existingIngredient.quantity &&
        existingIngredient.quantity > 0
      ) {
        existingIngredient.quantity -= 1;
        if (existingIngredient.quantity === 0) {
          state.additionalIngredients = state.additionalIngredients.filter(
            (item) => item.id !== ingredient.id,
          );
        }
      }
    },

    addToCart: (state, action: PayloadAction<IProduct[]>) => {
      state.cartProducts = action.payload;
    },

    setSelectedPromo: (state, action: PayloadAction<Promo | null>) => {
      state.selectedPromo = action.payload;
    },

    addToPromoProductsList: (state, action: PayloadAction<IProduct>) => {
      if (state.selectedPromo) {
        const product = action.payload;
        state.promoProductsList.push(product);
      }
    },

    //Bookmarks Actions
    addToBookmarks: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      if (!state.bookmarks?.some((item) => item.id === product?.id)) {
        state.bookmarks?.push(product);
      }
    },

    removeFromBookmarks: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.bookmarks = state.bookmarks.filter((item) => item.id !== productId);
    },

    //Initial Values
    initializeDefaultValues: (state) => {
      if (state.selectedProduct) {
        state.isAllIngredients = false;
        state.removedIngredients = [];
        state.additionalIngredients = [];
        state.productQuantity = 1;
      }

      if (
        state.selectedProduct &&
        state.selectedProduct.sizes &&
        state.selectedProduct.group === 'pizzas'
      ) {
        if (state.selectedPromo?.title === Promos.FOUR_BIG_PIZZAS) {
          state.selectedSize =
            state.selectedProduct?.sizes.find(
              (size) => size.name === Sizes.BIG,
            ) || null;
        } else {
          state.selectedSize =
            state.selectedProduct?.sizes.find(
              (size) => size.name === Sizes.SMALL,
            ) || null;
        }
      } else {
        state.selectedSize = null;
      }

      if (
        state.selectedProduct &&
        state.selectedProduct.dough &&
        state.selectedProduct.group === 'pizzas'
      ) {
        if (state.selectedPromo?.title === Promos.FOUR_BIG_PIZZAS) {
          state.selectedDough =
            state.selectedProduct.dough.find((d) => d.name === Dough.THIN) ||
            null;
        } else {
          state.selectedDough =
            state.selectedProduct.dough.find(
              (d) => d.name === Dough.TRADITIONAL,
            ) || null;
        }
      } else {
        state.selectedDough = null;
      }
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
  addToBookmarks,
  removeFromBookmarks,
  decrementProductQuantity,
  incrementProductQuantity,
  addToCart,
  setSelectedPromo,
  addToPromoProductsList,
} = menuSlice.actions;

export default menuSlice.reducer;
