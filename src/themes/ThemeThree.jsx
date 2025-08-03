import React from 'react'
import { Outlet } from 'react-router-dom'

function ThemeThree() {
  return (
    <div className='animate-show Pacifico'>
            <Outlet />
    </div>
  )
}

export default ThemeThree