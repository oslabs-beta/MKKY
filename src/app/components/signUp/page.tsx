'use client';
import { NextPage } from 'next';



import {signIn} from 'next-auth/react';


const Signup: NextPage = (): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>SIGNUP</h1>
        <input type="email" placeholder='john@email.com' />
        <input type="password" placeholder='**********' />
        <input type="submit" value="Signup" />
        <div className= 'flex flex-col items-center mt-4'>
        <button onClick={() => signIn("google", { callbackUrl: '/components/home'}) } type="button" className='btn btn-primary'>
          Sign Up With Google
        </button>
        </div>
        <div className= 'flex flex-col items-center mt-4'>
        <button onClick={() => signIn("github", { callbackUrl: '/components/home'}) } type="button" className='btn btn-primary'>
          Sign Up With Github
        </button>
        </div>
      </form>
    </div>
  )
}

export default Signup