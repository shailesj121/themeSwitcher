import React from 'react'

function Contact() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen font-sans  animate-show">


      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you. Please fill out the form below or reach out to us using our contact information.
          </p>
        </section>

        {/* Contact Form & Info Section */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="john.doe@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-bold py-3 px-6 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Contact Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-indigo-600 mt-1">
                    {/* Location Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                  </span>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600">123 Main Street<br />City, State, 12345</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 mt-1">
                    {/* Phone Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.5l1 4h-4.5V9h5.5l1 4h-4.5v5h4.5l1 4h-4.5a2 2 0 01-2-2v-2"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 9a6 6 0 00-6-6h-3.5L10.5 7h4.5v2h-5.5L8 13h4.5v5H8.5a2 2 0 01-2-2v-2"></path></svg>
                  </span>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Phone</p>
                    <p className="text-gray-600">(123) 456-7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-indigo-600 mt-1">
                    {/* Email Icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </span>
                  <div className="ml-3">
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">contact@yourcompany.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-gray-100 text-gray-600 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default Contact