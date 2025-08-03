import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {

   // Define the dark theme using Tailwind CSS classes.
  const darkTheme = {
    bgPrimary: 'bg-gray-900',
    bgCard: 'bg-gray-800',
    textPrimary: 'text-white',
    textSecondary: 'text-gray-400',
    bgAccent: 'bg-indigo-700',
    textAccent: 'text-white',
    inputBorder: 'border-gray-700',
    inputFocusRing: 'focus:ring-indigo-500',
    cardShadow: 'shadow-2xl',
    contactText: 'text-indigo-300',
    buttonBg: 'bg-indigo-600 hover:bg-indigo-700',
  };
  return (
       <div className={`min-h-screen font-inter ${darkTheme.bgPrimary} flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500 antialiased pt-20  animate-show`}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap');
          .font-inter {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>

      <div className={`max-w-4xl w-full ${darkTheme.bgCard} rounded-3xl ${darkTheme.cardShadow} overflow-hidden md:flex transition-colors duration-500`}>
      
        {/* Contact Information Section */}
        <div className={`md:w-1/3 bg-[#5f6dff] ${darkTheme.textAccent} p-8 sm:p-12 flex flex-col justify-between`}>
          <div>
            <h2 className="text-3xl font-extrabold mb-4">Contact Us</h2>
            <p className={`${darkTheme.contactText} text-lg mb-8`}>
              We'd love to hear from you. Please reach out with any questions or comments.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>1234 Tech Street, Innovation City, 56789</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail className="w-6 h-6 mr-3 flex-shrink-0" />
                <span>contact@company.com</span>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <span className="text-sm font-semibold text-blue-200">Connect with us</span>
            {/* Add social media icons here if desired */}
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="md:w-2/3 p-8 sm:p-12">
          <h3 className={`text-2xl font-bold ${darkTheme.textPrimary} mb-6`}>Send us a message</h3>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className={`block text-sm font-medium ${darkTheme.textSecondary}`}>
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={`mt-1 block w-full px-4 py-2 border ${darkTheme.inputBorder} rounded-md shadow-sm ${darkTheme.inputFocusRing} focus:border-transparent transition duration-150 ease-in-out bg-transparent ${darkTheme.textPrimary}`}
              />
            </div>
            <div>
              <label htmlFor="email" className={`block text-sm font-medium ${darkTheme.textSecondary}`}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={`mt-1 block w-full px-4 py-2 border ${darkTheme.inputBorder} rounded-md shadow-sm ${darkTheme.inputFocusRing} focus:border-transparent transition duration-150 ease-in-out bg-transparent ${darkTheme.textPrimary}`}
              />
            </div>
            <div>
              <label htmlFor="message" className={`block text-sm font-medium ${darkTheme.textSecondary}`}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className={`mt-1 block w-full px-4 py-2 border ${darkTheme.inputBorder} rounded-md shadow-sm ${darkTheme.inputFocusRing} focus:border-transparent transition duration-150 ease-in-out bg-transparent ${darkTheme.textPrimary}`}
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm bg-[#5f6dff] ${darkTheme.textAccent} focus:outline-none focus:ring-2 focus:ring-offset-2 ${darkTheme.inputFocusRing} transition duration-150 ease-in-out`}
              >
                {/* <Send className="w-5 h-5 mr-2" /> */}
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact