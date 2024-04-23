'use client'
import {useEffect, useState} from "react";
import axios from "axios";

const EnrolleeProfile = ({ params }) => {
  // FETCH
  const [studentProfile, setStudentProfile] = useState([]);
  useEffect(() => {
    axios.post('/api/enrollee_profile', params)
      .then(response => {
        setStudentProfile(response.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  console.log(studentProfile);
  return (
    <>
      <h1 className="text-2xl font-extrabold my-2">Enrollee Profile</h1>
      <div className="card">
        <div className="card-body">
          <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default EnrolleeProfile;