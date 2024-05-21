import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchStudentData({studentId}) {
  
  const [studentData, setStudentData] = useState({});

  useEffect(async () => {
    if(studentId) {
      await axios.post(`/api/students/${studentId}`)
        .then(response => {
          setStudentData(response.data.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [studentId]);

  return JSON.stringify(studentData);
}