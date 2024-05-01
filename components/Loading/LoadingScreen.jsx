'use client'
const LoadingScreen = () => {
  return (
    <>
      <section className="bg-base-100 h-screen w-screen fixed z-50 grid place-items-center">
        <span className="loading loading-dots loading-lg"></span>
        <p>Please wait....</p>
      </section>
    </>
  )
}
export default LoadingScreen;