export function FormSelect({ name, register, value, ...props}) {
  const options = props.options;
  return (
    <label className="text-[14px] form-control w-full max-w-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
      </div>
      <select
        name={name}
        {...register(name, {
          required: false,
        })}
        onChange={(e) => {
          value(e.target.value);
        }}
        className="text-[14px] h-9 select select-sm select-bordered w-full max-w-xs">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}