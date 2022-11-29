// TODO: Display input errros when they ocure
// TODO: Redesign in order for the OAuth services to look better

import Link from 'next/link'
import { signIn } from 'next-auth/react'

import { Icon } from '@iconify/react'
import { UnAuthLayout, Field } from '../../components'

const Login = () => {
  return (
    <form className='h-3/4 w-1/3 rounded bg-[#1C1E24] flex justify-around items-center flex-col gap-y-2'
      onSubmit={ (e) => e.preventDefault() } > 
      
      <legend className='text-xl text-center text-white'> Login to your account </legend>

      <div className='w-3/5 flex-center gap-x-5 bg-[#6135DF] h-10 rounded hover:cursor-pointer text-white'
      onClick={ () => signIn('google', { callbackUrl: '/user/feed' }) }>
        <Icon icon="akar-icons:google-fill" width='24' height='24' />
        Sign in with google
      </div>

      <div className="flex jusitfy-center w-4/5 flex-row items-center gap-x-3 rounded">
        <hr className='border-[#0E1016] border w-1/2' />
        <p className='text-white text-sm'>or</p>
        <hr className='border-[#0E1016] border w-1/2' />
      </div>

      <div className='w-4/5 flex flex-col gap-y-5 items-end'>
        <Field
          name='Email'
          placeholder='henry@gmail.com'
          leftIcon='ic:round-alternate-email'
          inputType='email'
        />

        <Field
          name='Password'
          placeholder='*********************'
          leftIcon='ri:lock-password-fill'
          inputType='password'
        />

        <button className='rounded flex justify-center items-center w-1/3 h-10 text-white gap-x-2 bg-[#6135DF]'>
          <Icon icon="carbon:login" />
          Login
        </button>

        <div className='text-gray-500 text-sm w-full text-center'> 
          Forgot your password?
          <Link href='/reset-password'>
            <p className='text-white underline mx-1'> Reset here </p>
          </Link>
        </div>
      </div>
    </form>
  )
  
}

Login.getLayout = (login) => {
  return (
    <UnAuthLayout>
      { login }
    </UnAuthLayout>
  )
}

export default Login;