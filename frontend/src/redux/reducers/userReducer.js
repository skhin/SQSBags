import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //store name
  initialState: {
    email: "",
    password: "",
  },
  reducers: {
    login: (state, action) => {
      state.email = action.payload.email;
      //state is like the actual thing, action.payload is like what you put in
      state.password = action.payload.password;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
