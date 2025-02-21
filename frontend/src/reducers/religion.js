import { createSlice } from "@reduxjs/toolkit";

const religionSlice = createSlice({
  name: "religion",
  initialState: {
    details: null, // Store caste details
  },
  reducers: {
    setReligionDetails: (state, action) => {
      state.details = action.payload; // Set caste details
      // console.log(state.details)
      // console.log(state.details)
    },
    clearReligionDetails: (state) => {
      state.details = null; // Clear caste details
    },
  },
});

export const { setReligionDetails, clearReligionDetails } = religionSlice.actions;
export default religionSlice.reducer;
