'use client'
import {useEffect, useState} from "react";
import axios from "axios";
import { MdArrowLeft } from "react-icons/md";

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
      <h1 className="text-[24px] font-bold">
        <span className="align-middle me-4">
          <button ><MdArrowLeft /></button>
        </span>
        Enrollee Profile
      </h1>
      <div className="grid grid-flow-col gap-5">
        <div className="card card-body border shadow my-3 rounded-[8px] h-auto">
          <p className="text-[18px] font-semibold mb-2">Student Information</p>
          <p className="text-[16px] font-semibold">Cabalse, Darlito Dela Jr Cruz <span className="text-[12px] font-semibold">(LRN: 123456789)</span></p>
          <p className="text-[14px]">Student ID : 19-10532</p>
          <p className="text-[14px]">Year & Section : </p>
          <p className="text-[14px]">Gender : </p>
          <p className="text-[14px]">Birthday : </p>
          <p className="text-[14px]">Student Type : </p>
        </div>

        <div className="card card-body border shadow my-3 rounded-[8px] h-auto">
          <p className="text-[18px] font-semibold mb-2">Address & Contact</p>
          <p className="text-[14px]">Purok: </p>
          <p className="text-[14px]">Barangay : </p>
          <p className="text-[14px]">Municipality : </p>
          <p className="text-[14px]">Province : </p>
          <p className="text-[14px]">Zip Code : </p>
          <hr className="my-2" />
          <p className="text-[14px]">Father&apos;s Name: </p>
          <p className="text-[14px]">Contact : </p>
          <p className="text-[14px]">Mother&apos;s Name : </p>
          <p className="text-[14px]">Contact : </p>
        </div>
      </div>
    </>
  )
};

export default EnrolleeProfile;