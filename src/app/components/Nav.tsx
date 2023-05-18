import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
  return (
    <nav className='flex flex-row justify-between items-center'>
      <div>
        <Link href="/" className='flex gap-3 flex-center'>
          <Image
            src='/mkky.svg'
            alt='Our Logo'
            width={50}
            height={50}
            className='pl-2'
          />
          <button className='text-lg'>MKKY</button>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='mr-2'>
            <Link href="/components/login" className='flex-initial'>
              <button className='text-lg'>Login</button>
            </Link>
          </li>
          <li>
            <Link href="/components/signUp" className='flex-initial'>
              <button className='text-lg'>Sign Up</button>
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  )
}

export default Nav