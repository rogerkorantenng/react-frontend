import { configureStore } from "@reduxjs/toolkit";

// reducers
import SideBarReducer from "./sidebar";
import ToastReducer from "./toast";
import authSlice from "../../authSlice";

export const store = configureStore({
  reducer: {
    sidebar: SideBarReducer,
    toast: ToastReducer,
    auth: authSlice,
  },
});
