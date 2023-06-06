//when there is layout.tsx, next.js goes to layout to render rather than just the page

'use client'
import Link from 'next/link';
import {signOut} from 'next-auth/react';

export default function Something(){
    return (
        <div className='flex justify-center'>
          <Link href="/" className='flex-initial'>
            <button onClick={() => signOut({ callbackUrl: 'http://localhost:3000'})} className='btn btn-secondary' >Sign Out</button>
          </Link> 
        </div>
        
      )
};

