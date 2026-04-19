import { Route, Routes } from "react-router-dom";
import { AddNewStudent, Dashbord, Login , AddTeachers,AddSubjects, StudentInfo} from "./pages";
import Layout from "./components/Layout"

function App() {

  return (
    <>
      
        <Routes>
           <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Layout/>}>
          <Route path="dashbord" element={<Dashbord/>}></Route>
          <Route path="addnewstudent" element={<AddNewStudent/>}></Route>
          <Route path="addteachers" element={<AddTeachers/>}></Route>
          <Route path="addsubjects" element={<AddSubjects/>}></Route>
          <Route path="studentinfo" element={<StudentInfo/>}></Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
