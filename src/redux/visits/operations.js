import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://places-project-db.onrender.com/";

export const fetchVisits = createAsyncThunk(
  "visits/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/visits");
      console.log("response in fetchVisits: ", response);
      console.log("response.data in fetchVisits: ", response.data.data);
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addVisit = createAsyncThunk(
  "visits/addVisit",
  async (visit, thunkAPI) => {
    try {
      const response = await axios.post("/visits", visit);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteVisit = createAsyncThunk(
  "visits/deleteVisit",
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/visits/${id}`);
      return data.id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
