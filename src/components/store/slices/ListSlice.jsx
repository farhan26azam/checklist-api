import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "https://a9b7-39-55-212-215.in.ngrok.io//tasklist/tasks/";

const initialState = {
    value: "",
    myData:[
        {
            task_name: "First Element",
            id: 25,
            is_checked: false,
        },
        {
            task_name: "Second Element",
            id: 26,
            is_checked: false,
        },
        {
            task_name: "Third Element",
            id: 27,
            is_checked: false,
        },
        
    ]
} 

const listSlice = createSlice({
    name: "listing",
    initialState,
    reducers:{
        dataSetter(state, action){
            state.myData = action?.payload;
        },
        valueSetter(state, action){
            state.value = action.payload;
        },
        deleteSelection(state, action){
            state.myData = state.myData.filter((elem)=>
            !elem.is_checked);

            state.myData = state?.myData?.map((prev)=> {
                return {
                    ...prev, 
                    is_checked:false
                }
            })

            
        },
        deleteTask(state, action){
            console.log("Deleted index: ", action.payload);
            axios.delete(baseURL+action.payload+"/");
            // axios.delete(baseURL, {task_id: action.payload});

            // state.myData = state.myData.filter((elem, index)=> index != action.payload);
        },
        addTask(state, action){
            const formData = new FormData();
            formData?.append("task_name",state?.value);
            // formData?.append("task_id", state?.myData?.length);
            // formData?.append("task_id", "3");
            formData?.append("is_checked", "False");

            axios.post(baseURL, formData);

            // axios.post(baseURL, {
            //     title: state?.value,
            //     id: state?.myData?.length,
            //     //isChecked: false
            // })


            state.myData.push({
                task_name: state?.value,
                // id: state?.myData?.length,
                is_checked: false,
            })
            // state.myData = [...state.myData, action.payload];
        },
    }
})

export default listSlice.reducer;
export const {deleteSelection} = listSlice.actions;
export const {muafasf} = listSlice.actions;
export const {deleteTask} = listSlice.actions;
export const {addTask} = listSlice.actions;
export const {dataSetter} = listSlice.actions;
export const {valueSetter} = listSlice.actions;