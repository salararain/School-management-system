
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AddStudent } from "../redux/slices/AddStudentSlice";

const AddNewStudent = () => {
  const dispatch = useDispatch();

  // const studentReducer = useSelector((state) => state.addStudent);

  const onSubmitForm = (event) => {
    event.preventDefault();
    if(!studentData.StudentFirstName || !studentData.StudentDateOfBirth ){
      alert("Please fill the required fields")
      return;
    }
    console.log(studentData, "std data")

    dispatch(AddStudent(studentData))
    
    setStudentData({ 
    StudentFirstName: "",
    StudentDateOfBirth: "",
    Gender: "",
    StudentClass: "",
    ParentGuardianName: "",
    ParentGuardianContact: "",
    StudentContactNumber: "",
    ParentStudentEmail: "",
    CurrentAddress: "",
  })
  }

  const [studentData, setStudentData] = useState({
    StudentFirstName: "",
    StudentDateOfBirth: "",
    Gender: "",
    StudentClass: "",
    ParentGuardianName: "",
    ParentGuardianContact: "",
    StudentContactNumber: "",
    ParentStudentEmail: "",
    CurrentAddress: "",
  });
  const onHandelStudentData = (event, propertyName) => {
    setStudentData((prevData) => ({ ...prevData, [propertyName]: event.target.value }))
  };

  return (
    <div className="w-[100%] h-[full] flex justify-center items-center">
      <div className="w-[100%] h-auto  p-1 m-1 shadow-2xl m-1 rounded bg-transparent backdrop-blur-3xl">
        <h1 className="text-center text-4xl">Addmission From</h1>
        <form onSubmit={onSubmitForm}>
          <div className="grid grid-cols-4 m-4  max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[450px]:grid-cols-1">

            <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student's First Name:</legend>
              <input
                type="text"
                className="input w-full "
                placeholder="Type here"
                value={studentData.StudentFirstName}
                onChange={(event) => { onHandelStudentData(event, 'StudentFirstName') }}
              />
            </fieldset>

            <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student's Date of Birth:</legend>
              <input type="date"
                className="input w-full"
                placeholder="Type here"
                value={studentData.StudentDateOfBirth}

                onChange={(event) => { onHandelStudentData(event, 'StudentDateOfBirth') }}
              />
            </fieldset>

            <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Gender:</legend>
              <select
                className="select select-bordered w-full"
                value={studentData.Gender}
                onChange={(event) => { onHandelStudentData(event, 'Gender') }}
              >
                <option value="" disabled>Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </fieldset>

            <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Class You Want to Apply For:</legend>
              <input type="text"
                className="input w-full"
                placeholder="Type here"
                value={studentData.StudentClass}
                onChange={(event) => { onHandelStudentData(event, 'StudentClass') }}
              />
            </fieldset>

            <fieldset className="fieldset  m-1  w-[270px]   max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/ Gurdian Name:</legend>
              <input type="text"
                className="input w-full "
                placeholder="Type here"
                value={studentData.ParentGuardianName}
                onChange={(event) => { onHandelStudentData(event, 'ParentGuardianName') }}
              />
            </fieldset>

            <fieldset className="fieldset  m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/ Gurdian Contact:</legend>
              <input type="text"
                className="input w-full "
                placeholder="Type here"
                value={studentData.ParentGuardianContact}
                onChange={(event) => { onHandelStudentData(event, 'ParentGuardianContact') }} />
            </fieldset>

            <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student contact number:</legend>
              <input type="text" className="input w-full " placeholder="Type here" value={studentData.StudentContactNumber} onChange={(event) => { onHandelStudentData(event, 'StudentContactNumber') }} />

            </fieldset>

            <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/Student email:</legend>
              <input type="email"
                className="input w-full  "
                placeholder="Type here"
                value={studentData.ParentStudentEmail}
                onChange={(event) => { onHandelStudentData(event, 'ParentStudentEmail') }}
              />
            </fieldset>

            <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
              <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Current Address:</legend>
              <input type="text"
                className="input w-full "
                placeholder="Type here"
                value={studentData.CurrentAddress}
                onChange={(event) => { onHandelStudentData(event, 'CurrentAddress') }} />
            </fieldset>

          </div>

          <div className="btnn-container flex justify-start items-Start  m-4 ">
            <button className="btn btn-neutral p-2 text-xl">Submit</button>
          </div>

        </form>
      </div>
    </div>
  )
}
export default AddNewStudent