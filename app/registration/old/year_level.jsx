const YearLevelSelector = ({register, setSelectedLevel, selectedType}) => {
  const jhs_level = [
    { value: "7", name: "Grade 7" },
    { value: "8", name: "Grade 8" },
    { value: "9", name: "Grade 9" },
    { value: "10", name: "Grade 10" },
  ]

  const shs_level = [
    { value: "11", name: "Grade 11" },
    { value: "12", name: "Grade 12" },
  ]
  return (
    <>
      <label className="form-control w-full max-w-xs my-1">
        <div className="label">
          <span className="label-text text-xs">Year Level</span>
        </div>
        <select className="select select-sm select-bordered w-full max-w-xs" {...register('year_level', { required: true })} onChange={(e) => setSelectedLevel(e.target.value)}>
          {selectedType == "JHS" ? jhs_level.map((level, index) => (
            <option key={index} value={level.value}>{level.name}</option>
          )) : shs_level.map((level, index) => (
            <option key={index} value={level.value}>{level.name}</option>
          ))}
        </select>
      </label>
    </>
  )
}
export default YearLevelSelector;