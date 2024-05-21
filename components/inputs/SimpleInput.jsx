export function SimpleInput({label, value, type, readOnly}) {
  return (
    <label className="text-[14px] form-control w-full max-w-xs text-xs my-1">
      <div className="label">
        <span className="label-text text-xs">{label}</span>
      </div>
      <input
        type={type}
        value={value}
        className="text-[14px] input input-sm input-bordered w-full max-w-xs"
        {...readOnly && {readOnly: true}}
      />
    </label>
  );
}