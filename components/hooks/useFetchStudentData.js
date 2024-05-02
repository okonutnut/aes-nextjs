import { useEffect, useState } from 'react';
import axios from 'axios';
export function useFetchStudentData({ studentId}) {
  
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    if(studentId) {
      axios.post('/api/students/profile', studentId)
        .then(response => {
          setStudentData(response.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [studentId]);

  return studentData;
}