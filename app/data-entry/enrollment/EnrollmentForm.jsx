'use client'
import { useForm } from "react-hook-form";
const EnrollmentForm = () => {
  const { register, handleSubmit, reset } = useForm();
  return (
    <>
      <section>
        <Input register={register} name="student-id" label="Student ID" type="text" />
      </section>
    </>
  )
}

function Input({ register, name, label, type}) {
  return (<label className="form-control w-full max-w-xs">
    <div className="label">
      <span className="label-text">{label}</span>
    </div>
    <input {...register(name, {
      required: true,
    })} type={type} name={name} placeholder="Type here" className="text-[14px] input h-9 input-bordered w-full max-w-xs" />
  </label>)
}
export default EnrollmentForm