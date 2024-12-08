import { createSlice } from "@reduxjs/toolkit";
import { addVisit, deleteVisit, fetchVisits } from "./operations";

const slice = createSlice({
  name: "visits",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchVisits.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVisits.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.loading = false;
      })
      .addCase(fetchVisits.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      })
      .addCase(addVisit.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVisit.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.items.push(payload);
      })
      .addCase(addVisit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      })
      .addCase(deleteVisit.pending, (state, { payload }) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteVisit.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.items = state.items.filter(({ id }) => id !== payload);
      })
      .addCase(deleteVisit.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.items = [];
        // state.error = action.error.message;
      }),
});
export const contactsReducer = slice.reducer;
