import React from 'react'

function About() {
  return (
        <div className="bg-gray-900 text-gray-200 min-h-screen font-sans pt-16  animate-show">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            We are a collective of innovators, problem-solvers, and dreamers dedicated to creating impactful solutions for a better tomorrow.
          </p>
        </section>

        {/* Our Mission & Vision Section */}
        <section className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">
              Our Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Our mission is to empower businesses and individuals with cutting-edge technology that simplifies their lives. We strive to be a catalyst for positive change, delivering solutions that are both powerful and intuitive.
            </p>
          </div>
          <div className="bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-indigo-400 mb-4">
              Our Vision
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We envision a world where technology seamlessly integrates into daily life, fostering creativity, collaboration, and growth. We are committed to building that future through relentless innovation and a customer-first approach.
            </p>
          </div>
        </section>

        {/* Our Team Section */}
        <section className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Meet Our Team
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://placehold.co/150x150/4A5568/E2E8F0?text=Jane" 
                alt="Team member Jane Doe" 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Jane Doe</h3>
              <p className="text-gray-400 text-sm">CEO & Founder</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://placehold.co/150x150/4A5568/E2E8F0?text=John" 
                alt="Team member John Smith" 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">John Smith</h3>
              <p className="text-gray-400 text-sm">Lead Developer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://placehold.co/150x150/4A5568/E2E8F0?text=Emily" 
                alt="Team member Emily Chen" 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Emily Chen</h3>
              <p className="text-gray-400 text-sm">Product Designer</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
              <img 
                src="https://placehold.co/150x150/4A5568/E2E8F0?text=Mark" 
                alt="Team member Mark Johnson" 
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Mark Johnson</h3>
              <p className="text-gray-400 text-sm">Marketing Lead</p>
            </div>
          </div>
        </section>

      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>

    </div>
  )
}

export default About