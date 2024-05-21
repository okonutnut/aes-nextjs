import axios from "axios";
import { useState } from "react";

const StudentSearchBar = ({ setSearch }) => {
  const [searchedStudents, setSearchedStudents] = useState(null); // [ { student_id: "2021-0001", first_name: "John", last_name: "Doe" }
  const searchStudent = async (e) => {
    await axios.post('/api/search/students', { search: e.target.value })
      .then((response) => {
        setSearchedStudents(response.data.data);
      }).catch((error) => {
        console.error(error);
      });
  }

  function selectedStudent(student) {
    setSearch(JSON.stringify(student));
    setSearchedStudents(null);
    document.getElementById('studentSearchBar').value = "";
  }
  console.log(searchedStudents);
  return (
    <>
      <div className="dropdown w-[50%]">
        <label className="input h-9 input-bordered flex items-center gap-2">
          <input tabIndex={0} id="studentSearchBar" type="text" className="grow" placeholder="Search ID or Name" onChange={searchStudent} />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </label>
        {searchedStudents != null && (
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-full">
            {searchedStudents.length > 0 && (
              searchedStudents.map((student, index) => (
                <li key={index} onClick={() => selectedStudent(student)}><a>{`${student.last_name}, ${student.first_name}`}</a></li>
              )))
            }
          </ul>
        )}
      </div>
    </>
  )
}
export default StudentSearchBar;