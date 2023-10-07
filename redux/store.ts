import headerReducer from './features/headerSlice';
import menuReducer from './features/menuSlice';
import promoReducer from './features/promoSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { headerReducer, menuReducer, promoReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
