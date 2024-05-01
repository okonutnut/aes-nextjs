'use client'
const LoadingScreen = () => {
  return (
    <>
      <section className="fixed left-0 top-0 right-0 bottom-0 z-50 bg-base-100 bg-opacity-[90%] flex flex-col justify-center items-center">
        <span className="loading loading-dots loading-lg text-primary"></span>
        <p>Please wait....</p>
      </section>
    </>
  )
}
export default LoadingScreen;