import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader'

const Loading = () => {
  return (

    <div className='flex justify-center items-center h-screen bg-[#0E1016]'>
      <ClimbingBoxLoader 
        size={10}
        color="white"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

  );
}
 
export default Loading;