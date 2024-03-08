import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    data: [],
    status: ""
}

const secondSlice = createSlice({
    name: "second",
    initialState,
    reducers: {
        //if we use did not use extrareducers and also !createAsyncThunk
        fetchProducts(state, action) {
            state.data = action.payload
        }
    },
    //if we use createAsyncThunk 
    extraReducers: (builder) => {
        builder
            .addCase(getDataUsingThunk.pending, (state, action) => {
                state.status = "Loading"
            })
            .addCase(getDataUsingThunk.fulfilled, (state, action) => {
                state.data = action.payloa;
                state.status = ""
            })
            .addCase(getDataUsingThunk.rejected, (state, action) => {
                state.status = "error"
            })

    }
})

export const { fetchProducts } = secondSlice.actions
export default secondSlice.reducer

//api call using createAsyncThunk
export const getDataUsingThunk = createAsyncThunk("second/get", async () => {
    const data = await fetch("url")
    const result = data.json()
    return result
})

//api calls for use in components
export function getData() {
    return async function getDataThun(dispatch, getState) {
        const data = await fetch("url")
        const result = data.json()
        dispatch(fetchProducts(result))
    }
}