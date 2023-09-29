import headerReducer from './features/headerSlice';
import menuReducer from './features/menuSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { headerReducer, menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
