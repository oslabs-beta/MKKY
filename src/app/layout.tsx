import './globals.css'
import React from 'react';
import Nav from './components/Nav'
// import { Inter } from 'next/font/google'
import Provider from './Providers';

//const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PGQL',
  description: 'SQL Visual Excel Database',
}


const Rootlayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  
  return (
    <html>
      <link
        rel='icon'
        href='/MKKY_logo.svg'
        sizes='any'
        />
      <body>
        <Provider>
          <Nav />
        {children}
        </Provider>
      </body>
    </html>
  )
}
export default Rootlayout;