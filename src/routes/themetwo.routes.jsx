import React from 'react'
import Home from '../pages/themetwo/Home'
import ThemeTwo from '../themes/ThemeTwo'
import About from '../pages/themetwo/About'
import Contact from '../pages/themetwo/Contact'

const themeTwoRouter = {
    path: '/themetwo/',
    element: <ThemeTwo/>,
    children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "contact", element: <Contact/>},
    ]
}


export default themeTwoRouter