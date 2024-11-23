import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movie: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadmovie: (state, action) => {
      state.info = action.payload; // Changed from `info` to `movie` to match `initialState`
    },
    removemovie: (state) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadmovie, removemovie } = movieSlice.actions;

export default movieSlice.reducer;
