'use client'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const EnrolleesPage = () => {
  const router = useRouter();
  // Get the data from the server
  const [enrollees, setEnrollees] = useState([]);
  useEffect(() => {
    axios.get('/api/enrollees')
      .then(response => {
        setEnrollees(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  // Handle row click 
  const onRowClick = (event) => {
    const studentId = event.target.parentElement.children[1].textContent;
    router.push(`/view/enrollees/${studentId}`);
  };

  return (
    <>
      <h1 className="text-2xl font-extrabold my-2">Enrollees Page</h1>
      <section className="w-full">
        <div className="overflow-x-auto border rounded-md">
          <table className="table table-md">
            <thead>
              <tr>
                <th>No</th>
                <th>Student ID</th>
                <th>Fullname</th>
                <th>Year & Section</th>
                <th>Date Enrolled</th>
              </tr>
            </thead>
            <tbody>
              {enrollees.map((enrollee, index) => (
                <tr key={enrollee.id} onClick={onRowClick} className="hover">
                  <td className="font-semibold">{index + 1}</td>
                  <td>{enrollee.student_id}</td>
                  <td>{enrollee.last_name + ', ' + enrollee.first_name + ' ' + enrollee.middle_name.charAt(0) + '.'}</td>
                  <td>{enrollee.year_level_section}</td>
                  <td>{enrollee.createdAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default EnrolleesPage;