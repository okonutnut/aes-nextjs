"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SimpleInput } from "@/components/inputs/SimpleInput";
import StudentSearchBar from "./searchbar";
import SubjectTable from "./table";
import axios, { HttpStatusCode } from "axios";

const EnrollmentForm = () => {
  const [selectedType, setSelectedType] = useState("JHS");
  const [selectedLevel, setSelectedLevel] = useState("7");

  const [sectionData, setSectionData] = useState([{}]);
  const [strandData, setStrandData] = useState([{}]);
  const [subjectData, setSubjectData] = useState([{}]);

  useEffect(() => {
    axios.post('/api/sections', { year_level: selectedLevel })
      .then(response => {
        if (response.data.status === HttpStatusCode.Ok || response.data.data.length > 0) {
          setSectionData(response.data.data);
        } else {
          setSectionData([]);
        }
      })
  }, [selectedLevel, selectedType]);

  useEffect(() => {
    axios.post('/api/subjects/getall', { year_level: selectedLevel })
      .then(response => {
        if (response.data.status === HttpStatusCode.Ok || response.data.data.length > 0) {
          setSubjectData(response.data.data);
        } else {
          setSubjectData([]);
        }
      })
  }, [selectedLevel, selectedType]);

  useEffect(() => {
    axios.post('/api/sections/strand', { year_level: selectedLevel })
      .then(response => {
        if (response.data.status === HttpStatusCode.Ok || response.data.data.length > 0) {
          setStrandData(response.data.data);
        } else {
          setStrandData([]);
        }
      })
  }, [selectedLevel, selectedType]);

  const type = [
    { value: "JHS", name: "Junior High School" },
    { value: "SHS", name: "Senior High School" },
  ]
  const jhs_level = [
    { value: "7", name: "Grade 7" },
    { value: "8", name: "Grade 8" },
    { value: "9", name: "Grade 9" },
    { value: "10", name: "Grade 10" },
  ]

  const shs_level = [
    { value: "11", name: "Grade 11" },
    { value: "12", name: "Grade 12" },
  ]

  const [search, setSearch] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setStudentRegistrationInfo(JSON.stringify(data));
    setEnrollmentPhases("review");
    console.log("Student Info: ", studentRegistrationInfo);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="my-3">
          <h1 className="text-[24px] font-bold mb-4">Enrollment Form</h1>
          <div className="flex justify-start gap-3 w-full">
            <StudentSearchBar setSearch={setSearch} />
          </div>
          <div className="flex justify-start gap-3 w-full">
            <SimpleInput
              label="Student ID"
              type="text"
              readOnly
              value={search == null ? "" : JSON.parse(search).student_id}
            />
            <SimpleInput
              label="Student Name"
              type="text"
              readOnly
              value={search == null ? "" : JSON.parse(search).first_name + " " + JSON.parse(search).middle_name + " " + JSON.parse(search).last_name}
            />
            <label className="form-control w-full max-w-xs my-1">
              <div className="label">
                <span className="label-text text-xs">Student Type</span>
              </div>
              <select className="select select-sm select-bordered w-full max-w-xs" {...register('student_type', { required: true })} onChange={(e) => setSelectedType(e.target.value)}>
                <option value="JHS">Junior High School</option>
                <option value="SHS">Senior High School</option>
              </select>
            </label>
          </div>
          <div className="flex justify-start gap-3 w-full mb-4">
            <label className="form-control w-full max-w-xs my-1">
              <div className="label">
                <span className="label-text text-xs">Year Level</span>
              </div>
              <select className="select select-sm select-bordered w-full max-w-xs" {...register('year_level', { required: true })} onChange={(e) => setSelectedLevel(e.target.value)}>
                {selectedType == "JHS" ? jhs_level.map((level, index) => (
                  <option key={index} value={level.value}>{level.name}</option>
                )) : shs_level.map((level, index) => (
                  <option key={index} value={level.value}>{level.name}</option>
                ))}
              </select>
            </label>
            {selectedType == "JHS" && (
              <>
                <label className="form-control w-full max-w-xs my-1">
                  <div className="label">
                    <span className="label-text text-xs">Section</span>
                  </div>
                  <select className="select select-sm select-bordered w-full max-w-xs" {...register('section_name', { required: true })} >
                    {sectionData.map((section, index) => (
                      <option key={index} value={section.section_name}>{section.section_name}</option>
                    ))}
                  </select>
                </label>
                <SimpleInput
                  label="Class Adviser"
                  type="text"
                  readOnly
                  value={sectionData.map((section) => section.adviser)}
                />
                <SimpleInput
                  label="Room Assignment"
                  type="text"
                  readOnly
                  value={sectionData.map((section) => section.room)}
                />
              </>
            )}
            {selectedType == "SHS" && (
              <>
                <label className="form-control w-full max-w-xs my-1">
                  <div className="label">
                    <span className="label-text text-xs">Academic Track</span>
                  </div>
                  <select className="select select-sm select-bordered w-full max-w-xs" {...register('track_name', { required: true })} >
                    {strandData.map((strand, index) => (
                      <option key={index} value={strand.strand_name}>{strand.strand_name}</option>
                    ))}
                  </select>
                </label>
                <SimpleInput
                  label="Class Adviser"
                  type="text"
                  readOnly
                  value={strandData.map((strand) => strand.adviser)}
                />
                <SimpleInput
                  label="Room Assignment"
                  type="text"
                  readOnly
                  value={strandData.map((strand) => strand.room)}
                />
              </>
            )}
          </div>
          <div className="flex flex-col justify-start gap-3 w-full">
            <h3 className="text-xs">Subjects</h3>
            <SubjectTable subjects={subjectData} />
          </div>
        </div>
        <div className="flex justify-end my-5 gap-4">
          <button
            className="btn btn-md text-[13px] text-white rounded-[3px] w-[100px] btn-primary"
            type="submit"
          >
            Register
          </button>
        </div>
      </form>
    </>
  );
};
export default EnrollmentForm;
