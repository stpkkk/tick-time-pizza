import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "./features/headerSlice";
import menuReducer from "./features/menuSlice";

export const store = configureStore({
  reducer: { headerReducer, menuReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
