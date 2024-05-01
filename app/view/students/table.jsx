'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const StudentsTable = () => {
  const router = useRouter();
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

  // Handle row click 
  const onRowClick = (event) => {
    const studentId = event.target.parentElement.children[1].textContent;
    router.push(`/view/students/${studentId}`);
  };

  return (
    <>
      <div className="flex justify-between items-center"> 
        
      </div>
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
              <tr className="hover" key={index} onClick={onRowClick}>
                <th>{index + 1}</th>
                <td>{data.student_id}</td>
                <td>{data.last_name +", "+ data.first_name +" "+ data.middle_name.charAt(0) + "."}</td>
                <td>{data.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

function Select({}){
  return (
    <>

    </>
  )
}
export default StudentsTable;