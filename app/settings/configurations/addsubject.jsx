import { FormInput } from "@/components/inputs/FormInput";
import { FormSelect } from "@/components/inputs/FormSelect";
import { HttpStatusCode } from "axios";
import { Form, useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

const AddSubject = () => {
  const [selectValue, setSelectValue] = useState("JHS");
  const [selectYear, setSelectYear] = useState("7");
  // console.log(selectValue);
  // console.log(selectYear);

  const jhs_level = [{
    value: 7,
    label: "Grade 7"
  }, {
    value: 8,
    label: "Grade 8"
  }, {
    value: 9,
    label: "Grade 9"
  }, {
    value: 10,
    label: "Grade 10"
  }];
  const shs_level = [{
    value: 11,
    label: "Grade 11"
  }, {
    value: 12,
    label: "Grade 12"

  }];
  const type = [{
      value: "JHS",
      label: "Junior High School"
    },
    {
      value: "SHS",
      label: "Senior High School"
  }];

  const { register, handleSubmit, reset } = useForm();
  const onSubmitJHSSubjects = async (data) => {
    // POST data to DB
    await axios.post('/api/subjects', data)
      .then((response) => {
        console.log(response.data);
        response.data.status == HttpStatusCode.Created ? alert("Added") : alert("Error");
        reset();
      })
      .catch((error) => {
        console.log("Error : " + error);
        alert("Error");
      });
  };
  return (
    <>
      <div className="card w-96 bg-base-100 border">
        <div className="card-body p-4">
          <section className="card-title justify-between">
            <h2 className="font-">Add Subjects</h2>
          </section>
          <form onSubmit={handleSubmit(onSubmitJHSSubjects)}>
            <StudentType register={register} name="type" type={type} label="Student Type" setSelectValue={setSelectValue} />
            <YearLevelSelect register={register} name="year_level" options={selectValue == "JHS" ? jhs_level : shs_level} label="Year Level" setSelectYear={setSelectYear} />
            {selectValue == "SHS" && (
              <>
                <FormInput register={register} name='strand' label='Strand' type='text' />
              </>
            )}
            <FormInput register={register} name='code' label='Subject Code' type='text' />
            <FormInput register={register} name='name' label='Subject Name' type='text' />
            <button type="submit" className="btn btn-sm btn-info border-r w-full text-white my-2">ADD</button>
          </form>
        </div>
      </div>
    </>
  )
}

function StudentType({ register, type, name, label, setSelectValue }) {
  const options = type;
  return (
    <label className="text-[14px] form-control w-full max-w-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{label}</span>
      </div>
      <select
        name={name}
        {...register(name, {
          required: true,
        })}
        onChange={(e) => {
          setSelectValue(e.target.value);
        }}
        className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function YearLevelSelect({ register, name, options, label, setSelectYear }) { 
  return (
    <label className="text-[14px] form-control w-full max-w-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{label}</span>
      </div>
      <select
        name={name}
        {...register(name, {
          required: true,
        })}
        onChange={(e) => {
          setSelectYear(e.target.value);
        }}
        className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
export default AddSubject;