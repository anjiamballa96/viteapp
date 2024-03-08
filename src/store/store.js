import { configureStore } from "@reduxjs/toolkit";
import oneSlice from "./oneSlice";
import secSlice from "./secSlice";

const store = configureStore({
    reducer: {
        firstone: oneSlice,
        secondSlice :secSlice
    }
})

export default store