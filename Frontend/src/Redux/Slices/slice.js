import { createSlice } from "@reduxjs/toolkit";
import { getData } from ".";

const initialStateUse = {
  getUser: [],
  isGetDataLoading: false,
  getUserError: "",
};

export const dataSlice = createSlice({
  name: "data",
  initialState: initialStateUse,
  reducers: {},
  extraReducers: {
    [getData.pending]: (state) => {
      state.isGetDataLoading = true;
    },
    [getData.fulfilled]: (state, action) => {
      state.isGetDataLoading = false;
      state.getUser = action.payload?.response?.data;
    },
    [getData.rejected]: (state, error) => {
      state.isGetDataLoading = false;
      state.getDataError = error;
    },
  }
});

export default dataSlice.reducer;
