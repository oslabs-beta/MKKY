'use client'
import React from 'react';
import './globals.css'
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import Link from 'next/link';



const Welcome: React.FC = () => {
  const { data: session } = useSession();
  return (
    <div>

      <div className="test flex flex-col items-center">
      {!session ? (null) : (
        <div className='returnURI'>
          <Link href='/components/home'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white py-3.5 px-200 border rounded' id='return-home'>
             Visualize Database
            </button>
          </Link>
        </div>
      )}
        <p className="text-lg mt-5">MKKY PRESENTS: </p>
        <h1 className="text-5xl font-bold">PostGres-Query-Less</h1>
        <p className="text-lg mt-5">Visually Interact with your Cloud PostgreSQL Database</p>
      </div>
      <br></br>

      <div className="row2" id='aboutDiv'>
        <div className = 'column25'>
        <h1 className="text-3xl  p-10">About PGQL</h1>

          <p className="text-lg mt-5 px-10 test3 " id='about'>PostGres-Query-Less(PGQL) is an open-source web application that can be used to connect to any cloud PostgreSQL database to visualize and adjust it's content. We strive to provide our users with a simple interface to communicate with their cloud databases through onClick functionality. When users make changes in their visualized database, queries are automated to adjust their databases directly in real-time.</p>
          <hr></hr>
          </div>
        
      </div>
      
      <div className="row2" id='aboutDiv'>
        
        <div className = 'column75'>
          <Image src='/ourGif.gif' alt="our-gif" height={800} width={800} className = ''></Image> 
        </div>
        
      </div>
      <br></br>

      <div className='carousel-layout'>
        <h1 className='text-3xl font-bold p-10' id='carousel-heading' >Compatible Cloud Providers:</h1>

        <div className = 'row4'>
          <div className = 'column4' id='divimg1'>
            <img className='carousel' id='img1'src='https://cdn.gruntwork.io/gruntwork-website/24f52ffe0ccbd746c2103814e50fe009.png'></img>
          </div>
          <div className='column4' id='divimg2'>
            <img className='carousel' id='img2' src='https://www.freecodecamp.org/news/content/images/2020/10/gcp.png'></img>
          </div>
          <div className='column4' id='divimg3'>
            <img className='carousel' id='img3' src='https://www.imagar.com/wp-content/uploads/2018/06/azure.png'></img>
          </div>
          <div className='column4' id='divimg4'>
            <img className='carousel' id='img4' src='https://www.digitalocean.com/_next/static/media/do-opensource.b0d0088f.svg'></img>
          </div>
        </div>
      </div>
      <div id='container-team' className='test4'>
        <div id='creatorDiv'>
        <h1 className='test5 text-3xl font-bold text-center'>Meet the Team</h1>
        <Image className='test5' src='/teampic.svg' alt = 'group-pic' height={700} width={700}/>
      </div>
      </div>
    </div>
  );
};

export default Welcome;
