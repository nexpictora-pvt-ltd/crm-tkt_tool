import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import INITIAL_STATE, { Profile } from './profile.state';
import { getServiceProfile } from '../../services/profile.service';

export const getProfileAsync = createAsyncThunk(
  'user/{user_id}',
  async ({ accessToken, user_id }: { accessToken: string, user_id: number }): Promise<Profile> => {
    const response = await getServiceProfile(accessToken, user_id.toString()); 
    return response as Profile;
  }
);

export const setUserProfileId = createSlice({
  name: 'userProfileId',
  initialState: null,
  reducers: {
    setUserProfileId: (state, action) => {
      return action.payload;
    },
  },
});

const profileSlice = createSlice({
  name: 'profile',
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getProfileAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProfileAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.profile = action.payload;
    });
    builder.addCase(getProfileAsync.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export const profileReducer = profileSlice.reducer;