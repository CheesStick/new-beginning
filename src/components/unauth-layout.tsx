import Head from 'next/head'
import { useSession } from 'next-auth/react'
import { Loading, NotFound } from '.'

const UnAuthLayout = ({ children }) => {
  const { status } = useSession()
  
  if ( status === 'loading' ) {
    return <Loading />
  } else if ( status === 'unauthenticated' ) {
    return (
      <>
        <Head> TechDot </Head>
        <div className='grid grid-cols-12 grid-rows-8 bg-[#0E1016] w-full h-screen'>
          <div className="col-span-12 row-span-8 flex-center">
            { children }
          </div>
        </div>
      </>
    )
  } else if ( status === 'authenticated' ) {
    return <NotFound />
  }

}
 
export default UnAuthLayout;