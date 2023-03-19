import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchText: "",
    featured: false
}

const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        searchFilter: (state, action) => {
            state.searchText = action.payload
        },
        featuredFilter: (state, action) => {
            state.featured = action.payload
        }
    }
})

export default filterSlice.reducer;
export const { searchFilter, featuredFilter } = filterSlice.actions