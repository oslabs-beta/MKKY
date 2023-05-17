//when there is layout.tsx, next.js goes to layout to render rather than just the page

'use client'
import {signOut} from 'next-auth/react';

export default function Something(){
    return (
        <div className='flex justify-center'>
        <h1 className='text-center'> MKKY </h1>
        <h2 className="mt-10">FUCK YESSSSSS</h2>
        <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000'})}> SignOut</button>
        </div>
      )
};

