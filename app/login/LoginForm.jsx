'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { useSetAtom } from 'jotai'
import { sessionUser } from '@/libs/atom'

const LoginForm = () => {
  const router = useRouter()
  
  const setAdmin = useSetAtom(sessionUser);

  const { register, handleSubmit } = useForm();

  const [error, setError] = useState(false);
  const [declined, setDeclined] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true)
    await axios.post('/api/login', data)
      .then((response) => {
        setAdmin(response.data.data)
        response.data.status == "Success" ? router.push('/dashboard') : setDeclined(true);
        setIsLoading(false)
      })
      .catch((error) => {
        setError(true)
        setIsLoading(false)
      });
  }

  return (
    <>
      <form className="flex flex-col w-96 gap-2 px-4 my-3" onSubmit={handleSubmit(onSubmit)}>
        <label className="input input-md input-bordered flex items-center gap-2 my-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
          <input {...register('admin_id', {
            required: true
          })} type="text" className="grow" placeholder="User ID" />
        </label>
        <label className="input input-md input-bordered flex items-center gap-2 my-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
          <input {...register('password', {
            required: true
          })} type="password" className="grow" placeholder="Password" />
        </label>
        {isLoading ? <button className='btn btn-success text-white' disabled={true}><span className='loading loading-spinner loading-sm'></span></button> : <button className='btn btn-success text-white'>Sign in</button>}
        {error && <p className="text-red-500 text-center text-sm font-light">** Error on server. **</p>}
        {declined && <p className="text-red-500 text-center text-sm font-light">** Invalid credentials. **</p>}
      </form>
    </>
  )
}
export default LoginForm