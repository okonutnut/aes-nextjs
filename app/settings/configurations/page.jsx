'use client'
import { useForm } from "react-hook-form";
import axios from "axios";

const ConfigurationsPage = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // POST data to DB
    console.log(data);
    axios.post('/api/year_section', data)
    .then((response) => {
      console.log(response.data);
      response.data.status == "Success" ? alert("Added") : setError(true);
    })
    .catch((error) => {
      console.log("Error : " + error);
      setError(true);
    });
  };

  return (
    <>
      <div className="card w-96 bg-base-100 border">
        <div className="card-body p-4">
          <section className="card-title justify-between">
            <h2 className="font-">Add Year & Sections</h2>
          </section>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input register={register} name='year_level' placeholder='Year Level' type='number' />
            <Input register={register} name='section_name' placeholder='Section Name' type='text' />
            <Input register={register} name='adviser' placeholder='Adviser' type='text' />
            <Input register={register} name='room' placeholder='Room' type='text' />
            <button type="submit" className="btn btn-sm btn-info border-r w-full text-white">ADD</button>
          </form>
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