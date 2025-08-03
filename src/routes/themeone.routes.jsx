import React from 'react'
import ThemeOne from '../themes/ThemeOne'
import Home from '../pages/themeone/Home'
import About from '../pages/themeone/About'
import Contact from '../pages/themeone/Contact'

const ThemeOneRouter = {
    path: '/themeone/',
    element: <ThemeOne/>,
    children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "contact", element: <Contact/>},
    ]
}



export default ThemeOneRouter