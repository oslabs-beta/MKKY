import './globals.css'
import React from 'react';
import Nav from './components/Nav'

export const metadata = {
  title: 'OSP Project',
  description: 'SQL Visual Excel Database',
}


const Rootlayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return(
    <div>
      <Nav />
      {children}
    </div>
  )
}
export default Rootlayout;