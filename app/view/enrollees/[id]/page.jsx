'use client'
import {useEffect, useState} from "react";
import { MdArrowLeft } from "react-icons/md";
import axios from "axios";
import { useRouter } from "next/navigation";
import { TimeStampFormatter } from "@/components/utils/TimeStampFormatter";

const EnrolleeProfile = ({ params }) => {
  const router = useRouter();
  // FETCH
  const [studentProfile, setStudentProfile] = useState({});
  const [enrollmentHistory, setEnrollmentHistory] = useState([{}]);

  useEffect(() => {
    axios.post(`/api/enrollees/history/${params.id}`)
      .then(response => {
        setEnrollmentHistory(response.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  useEffect(() => {
    axios.post(`/api/enrollees/${params.id}`)
      .then(response => {
        setStudentProfile(response.data.data);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <h1 className="text-[24px] font-bold">
        <span className="align-middle me-4">
          <button onClick={() => router.push('/view/enrollees')}><MdArrowLeft /></button>
        </span>
        Enrollee Profile
      </h1>
      <div className="grid grid-cols-3 gap-5">
        <div className="card card-body border shadow my-3 rounded-[8px] h-auto">
          <p className="text-[18px] font-semibold mb-2">Student Information</p>
          <p className="text-[24px] font-semibold">{studentProfile.student_name}</p>
          <p className="text-[14px]">Student ID : {studentProfile.student_id}</p>
          <p className="text-[14px]">Student Type : {studentProfile.student_type == "JHS" ? "Junior High School" : "Senior High School"}</p>
          <p className="text-[14px]">Grade Level : Grade {studentProfile.year_level}</p>
          <p className="text-[14px]">Section : {studentProfile.section_name}</p>
        </div>
        <div className="card card-body border shadow my-3 rounded-[8px] h-auto col-span-2">
          <p className="text-[18px] font-semibold">Enrollment History</p>
            <section>
            <table className="table table-xs table-bordered">
              <thead>
                <tr>
                  <th>Enrollment Date</th>
                  <th>Grade Level</th>
                  <th>Section</th>
                </tr>
              </thead>
              <tbody>
                {enrollmentHistory.map((history, index) => (
                  <tr key={index}>
                    <td>{TimeStampFormatter(history.createdAt)}</td>
                    <td>{history.year_level}</td>
                    <td>{history.section_name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </>
  )
};

export default EnrolleeProfile;