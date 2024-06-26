'use client'
import { useForm } from "react-hook-form";
import axios, { HttpStatusCode } from "axios";
import AddSubject from "./addsubject";
import { FormSelect } from "@/components/inputs/FormSelect";
import { FormInput } from "@/components/inputs/FormInput";
import { useState } from "react";
import LoadingScreen from "@/components/Loading/LoadingScreen";

const ConfigurationsPage = () => {
  const { register, handleSubmit, reset } = useForm();

  const [selectedType, setSelectedType] = useState("JHS");
  const [isLoading, setIsLoading] = useState(false);
  console.log(selectedType);

  const studentType = [
    {
      value: "JHS",
      label: "Junior High School"
    },
    {
      value: "SHS",
      label: "Senior High School"
    }
  ]
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
  const strands = [{
    value: "STEM",
    label: "STEM"
  }, {
    value: "ABM",
    label: "ABM"
  }, {
    value: "HUMSS",
    label: "HUMSS"
  }, {
    value: "GAS",
    label: "GAS"
  }, {
    value: "TVL",
    label: "TVL"
  }, {
    value: "ICT",
    label: "ICT"
  }]

  const onSubmitYearSection = async (data) => {
    // POST data to DB
    setIsLoading(true)
    console.log(data);
    await axios.post('/api/year_level', data)
      .then((response) => {
        console.log(response.data);
        response.data.status == HttpStatusCode.Created ? alert("Added") : alert("Error");
        reset();
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("Error : " + error);
        alert("Error");
        setIsLoading(false)
      });
    reset();
    setSelectedType("JHS");
  };

  return (
    <>
      {isLoading && <LoadingScreen />}
      <div className="grid grid-cols-2 gap-2">
        <div className="card w-96 bg-base-100 border">
          <div className="card-body p-4">
            <section className="card-title justify-between">
              <h2 className="font-">Add Year & Sections</h2>
            </section>
            <form onSubmit={handleSubmit(onSubmitYearSection)}>
              <StudentType setSelectedType={setSelectedType} options={studentType} />
              <YearLevel register={register} options={selectedType === "JHS" ? jhs_level : shs_level}/>
              {selectedType === "SHS" && <FormSelect register={register} name='strand_name' options={strands} />}
              <FormInput register={register} name='section_name' label='Section Name' type='text' />
              <FormInput register={register} name='adviser' label='Adviser' type='text' />
              <FormInput register={register} name='room' label='Room' type='text' />
              <button type="submit" className="btn btn-sm btn-info border-r w-full text-white my-2">ADD</button>
            </form>
          </div>
        </div>
        <AddSubject />
      </div>
    </>
  );
}

function StudentType({ setSelectedType, options }) {
  return (<label className="text-[14px] form-control w-full max-w-xs my-1">
    <div className="label">
      <span className="label-text text-xs">Student Type</span>
    </div>
    <select onChange={(e) => setSelectedType(e.target.value)} className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
      {options.map(option =>
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )}
    </select>
  </label>);
}

function YearLevel({ register, options }) {
  return (<label className="text-[14px] form-control w-full max-w-xs my-1">
    <div className="label">
      <span className="label-text text-xs">Year Level</span>
    </div>
    <select {...register('year_level', {
      required: true
    })} className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
      {options.map(option => 
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      )}
    </select>
  </label>);
}
export default ConfigurationsPage;