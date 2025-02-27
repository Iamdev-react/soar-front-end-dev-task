import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/user/userSlice";
import dashboardReducer from "../redux/dasboard/dashboardSlice";
import sidebarReducer from "../redux/sidebar/sidebarSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    dashboard: dashboardReducer,
    sidebar: sidebarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
