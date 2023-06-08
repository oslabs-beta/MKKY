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
      <div className='flex flex-row '>
        <Link href="/" className='flex gap-3 flex-center'>
          <Image
            src='/MKKY_logo.svg'
            alt='Our Logo'
            width={100}
            height={110}
            className='pl-2'
          />
        
        </Link>
        <Link href='https://github.com/oslabs-beta/MKKY' className='flex flex-center ml-4'>
        <Image src='/pngegg.png' alt='Github-pic' height={10} width={90} className='float-left'/>
        </Link>
       
      </div>
      <div>
      </div>


      <div className="flex-none">
        {!session ? (
        
        <ul className="menu menu-horizontal px-1">
          <li className='mr-2'>
            {/* <Link href="/components/login" className='flex-initial'> */}
              <button className='btn btn-primary text-white' onClick={() => signIn("google", { callbackUrl: '/components/home'}) }>Login With Google</button>
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