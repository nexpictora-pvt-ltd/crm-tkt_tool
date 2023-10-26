/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServiceLogin } from '../../services/login.service'; // Import your login service function
import INITIAL_STATE, { LoginState, LoginResponse } from './login.state';

export const loginAsync = createAsyncThunk(
  'user/login',
  async (requestData: unknown): Promise<LoginResponse> => {
    const response = await getServiceLogin(requestData);
    return response as LoginResponse;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginResponse = action.payload;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});



export const loginReducer = loginSlice.reducer;
