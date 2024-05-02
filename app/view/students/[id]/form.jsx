'use client'
import { useEffect, useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import LoadingScreen from "@/components/Loading/LoadingScreen"
import { useAtom } from "jotai"
import { EditProfileAtom } from "@/libs/atom"

const StudentProfileForm = ({id}) => {
	const {register, handleSubmit, reset} = useForm()
  const [isEdit] = useAtom(EditProfileAtom)

  const [studentID, setStudentID] = useState()
  const [studentData, setStudentData] = useState({})
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    setStudentID(id)

    const fetchDta = () => {axios.post('/api/students/profile')
      .then(response => {
        setStudentData(response.data.data)
        setIsLoading(false)
        console.log(response.data.data)
      })
      .catch(error => {
        console.log(error)
        setIsLoading(false)
      })}
    fetchDta()
  }, [id])

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

	return (
    <>
      <form className="flex flex-col">
        {isLoading && <LoadingScreen />}
        <div className="my-3">
          <div className="flex justify-start gap-3 w-full">
            <Input
              register={register}
              name="last_name"
              type="text"
              label="Last Name"
              readOnly={!isEdit}
              value={studentData.last_name}
            />
            <Input
              register={register}
              name="middle_name"
              type="text"
              label="Middle Name"
              readOnly={!isEdit}
              value={studentData.middle_name}
            />
            <Input
              register={register}
              name="first_name"
              type="text"
              label="First Name"
              readOnly={!isEdit}
              value={studentData.first_name}
            />
          </div>
          <div className="flex justify-start gap-3 w-full">
            <Input
              register={register}
              name="birthday"
              type="date"
              label="Birthday"
              readOnly={!isEdit}
              value={studentData.birthday}
            />
            <SelectCustom
              register={register}
              name="gender"
              options={GenderOptions}
              label="Gender"
              readOnly={!isEdit}
            />
          </div>
        </div>

        <div className="my-3">
          <div className="flex justify-start gap-3 w-full">
            <Input
              register={register}
              name="purok"
              type="text"
              label="Purok"
              readOnly={!isEdit}
              value={studentData.purok}
            />
            <Input
              register={register}
              name="brgy"
              type="text"
              label="Barangay"
              readOnly={!isEdit}
              value={studentData.brgy}
            />
            <Input
              register={register}
              name="municipality"
              type="text"
              label="Municipality"
              readOnly={!isEdit}
              value={studentData.municipality}
            />
          </div>
          <div className="flex justify-start gap-3 w-full">
            <Input
              register={register}
              name="province"
              type="text"
              label="Province"
              readOnly={!isEdit}
              value={studentData.province}
            />
            <Input
              register={register}
              name="zipcode"
              type="text"
              label="Zip Code"
              readOnly={!isEdit}
              value={studentData.zipcode}
            />
          </div>
          <div className="flex justify-between gap-3 w-full">
            <Input
              register={register}
              name="father_name"
              type="text"
              label="Father's Name"
              readOnly={!isEdit}
              value={studentData.father_name}
            />
            <Input
              register={register}
              name="father_contact"
              type="text"
              label="Father's Contact"
              readOnly={!isEdit}
              value={studentData.father_contact}
            />
            <Input
              register={register}
              name="mother_name"
              type="text"
              label="Mother's Name"
              readOnly={!isEdit}
              value={studentData.mother_name}
            />
            <Input
              register={register}
              name="mother_contact"
              type="text"
              label="Mother's Contact"
              readOnly={!isEdit}
              value={studentData.mother_contact}
            />
          </div>
        </div>
      </form>
    </>
  );
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
        defaultValue={value}
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