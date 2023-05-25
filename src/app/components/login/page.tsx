'use client';

import { NextPage } from 'next';
import {signIn} from 'next-auth/react';
// import { FormEventHandler, useState } from 'react';

interface Props{}


const Login: NextPage = (props): JSX.Element => {
  // const [authState, setAuthState] = useState({ email: "", password: ""});

  // const handleFieldChange = (e) => {
  //   setAuthState(old => ({ ...old, [e.target.id]: e.target.value }))
  // }

  // const handleAuth = async () => {
  //   signIn('credentials', {
  //     ...authState,
  //     redirect: false
  //   }).then(response =>{
  //     console.log(response)
  //   }).then(error => {
  //     console.log(error)
  //   })
  // }
  
  return (
    <div className='sign-in-form'> 
      <form>
        <h1>LOGIN</h1>
        <label>Email:</label>
        <input type="email" placeholder='john@email.com' />
        <label>Password:</label>
        <input type="password" placeholder='**********' />
        <input type="submit" value="Login" />
        {/* <button onClick={handleAuth} type="button" className='btn btn-primary'>
          Login
        </button> */}
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