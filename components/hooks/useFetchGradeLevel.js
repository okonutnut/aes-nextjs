import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetchGradeLevel() {

  const [gradeLevel, setGradeLevel] = useState(null);

  useEffect(() => {
    axios.get('/api/year_level')
      .then(response => {
        setGradeLevel(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return gradeLevel;
}