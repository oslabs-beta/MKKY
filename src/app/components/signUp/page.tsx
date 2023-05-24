'use client';
import { NextPage } from 'next';

interface Props{}

import {signIn} from 'next-auth/react';
import clientPromise from "../../api/auth/lib/mongodb";
import User from "../../model/user";


const Signup: NextPage = (props): JSX.Element => {
  return (
    <div className='sign-in-form'> 
      <form 
      // action="../../api/auth/[...nextauth]/route" method = "POST"
      >
        <h1>SIGNUP</h1>
        <input type="email" placeholder='john@email.com' />
        <input type="password" placeholder='**********' />
        <input type="submit" value="Signup" />
        <button onClick={() => signIn(undefined, { callbackUrl: 'http://localhost:3000/components/home'}) } type="button" className='btn btn-primary'>
            Sign Up With Auth
        </button>
      </form>
    </div>
  )
}

export default Signup