import { createSlice } from "@reduxjs/toolkit";

const initialState = []
const oneSlice = createSlice({
    name: "first",
    initialState,
    reducers: {
        add(state, action) {
            state.push(action.payload)
        }
    }
})

export const { add } = oneSlice.actions
export default oneSlice.reducer