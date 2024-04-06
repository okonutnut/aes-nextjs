'use client'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const LoginForm = () => {
  const inputStyles = {
    padding: '12px',
    margin: '10px',
    border: 'none',
    borderRadius: '4px',
    boxShadow: '2px 2px 7px 0 rgb(0, 0, 0, 0.2)',
    outline: 'none',
    color: 'black',
  }
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('api/login', {
        userID: data.userID,
        userPass: data.userPass
      });
      (response.data.length > 0) ?
        window.location.href = '/dashboard' :
        alert('ID or Password not found!');
    } catch (error) {
      alert('Error occured please try again!');
    }
  }

  return (
    <form className="flex flex-col w-96 gap-2 px-4 my-3" onSubmit={handleSubmit(onSubmit)}>
      <label className="input input-md input-bordered flex items-center gap-2 my-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
        <input {...register('userID', {
          required: true
        })} type="text" className="grow" placeholder="User ID" />
      </label>
      <label className="input input-md input-bordered flex items-center gap-2 my-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
        <input {...register('userPass', {
          required: true
        })} type="password" className="grow" placeholder="Password" />
      </label>
      
      <button className='btn btn-success text-white'>Sign in</button>
    </form>
  )
}
export default LoginForm