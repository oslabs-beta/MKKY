import React from 'react';
import './globals.css'
import Image from 'next/image';

const Welcome: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <p className="text-lg mt-5">MKKY PRESENTS: </p>
        <h1 className="text-5xl font-bold">PostGres-Query-Less</h1>
        <p className="text-lg mt-5">Visually Interact with your Cloud PostgreSQL Database</p>
      </div>
      <br></br>
      <br></br>
      <div className='carosel-layout'>
        <h1 className='text-4xl' id='carosel-heading' >Compatible Cloud Providers:</h1>
        <div className = 'row4'>
          <div className = 'column4' id='divimg1'>
            <img className='carosel' id='img1'src='https://cdn.gruntwork.io/gruntwork-website/24f52ffe0ccbd746c2103814e50fe009.png'></img>
          </div>
          <div className='column4' id='divimg2'>
            <img className='carosel' id='img2' src='https://www.freecodecamp.org/news/content/images/2020/10/gcp.png'></img>
          </div>
          <div className='column4' id='divimg3'>
            <img className='carosel' id='img3' src='https://www.imagar.com/wp-content/uploads/2018/06/azure.png'></img>
          </div>
          <div className='column4' id='divimg4'>
            <img className='carosel' id='img4' src='https://www.digitalocean.com/_next/static/media/do-opensource.b0d0088f.svg'></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;