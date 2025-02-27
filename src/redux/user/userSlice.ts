import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchUserData, updateUserData } from "./userAPI";

export interface UserData {
  avatar: any;
  name: string;
  userName: string;
  email: string;
  password: string;
  dob: string;
  address: string;
  permanantAddress: string;
  postalCode: string;
  city: string;
  country: string;
}

const initialState = {
  userData: null as UserData | null,
  loading: false,
  error: null as string | null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchUserData.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.userData = action.payload;
        }
      )
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(updateUserData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        updateUserData.fulfilled,
        (state, action: PayloadAction<UserData>) => {
          state.loading = false;
          state.userData = action.payload;
        }
      )
      .addCase(updateUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default userSlice.reducer;
