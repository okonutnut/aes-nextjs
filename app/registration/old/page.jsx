"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SimpleInput } from "@/components/inputs/SimpleInput";
import StudentSearchBar from "./searchbar";
import axios, { HttpStatusCode } from "axios";
import YearLevelSelector from "./year_level";
import SectionSelector from "./section";
import { FormInput } from "@/components/inputs/FormInput";

const EnrollmentForm = () => {
  const [search, setSearch] = useState(null);
  const [selectedType, setSelectedType] = useState("JHS");
  const [selectedLevel, setSelectedLevel] = useState("7");
  const [sectionData, setSectionData] = useState([{}]);

  useEffect(() => {
    axios.post('/api/year_level/section', { year_level: selectedLevel })
      .then((response) => {
        if (response.status == HttpStatusCode.Ok) {
          setSectionData(response.data.data);
        } else {
          setSectionData([{}]);
        }
      })
    }, [selectedLevel, selectedType])

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    await axios.post('/api/enrollees', data)
      .then(response => {
        if (response.status == HttpStatusCode.Created) {
          alert("Student has been enrolled successfully!");
        } else {
          alert("Failed to enroll student!");
        }
      })
    reset();
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="my-3">
          <h1 className="text-[24px] font-bold mb-4">Enrollment Form</h1>
          <div className="flex justify-start gap-3 w-full">
            <StudentSearchBar setSearch={setSearch} />
          </div>
          <div className="flex justify-start gap-3 w-full">
            <FormInput
              label="Student ID"
              type="text"
              readOnly
              value={search == null ? "" : JSON.parse(search).student_id}
              register={register}
              name="student_id"
            />
            <FormInput
              label="Student Name"
              type="text"
              readOnly
              value={search == null ? "" : JSON.parse(search).first_name + " " + JSON.parse(search).middle_name + " " + JSON.parse(search).last_name}
              register={register}
              name="student_name"
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
            <YearLevelSelector register={register} setSelectedLevel={setSelectedLevel} selectedType={selectedType} />
            {selectedType == "JHS" && (
              <SectionSelector register={register} selectedLevel={selectedLevel} sectionData={sectionData} />
            )}
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
