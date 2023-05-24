'use client';

import { NextPage } from 'next';
import {signIn} from 'next-auth/react';
import { FormEventHandler, useState } from 'react';

interface Props{}

const Login: NextPage = (props): JSX.Element => {
  // const [userInfo, setUserInfo] = useState({ email: "", password: ""});
  // const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
  //   e.preventDefault()

  //   const res = await signIn('credentials', {
  //     email: userInfo.email,
  //     password: userInfo.password,
  //     redirect: false,
  //   })
  // };
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>LOGIN</h1>
        <label>Email:</label>
        <input type="email" placeholder='john@email.com' />
        <label>Password:</label>
        <input type="password" placeholder='**********' />
        <input type="submit" value="Login" />
        {/* <button onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Login
        </button> */}
        <button onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
          Sign In With Auth
        </button>
      </form>
    </div>
  )
}

export default Login