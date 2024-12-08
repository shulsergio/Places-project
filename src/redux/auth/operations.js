import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://places-project-db.onrender.com/";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/register", credential);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credential, thunkAPI) => {
    try {
      const { data } = await axios.post("/auth/login", credential);
      console.log("auth/login (opration.js) - logIn:", data);
      console.log("data.token (opration.js) - logIn:", data.token);
      console.log("data.accessToken (opration.js) - logIn:", data.accessToken);
      console.log(
        "data.data.accessToken (opration.js) - logIn:",
        data.data.accessToken
      );
      setAuthHeader(data.data.accessToken);
      return {
        user: data.data.user,
        token: data.data.accessToken,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    clearAuthHeader();
  } catch (error) {
    thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    if (!reduxState.auth.token) {
      throw new Error("No token found");
    }
    setAuthHeader(reduxState.auth.token);

    try {
      const { data } = await axios.post("/auth/refresh");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
