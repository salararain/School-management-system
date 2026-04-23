import Teacherdatareducer from "./slices/TeacherDataSlice";
import AddStudentreducer from "./slices/AddStudentSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer: {
        addStudent: AddStudentreducer,
        teacherdata: Teacherdatareducer
    }
});
export default Store;