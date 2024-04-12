export const Navbar = () => {
  return (
    <>
      <div className="navbar fixed bg-base-100 z-20 border-b">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl font-black ms-4">
            <span>
              <img src={"/logo.png"} width={50} />
            </span>
            NVGHS - AES
            <span className="text-[10px] align-bottom">
              v1.1
            </span>
          </a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="my-1 mx-4">...</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 border rounded-box w-52">
              <li><a>Profile</a></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}