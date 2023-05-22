'use client'

import Image from 'next/image';
import Link from 'next/link';

const Welcome: React.FC = () => {
  return (
    <div className='flex justify-center'>
    <h1 className='text-center'> MKKY </h1>
    <button className="btn btn-primary mt-10">Button</button>
    <Link href = "/components/home">GO TO HOME</Link>
    </div>
  );
};

export default Welcome;