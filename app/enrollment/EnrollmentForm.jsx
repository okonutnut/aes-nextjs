'use client'
import { useForm } from "react-hook-form"
import axios from 'axios'
import { useState, useEffect } from "react";

const EnrollmentForm = () => {

  const { register, handleSubmit } = useForm();

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

  // Getting the year and sections
  const [yearSection, setYearSection] = useState([]);
  useEffect(() => {
    axios.get('/api/year_section')
      .then(response => {
        const dataArray = response.data.map(item => {
          return {
            value: `${item.year_level} - ${item.section_name}`,
            label: `${item.year_level} - ${item.section_name}`
          }
        });
        // console.log(dataArray);
        setYearSection(dataArray);
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    axios.post('/api/enroll', data)
      .then(response => {
        console.log(response);
        alert('Successfully Enrolled');
      })
      .catch(error => {
        console.log(error);
        alert('Error in Enrolling');
      })
  }
  
  return (
    <>
      <div className="card lg:card-side bg-base-100">
        <div className="card-body p-2">
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-3">
            <h3 className="text-lg font-semibold">Learner&apos;s Information</h3>
            <div className="content my-3">
              <div className="flex justify-between gap-3 w-full">
                <Input register={register} name="student_id" type="text" label="Student ID" />
                <Input register={register} name="lrn" type="number" label="LRN" />
              </div>
              <div className="flex justify-between gap-3 w-full">
                <Input register={register} name="last_name" type="text" label="Last Name" />
                <Input register={register} name="middle_name" type="text" label="Middle Name" />
                <Input register={register} name="first_name" type="text" label="First Name" />
              </div>
              <div className="flex justify-between gap-3 w-full">
                <Input register={register} name="birthday" type="date" label="Birthday" />
                <SelectCustom register={register} name="gender" options={GenderOptions} label="Gender"  />
                <SelectCustom register={register} name="year_level_section" options={yearSection} label="Year Level & Section"  />
              </div>
            </div>

            <div className="content my-3">
              <h3 className="text-lg font-semibold">Address & Contact</h3>
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
            <div className="card-actions justify-end my-5 ">
              <button className="btn btn-sm text-[13px] text-white rounded-[3px] w-[100px] btn-primary" type="submit" >Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

const Input = ({ name, register, ...props }) => {
  return (
    <label className="form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <input {...register(name, {
        required: true
      })}
        name={name}
        type={props.type}
        placeholder="Type here"
        className="input h-9 input-bordered w-full max-w-xs" />
    </label>
  );
}

const SelectCustom = ({name, register, ...props}) => {
  const options = props.options;
  return (
    <label className="form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <select name={name} {...register(name, {
        required: true
        })}
        className="h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
export default EnrollmentForm