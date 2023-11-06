import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface LoginState {
  // selectedLogin: Login | null;
}

const initialState: LoginState = {
  // selectedLogin: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setSelectedLogin: (state) => {
      // state.selectedLogin = action.payload;
    },
  },
});

export const {} = loginSlice.actions;

export default loginSlice.reducer;
