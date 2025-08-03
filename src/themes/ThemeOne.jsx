import React from 'react'
import { Outlet } from 'react-router-dom';

function ThemeOne() {
    return (
      <>
      <div className='roboto animate-show'>
        <Outlet/>
      </div>
      </>
  );
}

export default ThemeOne