import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// axios.defaults.baseURL = "https://66ec53402b6cf2b89c5e17ea.mockapi.io";

export const fetchVisits = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/visits");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addVisit = createAsyncThunk(
  "contacts/addVisit",
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post("/visits", contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteVisit = createAsyncThunk(
  "contacts/deleteVisit",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/visits/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
