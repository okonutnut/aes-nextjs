import { useForm } from "react-hook-form";
const Form = ({children}) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </>
  )
}
export default Form;