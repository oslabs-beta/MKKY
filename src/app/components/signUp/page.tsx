'use client';
import { NextPage } from 'next';

interface Props{}

import {signIn} from 'next-auth/react';
import { useState } from 'react';
import clientPromise from "../../api/auth/lib/mongodb";
import User from "../../model/user";

const Signup: NextPage = (props): JSX.Element => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const signupRequest = async (e:any) => {
  //   e.preventDefault();
  //   const requestBody = {
  //     email: email,
  //     password: password
  //   }
  //   const response = await fetch('/api/auth/signUpRoute', {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify(requestBody), // body data type must match "Content-Type" header
  //   });
  //   const data = await response.json(); 
  //   console.log(data)
  // }
  return (
    <div className='sign-in-form'> 
      <form 
      // action="../../api/auth/[...nextauth]/route" method = "POST"
        // onSubmit={(e) => signupRequest(e)}
      >
        <h1>SIGNUP</h1>
        <input 
          className='bg-white'
          type="email" placeholder='john@email.com' 
          // onChange={(e) => {
          // setEmail(e.target.value)
          // console.log(email) 
          // }
        // }
        />
        <input 
          className='bg-white'
          type="password" placeholder='**********' 
      //     onChange={(e) =>{ 
      //     setPassword(e.target.value)
      //     console.log(password) 
      // }
      // }
      />
        <input type="submit" value="Signup" />
        <button onClick={() => signIn('google', { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
            Sign Up With Google
        </button>
        <button onClick={() => signIn('github', { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
            Sign Up With Github
        </button>
      </form>
    </div>
  )
}

export default Signup