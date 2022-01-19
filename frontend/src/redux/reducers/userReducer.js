import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user", //store name
  initialState: {
    name: "",
    address: "",
    email: "",
    accessToken: "",
    country: "",
    postal: null,
    countryCode: "",
    phone: null,
    password: "",
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
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
    loginSuccess: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.country = action.payload.country;
      state.postal = action.payload.postal;
      state.email = action.payload.email;
      state.accessToken = action.payload.accessToken;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
      //state is like the actual thing, action.payload is like what you put in
    },
    registerSuccess: (state, action) => {
      state.name = action.payload.name;
      state.address = action.payload.address;
      state.country = action.payload.country;
      state.postal = action.payload.postal;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.password = action.payload.password;
    },
    logout: (state) => {
      state.fname = "";
      state.lname = "";
      state.address = "";
      state.email = "";
      state.accessToken = "";
      state.country = "";
      state.postal = "";
      state.countryCode = "";
      state.phone = null;
      state.password = "";
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
