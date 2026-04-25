import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AddNewStudent, Dashbord, Login , AddTeachers,AddSubjects, StudentInfo} from "./pages";
import Layout from "./components/Layout"

function App() {

   const [editData, seteditData] = useState(null);
   const [editIndex, seteditIndex] = useState(null);



  return (
    <>
      
        <Routes>
           <Route path="/login" element={<Login/>}></Route>
          <Route path="/" element={<Layout/>}>
          <Route path="dashbord" element={<Dashbord/>}></Route>
          <Route path="addnewstudent" element={<AddNewStudent 
          editData={editData}
          editIndex={editIndex}
          seteditData={seteditData}
          seteditIndex={seteditIndex}
          />
          }>
          </Route>
          <Route path="addteachers" element={<AddTeachers/>}></Route>
          <Route path="addsubjects" element={<AddSubjects/>}></Route>
          <Route path="studentinfo" element={<StudentInfo
          seteditData={seteditData}
          seteditIndex={seteditIndex}
          />
          }>
          </Route>
          </Route>
        </Routes>
    </>
  )
}

export default App
