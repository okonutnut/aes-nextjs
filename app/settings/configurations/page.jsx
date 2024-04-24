'use client'
import { useForm } from "react-hook-form";
import axios from "axios";

const ConfigurationsPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const year_level = [7, 8, 9, 10, 11, 12];

  const onSubmit = (data) => {
    // POST data to DB
    console.log(data);
    axios.post('/api/year_section', data)
    .then((response) => {
      console.log(response.data);
      response.data.status == "Success" ? alert("Added") : setError(true);
      reset();
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
            {/* <Input register={register} name='year_level' placeholder='Year Level' type='number' /> */}
            <Select register={register} name='year_level' options={year_level} />
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

function Select({ register, name, options }) {
  return (
    <label>
      <select {...register(name)} name={name} className="select select-bordered select-sm h-9 w-full">
        {options.map((option) => (
          <option key={option} value={option}>Grade {option}</option>
        ))}
      </select>
    </label>
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