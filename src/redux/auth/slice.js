import { logIn, logOut, register } from "./operations.js";
import { createSlice, isAnyOf } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isLoading: false,
    isError: false,
    isRefreshing: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log("state.user in slice.js: ");
        console.log(state.user);
        console.log("state.isLoggedIn in slice.js: ");
        console.log(state.isLoggedIn);
      })
      .addCase(logOut.fulfilled, () => {
        return {
          user: {
            name: null,
            email: null,
          },
          token: null,
          isLoggedIn: false,
          isLoading: false,
          isError: false,
          isRefreshing: false,
        };
      })
      .addMatcher(
        isAnyOf(logIn.rejected, register.rejected, logOut.rejected),
        (state, action) => {
          state.isLoading = false;
          state.isLoggedIn = false;
          state.isError = action.payload;
        }
      );
  },
});
export default authSlice.reducer;
