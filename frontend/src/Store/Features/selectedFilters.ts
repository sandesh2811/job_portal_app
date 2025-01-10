import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SelectedFiltersState = {
  selectedFilters: {
    title: "",
    salary: {
      from: "",
      to: "",
    },
    experience: "",
    position: "",
    location: "",
  },
};

const SelectedFilters = createSlice({
  name: "selectedFilters",
  initialState,
  reducers: {
    getSelectedFilters: (state, action: PayloadAction<SelectedFiltersType>) => {
      state.selectedFilters = action.payload;
    },
  },
});

export const { getSelectedFilters } = SelectedFilters.actions;

export default SelectedFilters;
