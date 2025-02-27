import { createAsyncThunk } from "@reduxjs/toolkit";

const BaseUrl = "https://67bd9679321b883e790d1a01.mockapi.io/api/soar";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchData",
  async () => {
    const response = await fetch(`${BaseUrl}/dashboard`);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  }
);
