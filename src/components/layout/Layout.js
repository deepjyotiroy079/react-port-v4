import React from 'react'
import Navbar from '../Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className='content'>
        <Navbar />
        { children }
        
    </div>
  );
}

export default Layout