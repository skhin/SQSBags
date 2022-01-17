import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //store name
  initialState: {
    fname: "",
    lname: "",
    address: "",
    email: "",
    accessToken: "",
    country: "",
    postal: "",
    countryCode: "",
    phone: null,
    password: "",
    isFetching: false,
    error: false,
  },
  reducers: {
    setFirstName: (state, action) => {
      state.fname = action.payload + " ";
    },
    setLastName: (state, action) => {
      state.lname = action.payload + " ";
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setCountry: (state, action) => {
      state.country = action.payload;
    },
    setPostal: (state, action) => {
      state.postal = action.payload;
    },
    setCountryCode: (state, action) => {
      state.countryCode = action.payload;
    },
    setPhone: (state, action) => {
      state.phone = action.payload;
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
    registerSuccess: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
