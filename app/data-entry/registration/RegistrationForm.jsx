'use client'
import { useState } from 'react'
import { useForm } from "react-hook-form"
import axios from 'axios'
import LoadingScreen from '@/components/Loading/LoadingScreen'

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    await axios.post('/api/students', data)
      .then(response => {
        setIsLoading(false);
        if(response.data.status == 'Success') {
          alert('Successfully Registered');
          reset();
        } else {
          alert('Could not register student. Check if student is existing then try again.');
        }
      })
      .catch(error => {
        setIsLoading(false);
        alert('Error on server! Please try again later.');
      })
  }

  return (
    <>
      {isLoading && <LoadingScreen/>}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div className="my-3">
          <h3 className="text-[18px] font-semibold">Learner&apos;s Information</h3>
          <div className="flex justify-between gap-3 w-full">
            <Input register={register} name="student_id" type="text" label="Student ID" />
            <Input register={register} name="last_name" type="text" label="Last Name" />
            <Input register={register} name="middle_name" type="text" label="Middle Name" />
            <Input register={register} name="first_name" type="text" label="First Name" />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <Input register={register} name="lrn" type="number" label="Learner's Reference Number (LRN)" />
            <Input register={register} name="birthday" type="date" label="Birthday" />
            <SelectCustom register={register} name="gender" options={GenderOptions} label="Gender" />
          </div>
        </div>

        <div className="my-3">
          <h3 className="text-[18px] font-semibold">Address & Contact</h3>
          <div className="flex justify-start gap-3 w-full">
            <Input register={register} name="purok" type="text" label="Purok" />
            <Input register={register} name="brgy" type="text" label="Barangay" />
            <Input register={register} name="municipality" type="text" label="Municipality" />
            <Input register={register} name="province" type="text" label="Province" />
            <Input register={register} name="zipcode" type="text" label="Zip Code" />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <Input register={register} name="father_name" type="text" label="Father's Name" />
            <Input register={register} name="father_contact" type="text" label="Father's Contact" />
            <Input register={register} name="mother_name" type="text" label="Mother's Name" />
            <Input register={register} name="mother_contact" type="text" label="Mother's Contact" />
          </div>
        </div>
        <div className="flex justify-end my-5">
          <button className="btn btn-md text-[13px] text-white rounded-[3px] w-[100px] btn-primary" type="submit" >Register</button>
        </div>
      </form>
    </>
  )
}

const Input = ({ name, register, ...props }) => {
  return (
    <label className="text-[14px] form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <input {...register(name, {
        required: true
      })}
        name={name}
        type={props.type}
        placeholder="Type here"
        className="text-[14px] h-9 input input-bordered w-full max-w-xs" />
    </label>
  );
}

const SelectCustom = ({ name, register, ...props }) => {
  const options = props.options;
  return (
    <label className="text-[14px] form-control w-full max-w-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <select name={name} {...register(name, {
        required: true
      })}
        className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
export default RegistrationForm