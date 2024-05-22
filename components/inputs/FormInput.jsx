export function FormInput({ name, register, optional, readOnly, value, ...props}) {
  return (
    <label className="text-[14px] form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{props.label}</span>
        <span className="label-text text-xs">
          {optional ? "(Optional)" : ""}
        </span>
      </div>
      <input
        {...register(name, {
          // required: optional ? false : true,
          required: true,
        })}
        name={name}
        type={props.type}
        value={value}
        readOnly={readOnly}
        placeholder="Type here"
        className="text-[14px] h-9 input input-bordered w-full max-w-xs"
      />
    </label>
  );
}