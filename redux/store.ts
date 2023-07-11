import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";

export const store = configureStore({
  reducer: { headerReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
