'use client'
import ViewContent from "@/components/Containers/ViewContent";
import { useForm } from "react-hook-form";

const ConfigurationsPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <ViewContent>
      <div className="card w-96 bg-base-100 border">
        <div className="card-body">
          <h2 className="card-title">Year & Sections</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} name="yearInput" placeholder="Year Level" type="number"/>
            <Input register={register} name="sectionInput" placeholder="Section Name" type="text"/>
            <Input register={register} name="adviserInput" placeholder="Adviser" type="text"/>
            <Input register={register} name="roomInput" placeholder="Room" type="text"/>
            <div className="card-actions justify-end">
              <button className="btn btn-sm btn-primary mt-2" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </ViewContent>
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