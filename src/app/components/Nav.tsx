'use client'
import Link from 'next/link';
import Image from 'next/image';
import Something from './signOut/page';
import { useSession } from 'next-auth/react';

import {signIn} from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();
  // console.log('THE SESSION:', session?.user.email)
  return (
    <nav className='flex flex-row justify-between items-center bg-blue-900' id='navBar'>
      <div>
        <Link href="/" className='flex gap-3 flex-center'>
          <Image
            src='/MKKY_logo.svg'
            alt='Our Logo'
            width={80}
            height={90}
            className='pl-2'
          />
          {/* <button className='text-lg'>MKKY</button> */}
        </Link>
      </div>

      <div className="flex-none">
        {!session ? (
        
        <ul className="menu menu-horizontal px-1">
          <li className='mr-2'>
            {/* <Link href="/components/login" className='flex-initial'> */}
              <button className='btn btn-primary text-white' onClick={() => signIn("google", { callbackUrl: 'http://localhost:3000/components/home'}) }>Login With Google</button>
            {/* </Link> */}
          </li>
          {/* <li>
            <Link href="/components/signUp" className='flex-initial'>
              <button className="btn btn-secondary">Sign Up</button>
            </Link>
          </li> */}
          
        </ul>) : (
          
          <Something/>)}
      </div>
    </nav>
  )
}

export default Nav