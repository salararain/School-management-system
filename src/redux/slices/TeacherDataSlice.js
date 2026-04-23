import { createSlice } from "@reduxjs/toolkit";
import AddTeachers from "../../pages/AddTeachers"; // naam change

const initialState = [];

const TeacherdataSlice = createSlice({
    name: "Teacherdata",
    initialState,
    reducers: {   
        addTeacher: (state, action) => {},
        updateTeachers: (state, action) => {},
        deleteTeachers: (state, action) => {}
    }
});

export const { addTeacher, updateTeachers, deleteTeachers } = TeacherdataSlice.actions;

export default TeacherdataSlice.reducer;