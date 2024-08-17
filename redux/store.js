import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import searchSlice from "./searchSlice";

export const store =configureStore({
  reducer: {
    user: userSlice,
    search: searchSlice
  }
})