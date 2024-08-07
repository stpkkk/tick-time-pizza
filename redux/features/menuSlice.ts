import {
  CATEGORIES,
  Dough,
  IAdditionalIngredient,
  IOption,
  IProduct,
  Promo,
  Promos,
  Sizes,
} from '@/types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface MenuState {
  isNavOpen: boolean;
  isModalProductOpen: boolean;
  modalHeight: number;
  isTooltipOpen: boolean;
  selectedProduct: IProduct | null;
  selectedSize: IOption | null;
  selectedDough: IOption | null;
  removedIngredients: IOption[];
  selectedCategory: IOption;
  isAllIngredients: boolean;
  isDisabled: boolean;
  selectedIngredients: IAdditionalIngredient[];
  bookmarks: IProduct[];
  productQuantity: number;
  cartProducts: IProduct[];
  selectedPromo: Promo | null;
  selectedPromoCard: Promo | null;
  selectedPromoProducts: IProduct[];
  isPromoModalOpen: boolean;
  totalPromoProducts: number;
  promoDiscount: string | number;
  isProductsListModalOpen: boolean;
  isModalAttentionOpen: boolean;
}

const initialState: MenuState = {
  isNavOpen: false,
  isModalProductOpen: false,
  modalHeight: 0,
  isTooltipOpen: false,
  selectedProduct: null,
  selectedCategory: {
    value: CATEGORIES.ALL,
  },
  selectedSize: null,
  selectedDough: null,
  isAllIngredients: false,
  isDisabled: false,
  removedIngredients: [],
  selectedIngredients: [],
  bookmarks: [],
  productQuantity: 1,
  cartProducts: [],
  selectedPromo: null,
  selectedPromoCard: null,
  selectedPromoProducts: [],
  isPromoModalOpen: false,
  totalPromoProducts: 0,
  promoDiscount: 0,
  isProductsListModalOpen: false,
  isModalAttentionOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    // Header
    toggleNav: (state) => {
      state.isNavOpen = !state.isNavOpen;
    },

    //Menu
    setSelectedProduct: (state, action: PayloadAction<IProduct | null>) => {
      state.selectedProduct = action.payload;
    },

    setSelectedCategory: (state, action: PayloadAction<IOption>) => {
      state.selectedCategory = action.payload;
    },

    // Modal
    setModalProductOpen: (state, action: PayloadAction<boolean>) => {
      state.isModalProductOpen = action.payload;
    },

    setModalHeight: (state, action: PayloadAction<number>) => {
      state.modalHeight = action.payload;
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
      action: PayloadAction<IAdditionalIngredient>,
    ) => {
      const ingredient = action.payload;
      const existingIngredient = state.selectedIngredients.find(
        (item) => item.id === ingredient.id,
      );

      if (existingIngredient) {
        existingIngredient.quantity = (existingIngredient.quantity || 0) + 1;
      } else {
        state.selectedIngredients.push({ ...ingredient, quantity: 1 });
      }
    },

    decrementIngredientQuantity: (
      state,
      action: PayloadAction<IAdditionalIngredient>,
    ) => {
      const ingredient = action.payload;
      const existingIngredient = state.selectedIngredients.find(
        (item) => item.id === ingredient.id,
      );

      if (
        existingIngredient &&
        existingIngredient.quantity &&
        existingIngredient.quantity > 0
      ) {
        existingIngredient.quantity -= 1;
        if (existingIngredient.quantity === 0) {
          state.selectedIngredients = state.selectedIngredients.filter(
            (item) => item.id !== ingredient.id,
          );
        }
      }
    },

    addToCart: (state, action: PayloadAction<IProduct[]>) => {
      state.cartProducts = action.payload;
    },

    //Promo Actions
    setIsPromoModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPromoModalOpen = action.payload;
    },

    setSelectedPromoCard: (state, action: PayloadAction<Promo | null>) => {
      state.selectedPromoCard = action.payload;
    },

    setSelectedPromo: (state, action: PayloadAction<Promo | null>) => {
      state.selectedPromo = action.payload;
      state.isPromoModalOpen = false;
    },

    addToPromoProducts: (state, action: PayloadAction<any>) => {
      state.selectedPromoProducts = action.payload;
    },

    resetPromoProducts: (state) => {
      state.selectedPromoProducts = [];
    },

    removeFromPromoProducts: (state, action: PayloadAction<string>) => {
      const productUUID = action.payload;
      state.selectedPromoProducts = state.selectedPromoProducts.filter(
        (item) => item.uuid !== productUUID,
      );
    },

    setTotalPromoProductsQuantity: (state, action: PayloadAction<number>) => {
      state.totalPromoProducts = action.payload;
    },

    incrementPromoProductQuantity: (
      state,
      action: PayloadAction<{ product: IProduct }>,
    ) => {
      const { product } = action.payload;
      const existingProduct = state.selectedPromoProducts.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        existingProduct.productQuantity =
          (existingProduct.productQuantity || 0) + 1;
      } else {
        state.selectedPromoProducts.push({ ...product, productQuantity: 1 });
      }
    },

    decrementPromoProductQuantity: (
      state,
      action: PayloadAction<{ product: IProduct }>,
    ) => {
      const { product } = action.payload;
      const existingIngredient = state.selectedPromoProducts.find(
        (item) => item.id === product.id,
      );

      if (
        existingIngredient &&
        existingIngredient.productQuantity &&
        existingIngredient.productQuantity > 1
      ) {
        existingIngredient.productQuantity -= 1;
      }
    },

    setPromoDiscount: (state, action: PayloadAction<string | number>) => {
      state.promoDiscount = action.payload;
    },

    setIsProductsListModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isProductsListModalOpen = action.payload;
    },

    addToBookmarks: (state, action: PayloadAction<IProduct[]>) => {
      state.bookmarks = action.payload;
    },

    setModalAttention: (state, action: PayloadAction<boolean>) => {
      state.isModalAttentionOpen = action.payload;
    },

    //ModalProduct Initial Values
    initializeDefaultValues: (state) => {
      const { selectedProduct, selectedPromo } = state;

      if (selectedProduct) {
        state.isAllIngredients = false;
        state.removedIngredients = [];
        state.selectedIngredients = [];
        state.productQuantity = 1;

        if (selectedProduct.group === 'pizzas') {
          if (
            selectedPromo?.title === Promos.FOUR_BIG_PIZZAS ||
            selectedPromo?.title === Promos.PEPPERONI
          ) {
            state.selectedSize =
              selectedProduct.sizes?.find((size) => size.value === Sizes.BIG) ||
              null;
          } else if (selectedPromo?.title === Promos.DINNER_PIZZA) {
            state.selectedSize =
              selectedProduct.sizes?.find(
                (size) => size.value === Sizes.MEDIUM,
              ) || null;
          } else {
            state.selectedSize =
              selectedProduct.sizes?.find(
                (size) => size.value === Sizes.SMALL,
              ) || null;
          }

          if (selectedProduct.dough) {
            if (selectedPromo?.title === Promos.FOUR_BIG_PIZZAS) {
              state.selectedDough =
                selectedProduct.dough.find((d) => d.value === Dough.THIN) ||
                null;
            } else {
              state.selectedDough =
                selectedProduct.dough.find(
                  (d) => d.value === Dough.TRADITIONAL,
                ) || null;
            }
          }
        } else {
          state.selectedSize = null;
          state.selectedDough = null;
        }
      }
    },
  },
});

export const {
  toggleNav,
  setModalProductOpen,
  setModalHeight,
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
  decrementProductQuantity,
  incrementProductQuantity,
  addToCart,
  setSelectedPromo,
  addToPromoProducts,
  removeFromPromoProducts,
  incrementPromoProductQuantity,
  decrementPromoProductQuantity,
  setIsPromoModalOpen,
  setTotalPromoProductsQuantity,
  resetPromoProducts,
  setPromoDiscount,
  setIsProductsListModalOpen,
  setModalAttention,
  setSelectedPromoCard,
} = menuSlice.actions;

export default menuSlice.reducer;
