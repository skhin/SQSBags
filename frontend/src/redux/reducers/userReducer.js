import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //store name
  initialState: {
    name: "",
    address: "",
    email: "",
    accessToken: "",
    phone: null,
    password: "",
    isFetching: false,
    error: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
      //state is like the actual thing, action.payload is like what you put in
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const userActions =
  userSlice.actions;
export default userSlice.reducer;
