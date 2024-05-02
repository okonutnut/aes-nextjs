"use client";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAtom } from "jotai";
import { EnrollmentPhasesAtom, StudentRegistrationInfoAtom } from "@/libs/atom";
import { SimpleInput } from "@/components/inputs/SimpleInput";
import { FormSelect } from "@/components/inputs/FormSelect";
import { useFetchGradeLevel } from "@/components/hooks/useFetchGradeLevel";

const EnrollmentForm = () => {
  const [studentRegistrationInfo, setStudentRegistrationInfo] = useAtom(StudentRegistrationInfoAtom);

  const grade_levels = () => {
    const data = useFetchGradeLevel();
    if (data) {
      return data.map((item) => {
        return { value: item.year_level +" - "+ item.section_name, label: item.year_level + " - " + item.section_name };
      });
    }
    return [];
  };

  const [enrollmentPhases, setEnrollmentPhases] = useAtom(EnrollmentPhasesAtom);
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
          <h3 className="text-[18px] font-semibold">Enrollment Form</h3>
          <div className="flex justify-start gap-3 w-full">
            <SimpleInput label="Student ID" value="" type="text" readOnly />
            <SimpleInput
              label="Student Name"
              value=""
              type="text"
              readOnly
            />
          </div>
          <div className="flex justify-start gap-3 w-full">
            <FormSelect register={register} name="grade_level" options={grade_levels()} label="Grade & Section" />
          </div>
        </div>
        <div className="flex justify-end my-5 gap-4">
          {enrollmentPhases != "registration" && (
            <button
              className="btn btn-md text-[13px] text-white rounded-[3px] w-[100px] btn-secondary"
              onClick={() => setEnrollmentPhases("registration")}
            >
              Back
            </button>
          )}
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
