import { configureStore } from "@reduxjs/toolkit";
import listSlice from "./slices/ListSlice";

const store = configureStore({
    reducer: {
        listing: listSlice,
    }
});

export default store;