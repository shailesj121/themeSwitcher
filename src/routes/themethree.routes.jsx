import React from 'react'
import Home from '../pages/themethree/Home'
import ThemeThree from '../themes/ThemeThree'
import About from '../pages/themethree/About'
import Contact from '../pages/themethree/Contact'

const themeThreeRouter = {
    path: '/themethree/',
    element: <ThemeThree/>,
    children: [
        {index: true, element: <Home/>},
        {path: "about", element: <About/>},
        {path: "contact", element: <Contact/>},
    ]
}
export default themeThreeRouter