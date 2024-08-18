import { createSlice } from "@reduxjs/toolkit";

const initialValues = {
  id: null
}

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialValues,
  reducers: {
    reducerSetSearch: (state, action) => {
      state.id = action.payload.id
      state.date = action.payload.date
      state.name = action.payload.name
    }
  }

})

export const {reducerSetSearch} = searchSlice.actions

export default searchSlice.reducer