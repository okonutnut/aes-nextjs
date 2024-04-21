'use client'
import ViewContent from "@/components/Containers/ViewContent";
import { useForm } from "react-hook-form";

const ConfigurationsPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="card w-96 bg-base-100 border">
        <div className="card-body p-4">
          <section className="card-title justify-between">
            <h2 className="2xl">Manage Year & Sections</h2>
            <button className="btn btn-sm btn-info border-r">ADD</button>
          </section>
          
        </div>
      </div>
    </>
  );
}


function Input({ register, name, placeholder, type }) {
  return (
    <label className="input input-md h-9 input-bordered flex items-center gap-2 my-2">
      <input {... register(name, {
        required: true,
      })} name={name} type={type} className="grow" placeholder={placeholder} />
    </label>
  );
}
export default ConfigurationsPage;