'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import { useAtom } from "jotai"
import { EditProfileAtom } from "@/libs/atom"

const StudentProfileForm = ({id}) => {
	const {register, handleSubmit, reset} = useForm()
  const [isEdit] = useAtom(EditProfileAtom)
  const [studentData, setStudentData] = useState({})
  useEffect(() => {
    axios.post('/api/students/profile', id)
      .then(response => {
        setStudentData(response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  console.log(studentData)

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

	return (
		<>
      <form className="flex flex-col">
        <div className="my-3">
          {Object.keys(studentData).map((key, index) =>
            <div className="flex flex-col flex-row justify-between gap-3 w-full">
              <Input register={register} name={key} type="text" label={key.charAt(0).toUpperCase() + key.slice(1)} readOnly={!isEdit} value={studentData[key]}/>
            </div>
          )}
          <div className="flex justify-start gap-3 w-full">
            <Input register={register} name="birthday" type="date" label="Birthday" readOnly={!isEdit}/>
            <SelectCustom register={register} name="gender" options={GenderOptions} label="Gender" readOnly={!isEdit}/>
          </div>
        </div>

        <div className="my-3">
          <div className="flex justify-start gap-3 w-full">
            <Input register={register} name="purok" type="text" label="Purok" readOnly={!isEdit}/>
            <Input register={register} name="brgy" type="text" label="Barangay" readOnly={!isEdit}/>
            <Input register={register} name="municipality" type="text" label="Municipality" readOnly={!isEdit}/>
          </div>
          <div className="flex justify-start gap-3 w-full">
            <Input register={register} name="province" type="text" label="Province" readOnly={!isEdit}/>
            <Input register={register} name="zipcode" type="text" label="Zip Code" readOnly={!isEdit}/>
          </div>
          <div className="flex justify-between gap-3 w-full">
            <Input register={register} name="father_name" type="text" label="Father's Name" readOnly={!isEdit}/>
            <Input register={register} name="father_contact" type="text" label="Father's Contact" readOnly={!isEdit}/>
            <Input register={register} name="mother_name" type="text" label="Mother's Name" readOnly={!isEdit}/>
            <Input register={register} name="mother_contact" type="text" label="Mother's Contact" readOnly={!isEdit}/>
          </div>
        </div>
      </form>
		</>
	)
}

const Input = ({ name, register, readOnly, value, ...props }) => {
  return (
    <label className="text-[14px] form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <input {...register(name, {
        required: true
      })}
      	readOnly={readOnly}
        value={value}
        name={name}
        type={props.type}
        placeholder="Type here"
        className="text-[14px] h-9 input input-bordered w-full max-w-xs" />
    </label>
  );
}

const SelectCustom = ({ name, register, readOnly, ...props }) => {
  const options = props.options;
  return (
    <label className="text-[14px] form-control w-full max-w-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <select name={name} {...register(name, {
        required: true
      })}
        disabled={readOnly}
        className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </label>
  );
}
export default StudentProfileForm