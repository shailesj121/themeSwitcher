import React, { createContext, useEffect, useState } from 'react'
import { fetchProduct } from '../services/FatchProduct.service'
  
  export const PageDataContext = createContext()

    const heroSection = {
        heading: "Unlock Your Potential with Our Amazing Service",
        subHeading: "Discover innovative solutions designed to streamline your workflow and boost your productivity.",
        button: "Learn More"
    }
    const aboutPageContent = {
        heading: 'About Our Company',
        subheading: 'We are a team of passionate creators dedicated to building innovative solutions that make a difference.',
        pehragraph: [
            'Welcome to our demo application! We are dedicated to providing high-quality products and an excellent user experience. This demonstration showcases a responsive web layout built with React and Tailwind CSS, featuring dynamic content display.'
            ,
            'Our mission is to create intuitive and visually appealing web applications that adapt seamlessly to any device. Thank you for exploring our work!'
        ]
    }
    const contactPageContent = {
        heading: 'Contact Us',
        subHeading: 'Have questions or feedback? Feel free to reach out to us using the form below, or through our contact details.',
        OurDetails: {
            heading:'Our Contact Details',
            email: 'Email: info@example.com',
            phone: '+1 (234) 567-890',
            address: '123 Demo Street, Suite 100, Anytown, USA 12345'
        }
    }

  function ThemeContent({children}) {
      const [content, setContent] = useState({})

      useEffect(()=> {
          setContent({
              heroSection,
              aboutPageContent,
              contactPageContent
          })
      }, [])

      useEffect(()=> {
      async function newProducts(){
          const products =  await fetchProduct();
          setContent(prev => ({...prev, products}))
        }

        newProducts()
      }, [])



    return (
      <PageDataContext.Provider value={[content, setContent]}>
          {children}
      </PageDataContext.Provider>
    )
  }

export default ThemeContent