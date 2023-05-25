import './globals.css'
import React from 'react';
import Nav from './components/Nav'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'OSP Project',
  description: 'SQL Visual Excel Database',
}


const Rootlayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  
  return (
    <html>
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