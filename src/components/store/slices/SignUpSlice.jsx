import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signUpData: {
        username: "",
        password: "",
        email: ""
    },
    data: [],
}

const signUpSlice = createSlice({
    name: "signUpSlice",
    initialState,
    reducers:{
        signUpDataSetter(state, action){
            state?.signUpData = action?.payload;
        },

    }
})