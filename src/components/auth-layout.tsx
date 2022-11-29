import Head from 'next/head'

import { useSession } from 'next-auth/react'
import { Loading, NotFound, TopBar, NavBar, SideBar } from '.'

const Layout = ({ sidebar, children }) => {
  const { status } = useSession()

  if ( status === 'loading' ) {
    return <Loading />
  } else if ( status === 'unauthenticated' ) {
    return <NotFound />
  } else if ( status === 'authenticated' ) {
    return (
      <>
        <Head>
          <title> TechDot </title>
        </Head>
        <div className='flex flex-wrap bg-[#0E1016] w-full'>
          <TopBar />
          

          <div className='w-full grid grid-cols-12 my-5'>
            <NavBar />
            
            { children }
          </div>

          { sidebar && <SideBar /> }
        </div>
      </>
    );
  }

}
 
export default Layout;