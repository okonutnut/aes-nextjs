'use client'
import { useEffect, useState } from "react"
import LoadingScreen from "@/components/Loading/LoadingScreen"
import axios from "axios"

const StudentProfileForm = ({register, studentID, editProfile}) => {
  const [isLoading, setIsLoading] = useState(false);
  const isEdit = editProfile;

  const [studentData, setStudentData] = useState({});
  useEffect(() => {
    setIsLoading(true);
    axios.post('/api/students/profile', {student_id: studentID})
      .then(response => {
        setStudentData(response.data.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      })
  }, []);

  const GenderOptions = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" }
  ];

	return (
    <>
      <section className="flex flex-col">
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
              name="barangay"
              type="text"
              label="Barangay"
              readOnly={!isEdit}
              value={studentData.barangay}
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
              name="zip_code"
              type="text"
              label="Zip Code"
              readOnly={!isEdit}
              value={studentData.zip_code}
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
      </section>
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