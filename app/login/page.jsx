import LoginForm from '../../components/LoginForm'
const Login = () => {
  return (
    <>
      <div className="fixed left-0 top-0 right-0 bottom-0 z-50 bg-base-100">
        <div className="flex items-center h-screen">
          <div className="flex flex-col flex-1 items-center justify-center p-3">
            <img src={'/logo.png'} width={200} className='m-4'/>
            <LoginForm />
          </div>
          <div className="flex flex-col justify-center items-center h-full w-full bg-[url('/login-bg.jpg')] bg-cover relative">
            <div className='h-full w-full bg-success absolute opacity-60'></div>
            <p className="text-2xl text-white font-bold z-20">NVGHS - Automated Enrollment System</p>
            <p className="text-white z-20">Unofficial Enrollment System by Franco, Cabalse & Soriano</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login