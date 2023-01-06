import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./Redux/Slices/slice";

export default configureStore({
  reducer: dataSlice,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});