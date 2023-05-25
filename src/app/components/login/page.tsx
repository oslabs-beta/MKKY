'use client';

import { NextPage } from 'next';

import {signIn} from 'next-auth/react';

interface Props{}

const Login: NextPage = (props): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>LOGIN</h1>
        <input type="email" placeholder='john@email.com' />
        <input type="password" placeholder='**********' />
        <input type="submit" value="Login" />
        <div className= 'flex flex-col items-center mt-4'>
        <button onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Sign In With Google
        </button>
        </div>
        <div className= 'flex flex-col items-center mt-4'>
        <button onClick={() => signIn("github", { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Sign In With Github
        </button>
        </div>
      </form>
    </div>
  )
}

export default Login