import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  userEmail: string;
  userAccountId: string;
}

const initialState: UserState = {
  userEmail: '',
  userAccountId: '',

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserEmail: (state, action: PayloadAction<string>) => {
      state.userEmail = action.payload;
    },
    setuserAccountId: (state, action: PayloadAction<string>) => {
      state.userAccountId = action.payload;
    },
  },
});

export const { setUserEmail, setuserAccountId } = userSlice.actions;

export default userSlice.reducer;
