import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
  },
  reducers: {
    setUserData: (state, { payload }) => {
      state.user = payload;
    },
    setUpdateUserData: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
  },
});

export const { setUserData, setUpdateUserData } = userSlice.actions;
export default userSlice.reducer;
