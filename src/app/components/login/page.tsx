'use client';

import { NextPage } from 'next';

import {signIn} from 'next-auth/react';



const Login: NextPage = (): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      {/* <form> */}
        {/* <h1>LOGIN</h1> */}
        <div className= 'flex flex-col items-center mt-4'>
        <button onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Sign In
        </button>
        </div>
        <div className= 'flex flex-col items-center mt-4'>
        {/* <button onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Sign In With Github
        </button> */}
        </div>
      {/* </form> */}
    </div>
  )
}

export default Login