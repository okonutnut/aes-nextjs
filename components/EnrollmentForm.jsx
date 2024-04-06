'use client'
import { useForm } from "react-hook-form"
const EnrollmentForm = () => {

  const { register, control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <div className="card lg:card-side bg-base-100">
        <div className="card-body p-2">
          <h2 className="card-title">Enrollment Form</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col p-3">
            <div className="content my-3">
              <h3 className="text-lg font-semibold">Learner&apos;s Information</h3>
              <div className="flex justify-between gap-3 w-full">
                <Input register={register} name="studentID" type="text" label="Student ID" />
                <Input register={register} name="lrn" type="number" label="LRN" />
              </div>
              <div className="flex justify-start gap-3 w-full">
                <Input register={register} name="firstName" type="text" label="First Name" />
                <Input register={register} name="middleName" type="text" label="Middle Name" />
                <Input register={register} name="lastName" type="text" label="Last Name" />
                <Input register={register} name="prefixName" type="text" label="Prefix (Jr, II, III)" />
              </div>
              <div className="flex justify-between gap-3 w-full">
                <Select register={register} name="genderSelect" label="Gender" />
                <Select register={register} name="yearSelect" label="Year Level" />
                <Select register={register} name="sectionSelect" label="Section" />
              </div>
            </div>

            <div className="content my-3">
              <h3 className="text-lg font-semibold">Address & Contact</h3>
              <div className="flex justify-start gap-3 w-full">
                <Input register={register} name="purok" type="text" label="Purok" />
                <Input register={register} name="brgy" type="text" label="Barangay" />
                <Input register={register} name="municipality" type="text" label="Municipality" />
                <Input register={register} name="Province" type="text" label="Province" />
              </div>
              <div className="flex justify-between gap-3 w-full">
                <Input register={register} name="fatherName" type="text" label="Father's Name" />
                <Input register={register} name="fatherContact" type="text" label="Father's Contact" />
                <Input register={register} name="motherName" type="text" label="Mother's Name" />
                <Input register={register} name="motherContact" type="text" label="Mother's Contact" />
              </div>
            </div>
            <div className="card-actions justify-end my-5 ">
              <button className="btn btn-md text-white rounded-[3px] w-[100px] btn-primary">Submit</button>
              <button className="btn btn-md text-white rounded-[3px] w-[100px] btn-error">Clear</button>
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

function Select({ register, name, ...props }) {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div><undefined />
      <select {...register(name, {
        required: 'Select one option',
      })} name={name} {...props} className="select select-sm h-9 select-bordered">
        <option defaultValue={true}>Male</option>
        <option>Female</option>
      </select>
    </label>
  );
}
export default EnrollmentForm