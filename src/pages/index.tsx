import { signOut } from "next-auth/react";
import { AuthLayout } from '../components'

const Home = () => {  
  return (
    <button onClick={ () => signOut() } className='text-2xl w-full h-full text-white'> Sign Out </button>
  );
};

Home.getLayout = (home) => {
  return (
    <AuthLayout>
      { home }
    </AuthLayout>
  )
}

export default Home;