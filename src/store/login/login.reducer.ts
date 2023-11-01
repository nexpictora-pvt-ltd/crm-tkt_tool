/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getServiceLogin } from '../../services/login.service';
import INITIAL_STATE, { LoginState, LoginResponse } from './login.state';
import Cookies from 'js-cookie';

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
  reducers: {
    // Create a logout action to clear cookies on logout
    logout: (state) => {
      state.isLoading = false;
      state.loginResponse = INITIAL_STATE.loginResponse;
      Cookies.remove('token');
      Cookies.remove('user_id');
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginResponse = action.payload;

      Cookies.set('token', action.payload.access_token);
      Cookies.set('user_id', action.payload.user.user_id.toString());
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const { logout } = loginSlice.actions;

export const loginReducer = loginSlice.reducer;
