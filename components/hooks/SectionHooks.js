import axios, { HttpStatusCode } from "axios";
import { useEffect, useState } from "react";

const useFetchSections = (year_level) => {
  const [sections, setSections] = useState([{}]);

  useEffect(() => {
    if(year_level) {
      axios.post('/api/sections', {year_level: year_level})
        .then(response => {
          if(response.data.status == HttpStatusCode.Ok)
          setSections(response.data.data);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }, []);

  return JSON.stringify(sections);
}

export default useFetchSections;