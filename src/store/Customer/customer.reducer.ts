import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import INITIAL_STATE from "./customer.state";
import { getViewBillInfo } from "../../services/billInfo.service";
// import https from "https";

export const getViewBillInfoAsync = createAsyncThunk(
  "viewBill/getViewBillInfo",
  async (requestData: any): Promise<any> => {
    return await getViewBillInfo(requestData);
  }
);

export const viewBillSlice = createSlice({
  name: "viewBill",
  initialState: INITIAL_STATE,
  reducers: {
    // setSelectedAccount(state, action) {
    //   state.selectedAccount = action.payload;
    // },
  },
  extraReducers(builder) {
    builder.addCase(getViewBillInfoAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getViewBillInfoAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.viewBillDetails = action.payload;
    });
    builder.addCase(getViewBillInfoAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const viewBillReducer = viewBillSlice.reducer;
