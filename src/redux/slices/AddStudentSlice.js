

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const AddStudentSlice = createSlice ({

    name: "AddStudent",
    initialState,
    reducers:{
        AddStudent: (state, payload) =>{
            state.push(payload);
            console.log(payload);

        },
        UpdateStudent:() =>{},
        DeleteStudent: () =>{}
    }
});

export const { AddStudent, UpdateStudent, DeleteStudent}= AddStudentSlice.actions;

export default AddStudentSlice.reducer;