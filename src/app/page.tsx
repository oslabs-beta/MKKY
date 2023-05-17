// import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <div className='flex justify-center'>
    <h1 className='text-center'>MKKY</h1>
    <Link href='/components/login'
    className='text-center mt-6'>
    Sign In
    </Link>
    <Link href='/components/signUp'
    className='text-center mt-10'>
    Sign Up
    </Link>
    </div>
  )
}