import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchDashboardData } from "./dashboardAPI";

interface DashboardState {
  data: any[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: DashboardState = {
  data: [],
  loading: false,
  error: null,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchDashboardData.fulfilled,
        (state, action: PayloadAction<any[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchDashboardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Unknown error occurred";
      });
  },
});

export default dashboardSlice.reducer;
