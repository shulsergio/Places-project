import { logIn, logOut, refreshUser, register } from "./operations.js";
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
        console.log("Action payload in logIn.fulfilled:", action.payload);
        if (!action.payload || !action.payload.user) {
          console.error("Invalid payload in logIn.fulfilled:", action.payload);
          return;
        }
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        console.log("Updated state.user:", state.user);
        console.log("Updated state.isLoggedIn:", state.isLoggedIn);
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
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
