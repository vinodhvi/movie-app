import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
   <footer className='py-3 text-center bg-neutral-600 bg-opacity-35 text-neutral-400'>
     <div className='flex items-center justify-center gap-4'>
     <Link to="/">About</Link>
      <Link to="/">Contact</Link>
      <Link to="/">Shows</Link>
      </div>
      <p className='text-sm'>Created by practice</p>
   </footer>
  )
}

export default Footer