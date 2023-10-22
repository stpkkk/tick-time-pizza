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
  isPromoModalOpen: boolean;
  totalPromoProductsQuantity: number;
  promoDiscount: string | number;
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
  isPromoModalOpen: false,
  totalPromoProductsQuantity: 0,
  promoDiscount: 0,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    //Menu
    setHoveredItemId: (state, action: PayloadAction<number | null>) => {
      state.hoveredItemId = action.payload;
    },

    setSelectedProduct: (state, action: PayloadAction<IProduct | null>) => {
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

    //Promo Actions
    setIsPromoModalOpen: (state, action: PayloadAction<boolean>) => {
      state.isPromoModalOpen = action.payload;
    },

    setSelectedPromo: (state, action: PayloadAction<Promo | null>) => {
      state.selectedPromo = action.payload;
      state.isPromoModalOpen = false;
    },

    addToPromoProductsList: (state, action: PayloadAction<any>) => {
      state.promoProductsList = action.payload;
    },

    resetPromoProductsList: (state) => {
      state.promoProductsList = [];
    },

    removePromoProductsList: (state, action: PayloadAction<string>) => {
      const productUUID = action.payload;
      state.promoProductsList = state.promoProductsList.filter(
        (item) => item.uuid !== productUUID,
      );
    },

    setTotalPromoProductsQuantity: (state, action: PayloadAction<number>) => {
      state.totalPromoProductsQuantity = action.payload;
    },

    incrementPromoProductQuantity: (
      state,
      action: PayloadAction<{ product: IProduct }>,
    ) => {
      const { product } = action.payload;
      const existingProduct = state.promoProductsList.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        existingProduct.productQuantity =
          (existingProduct.productQuantity || 0) + 1;
      } else {
        state.promoProductsList.push({ ...product, productQuantity: 1 });
      }
    },

    decrementPromoProductQuantity: (
      state,
      action: PayloadAction<{ product: IProduct }>,
    ) => {
      const { product } = action.payload;
      const existingIngredient = state.promoProductsList.find(
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
      const { selectedProduct, selectedPromo } = state;

      if (selectedProduct) {
        state.isAllIngredients = false;
        state.removedIngredients = [];
        state.additionalIngredients = [];
        state.productQuantity = 1;

        if (selectedProduct.group === 'pizzas') {
          if (
            selectedPromo?.title === Promos.FOUR_BIG_PIZZAS ||
            selectedPromo?.title === Promos.PEPPERONI
          ) {
            state.selectedSize =
              selectedProduct.sizes?.find((size) => size.name === Sizes.BIG) ||
              null;
          } else if (selectedPromo?.title === Promos.DINNER_PIZZA) {
            state.selectedSize =
              selectedProduct.sizes?.find(
                (size) => size.name === Sizes.MEDIUM,
              ) || null;
          } else {
            state.selectedSize =
              selectedProduct.sizes?.find(
                (size) => size.name === Sizes.SMALL,
              ) || null;
          }

          if (selectedProduct.dough) {
            if (selectedPromo?.title === Promos.FOUR_BIG_PIZZAS) {
              state.selectedDough =
                selectedProduct.dough.find((d) => d.name === Dough.THIN) ||
                null;
            } else {
              state.selectedDough =
                selectedProduct.dough.find(
                  (d) => d.name === Dough.TRADITIONAL,
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
  removePromoProductsList,
  incrementPromoProductQuantity,
  decrementPromoProductQuantity,
  setIsPromoModalOpen,
  setTotalPromoProductsQuantity,
  resetPromoProductsList,
  setPromoDiscount,
} = menuSlice.actions;

export default menuSlice.reducer;
