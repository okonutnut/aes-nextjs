export const Navbar = () => {
  return (
    <>
      <div className="navbar fixed bg-base-100 z-20">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl ms-4">
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
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
          </button>
        </div>
      </div>
    </>
  )
}