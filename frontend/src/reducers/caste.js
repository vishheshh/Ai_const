import { createSlice } from "@reduxjs/toolkit";

const casteSlice = createSlice({
  name: "caste",
  initialState: {
    details: null, // Store caste details
  },
  reducers: {
    setCasteDetails: (state, action) => {
      state.details = action.payload; // Set caste details
      // console.log(state.details)
      console.log(state.details)
    },
    clearCasteDetails: (state) => {
      state.details = null; // Clear caste details
    },
  },
});

export const { setCasteDetails, clearCasteDetails } = casteSlice.actions;
export default casteSlice.reducer;
