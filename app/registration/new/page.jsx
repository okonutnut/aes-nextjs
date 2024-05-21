"use client";
import { useForm } from "react-hook-form";
import { FormInput } from "@/components/inputs/FormInput";
import { FormSelect } from "@/components/inputs/FormSelect";
import axios from "axios";

const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
  ];

  const onSubmit = async (data) => {
    await axios.post(`/api/students`, JSON.stringify(data))
      .then(response => {
        console.log(response);
        if(response.data.status === 201){
          reset();
          alert("Student successfully registered!");
        } else {
          alert("Failed to register student!");
        }
      })
      .catch(error => {
        console.log(error);
      })
  };


  return (
    <>
      <h1 className="text-[24px] font-bold">New Student Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="my-3">
          <h3 className="text-[18px] font-semibold">
            Learner&apos;s Information
          </h3>
          <div className="flex justify-between gap-3 w-full">
            <FormInput
              register={register}
              name="student_id"
              type="text"
              label="Student ID"
            />
            <FormInput
              register={register}
              name="last_name"
              type="text"
              label="Last Name"
            />
            <FormInput
              register={register}
              name="middle_name"
              type="text"
              label="Middle Name"
            />
            <FormInput
              register={register}
              name="first_name"
              type="text"
              label="First Name"
            />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <FormInput
              register={register}
              name="lrn"
              type="number"
              label="Learner's Reference Number (LRN)"
              optional
            />
            <FormInput
              register={register}
              name="birthday"
              type="date"
              label="Birthday"
            />
            <FormSelect
              register={register}
              name="gender"
              options={GenderOptions}
              label="Gender"
            />
          </div>
        </div>

        <div className="my-3">
          <h3 className="text-[18px] font-semibold">Address & Contact</h3>
          <div className="flex justify-start gap-3 w-full">
            <FormInput register={register} name="purok" type="text" label="Purok" />
            <FormInput
              register={register}
              name="brgy"
              type="text"
              label="Barangay"
            />
            <FormInput
              register={register}
              name="municipality"
              type="text"
              label="Municipality"
            />
            <FormInput
              register={register}
              name="province"
              type="text"
              label="Province"
            />
            <FormInput
              register={register}
              name="zipcode"
              type="text"
              label="Zip Code"
            />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <FormInput
              register={register}
              name="father_name"
              type="text"
              label="Father's Name"
            />
            <FormInput
              register={register}
              name="father_contact"
              type="text"
              label="Father's Contact"
            />
            <FormInput
              register={register}
              name="mother_name"
              type="text"
              label="Mother's Name"
            />
            <FormInput
              register={register}
              name="mother_contact"
              type="text"
              label="Mother's Contact"
            />
          </div>
        </div>
        <div className="flex justify-end my-5">
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
export default RegistrationForm;
