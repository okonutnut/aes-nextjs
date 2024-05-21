import axios from "axios";
import { useEffect, useState } from "react";

const useEnrollStudent = ({studentData}) => {
  const [isEnrolled, setIsEnrolled] = useState(false);

  useEffect(async () => {
    if(studentData) {
      await axios.post(`/api/enrollments`, studentData)
        .then(response => {
          if(response.data.success)
          setIsEnrolled(true);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, [studentData]);

  return isEnrolled;
}

export default useEnrollStudent;