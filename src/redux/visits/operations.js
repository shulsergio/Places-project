import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

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
