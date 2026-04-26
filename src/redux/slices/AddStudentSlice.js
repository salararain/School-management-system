
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
    },
    DeleteStudent: (state,action) =>{
      const index = action.payload;
      state.students.splice(index, 1);
    }
  }
});

export const { AddStudent, UpdateStudent, DeleteStudent } = AddStudentSlice.actions;
export default AddStudentSlice.reducer;