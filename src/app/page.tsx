import React from 'react';
import './globals.css'
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
          <div className = 'column4'>
            <img className = 'carosel' src = 'https://cdn.gruntwork.io/gruntwork-website/24f52ffe0ccbd746c2103814e50fe009.png'></img>
          </div>
          <div className = 'column4'>
            <img className = 'carosel' src = 'https://logos-world.net/wp-content/uploads/2021/02/Google-Cloud-Symbol.png'></img>
          </div>
          <div className = 'column4'>
            <img className = 'carosel' src = 'https://www.ecocloudservices.com/wp-content/uploads/2020/03/Azure.png'></img>
          </div>
          <div className = 'column4'>
            <img className = 'carosel' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/DigitalOcean_logo.svg/768px-DigitalOcean_logo.svg.png'></img>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;