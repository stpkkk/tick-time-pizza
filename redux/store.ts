import menuReducer from './features/menuSlice';
import profileReducer from './features/profileSlice';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: { menuReducer, profileReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
