import React from 'react'

function About() {
  return (
        <div className="bg-gray-50 text-gray-800 min-h-screen pt-16  animate-show">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
        
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            About Our Company
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a team of passionate creators dedicated to building innovative solutions that make a difference.
          </p>
        </section>

        {/* Our Story Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Story
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Founded in [Year], our journey began with a simple idea: to [describe initial idea or mission]. Over the years, we've grown from a small startup into a thriving company, guided by our core values of innovation, integrity, and customer success. We believe in the power of technology to solve complex problems and are committed to creating products that are not only functional but also delightful to use.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every project we undertake is an opportunity to learn and grow. We collaborate closely with our clients and partners, turning visions into reality. Our team is the heart of our success, and we foster a culture of creativity, respect, and continuous improvement.
            </p>
          </div>
          <div className="overflow-hidden rounded-xl shadow-lg">
            {/* Placeholder Image */}
            <img 
              src="https://placehold.co/600x400/D1D5DB/1F2937?text=Our+Story" 
              alt="Team working together" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Our Mission Section */}
        <section className="text-center">
          <div className="bg-indigo-50 p-8 md:p-12 rounded-xl shadow-inner">
            <h2 className="text-3xl md:text-4xl font-bold text-indigo-800 mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-indigo-700 max-w-4xl mx-auto">
              To empower businesses and individuals with cutting-edge solutions that simplify their lives and help them achieve their goals. We are driven by a commitment to excellence and a desire to make a lasting, positive impact on the world.
            </p>
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

export default About