

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { DeleteStudent } from "../redux/slices/AddStudentSlice";

const StudentInfo = ({ seteditData, seteditIndex }) => {
    const navigate = useNavigate();
    const students = useSelector((state) => state.addStudent.students);
    const dispatch = useDispatch();

    const onEdit = (student, index) => {
        seteditData(student);
        seteditIndex(index);
        navigate("/addnewstudent");
    }

    const onDelete = (index) => {
        dispatch(DeleteStudent(index));
    };

    return (
        <div className="w-[100%] h-[full]  shadow-2xl m-1 rounded">
            <h1 className="text-center text-4xl">Student Information</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Student Name</th>
                            <th>DOB</th>
                            <th>Gender</th>
                            <th>Class</th>
                            <th>Contact</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.length === 0 ? (
                            <tr>
                                <td colSpan="7" className="text-center">no students yet</td>
                            </tr>
                        ) :
                            students.map((student, index) => (

                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{student.StudentFirstName}</td>
                                    <td>{student.StudentDateOfBirth}</td>
                                    <td>{student.Gender}</td>
                                    <td>{student.StudentClass}</td>
                                    <td>{student.StudentContactNumber}</td>
                                    <td>{student.ParentStudentEmail}</td>
                                    <td>
                                        <button onClick={() => onEdit(student, index)} className="btn btn-primary btn-sm">
                                            Edit
                                        </button>
                                        <button onClick={() => onDelete(index)} className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div >
    )
}
export default StudentInfo;
