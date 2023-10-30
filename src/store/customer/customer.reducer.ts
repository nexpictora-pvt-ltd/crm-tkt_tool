/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getServices } from '../../services/servicePreview.service'; // Import your service function
import INITIAL_STATE from './customer.state';
import { getCustomer } from '../../services/customer.service';


export const getCustomerAsync = createAsyncThunk(
  'users/all', 
  async (token: string): Promise<any> => {
    const response = await getCustomer(token);
    return response;
  }
);

export const CustomerSlice = createSlice({
  name: 'customers',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCustomerAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCustomerAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.Customers = action.payload;
    });
    builder.addCase(getCustomerAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const CustomerReducer =  CustomerSlice.reducer;