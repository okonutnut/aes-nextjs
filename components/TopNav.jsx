'use client'
import { useRouter } from "next/navigation"
const TopNav = () => {
  const router = useRouter();
  return (
    <>
      <div className="navbar fixed bg-base-100 z-20 border-b">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-black ms-4">
            <span>
              <img src={"/logo.png"} width={50} alt="logo" />
            </span>
            NVGCHS - AES
            <span className="text-[10px] align-bottom">
              v1.0
            </span>
          </a>
        </div>
        <div className="flex-none gap-3">
          <div className="form-control">
            <h3 className="align-middle font-semibold">Hello, Darlito Dela Cruz Cabalse !</h3>
            <p>Logged in: hh:mm</p>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52">
              <li><button onClick={() => router.push('/login')}>Profile</button></li>
              <li><button onClick={() => router.push('/login')}>Logout</button></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopNav