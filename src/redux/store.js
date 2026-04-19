
import AddStudentreducer from "./slices/AddStudentSlice";
import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore ({
    reducer: {
     AddStudentreducer
    }
});
export default Store;