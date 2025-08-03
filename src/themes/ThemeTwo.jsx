import React from 'react'
import { Outlet } from 'react-router-dom';

function ThemeTwo() {
  return (
    <div className='animate-show'>
    <Outlet/>

    </div>
  );
}

export default ThemeTwo