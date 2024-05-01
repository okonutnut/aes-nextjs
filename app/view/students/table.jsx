'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios.get('/api/students')
      .then(response => {
        console.log(response.data)
        setStudents(response.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  // // Handle row click 
  // const onRowClick = (event) => {
  //   const studentId = event.target.parentElement.children[1].textContent;
  //   router.push(`/view/enrollees/${studentId}`);
  // };
  return (
    <>
      <div className="overflow-x-auto border rounded-md my-3">
        <table className="table">
          {/* head */}
          <thead>
            <tr className='text-[14px] font-semibold'>
              <th>No.</th>
              <th>Student ID</th>
              <th>Name</th>
              <th>Date Registered</th>
            </tr>
          </thead>
          <tbody>
            {students.map((data, index) => (
              <tr className="hover" key={index}>
                <th>{index + 1}</th>
                <td>{data.student_id}</td>
                <td>{data.last_name +", "+ data.first_name +" "+ data.last_name.charAt(0)}</td>
                <td>{data.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}
export default StudentsTable;