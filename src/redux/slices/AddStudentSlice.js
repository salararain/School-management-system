
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  students: []
};

const AddStudentSlice = createSlice({
  name: "addStudent",
  initialState,
  reducers: {
    AddStudent: (state, action) => {
      state.students.push(action.payload);
    },
    UpdateStudent: (state, action) =>{
     const {index, updateStudent} = action.payload;
     state.students[index] = updateStudent;
    }
  }
});

export const { AddStudent, UpdateStudent } = AddStudentSlice.actions;
export default AddStudentSlice.reducer;