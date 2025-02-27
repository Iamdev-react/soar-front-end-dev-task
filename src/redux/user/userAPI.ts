import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserData } from "./userSlice";

const API_URL = "https://67bd9679321b883e790d1a01.mockapi.io/api/soar/user/1";

const fetchData = async (method: string, data?: UserData) => {
  const response = await fetch(API_URL, {
    method,
    headers: { "Content-Type": "application/json" },
    body: data ? JSON.stringify(data) : undefined,
  });
  if (!response.ok) throw new Error("Network request failed");
  return response.json();
};

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData("GET");
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  "user/updateUserData",
  async (userData: UserData, { rejectWithValue }) => {
    console.log(userData);
    try {
      return await fetchData("PUT", {
        ...userData,
        avatar: userData.avatar,
      });
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);
