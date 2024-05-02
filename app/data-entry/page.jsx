'use client'
import { useEffect } from "react";
import { EnrollmentTimeline } from "./EnrollmentTimeline";
import RegistrationForm from "./RegistrationForm";
import EnrollmentForm from "./EnrollmentForm";

import { useAtom } from "jotai";
import { EnrollmentPhasesAtom } from "../../libs/atom";

const NewStudentPage = () => {
  const [enrollmentPhases, setEnrollmentPhases] = useAtom(EnrollmentPhasesAtom);

  useEffect(() => {
    setEnrollmentPhases("registration");
  }, []);

  return (
    <>
      <h1 className="text-[24px] font-bold">New Student Form</h1>
      {enrollmentPhases == "registration" && <RegistrationForm />}
      {enrollmentPhases == "enrollment" && <EnrollmentForm />}
    </>
  );
}

export default NewStudentPage