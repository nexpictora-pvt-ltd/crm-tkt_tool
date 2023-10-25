import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import { getServices } from '../../services/servicePreview.service'; // Import your service function
import INITIAL_STATE, { Service } from './servicePreview.state';
import { getServicePreview } from '../../services/servicePreview.service';


export const getServicesAsync = createAsyncThunk(
  'services/preview',
  async (token: string): Promise<Service[]> => {
    const response = await getServicePreview(token); // Assuming getServices is a function that fetches service data
    return response;
  }
);

export const servicePreviewSlice = createSlice({
  name: 'servicePreview',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getServicesAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getServicesAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.services = action.payload;
    });
    builder.addCase(getServicesAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const servicePreviewReducer =  servicePreviewSlice.reducer;
