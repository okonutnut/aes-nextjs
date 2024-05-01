'use client'

const BottomNav = () => {
  return (
    <>
      <section>
        <div className="bottom-0 fixed w-full bg-white shadow top-10">
          <div className="flex justify-between">
            <a href="#" className="btn btn-ghost btn-sm rounded-btn">Back</a>
            <a href="#" className="btn btn-primary btn-sm rounded-btn">Next</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default BottomNav