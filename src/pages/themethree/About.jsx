import React from 'react'
const teamMembers = [
  {
    name: 'Elara Vance',
    role: 'Chief Dreamer',
    imageUrl: 'https://picsum.photos/id/1027/200/200',
  },
  {
    name: 'Leo Aster',
    role: 'Lead Artisan',
    imageUrl: 'https://picsum.photos/id/1005/200/200',
  },
  {
    name: 'Willow Mae',
    role: 'Head of Happiness',
    imageUrl: 'https://picsum.photos/id/1011/200/200',
  },
];

function About() {
  return (
      <div className="min-h-screen bg-cream font-pacifico text-brand-brown antialiased pt-20 animate-show">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-5xl mx-auto text-center">
          
          <header className="mb-16">
            <h1 className="text-7xl md:text-8xl text-brand-brown tracking-wide">
              About Us
            </h1>
          </header>

          <section className="mb-20">
            <p className="text-3xl md:text-4xl leading-loose text-brand-brown/90">
              In a cozy nook, filled with the scent of old books and fresh paint, an idea was born. We are a small band of creators, thinkers, and makers, united by a simple passion: to craft beautiful experiences that bring a little warmth and wonder into the world.
            </p>
          </section>

          <div className="w-48 h-1 bg-brand-accent/50 mx-auto rounded-full my-16"></div>

          <section className="mb-20">
            <h2 className="text-5xl md:text-6xl text-brand-brown mb-6">
              Our Mission
            </h2>
            <p className="text-3xl md:text-4xl leading-loose text-brand-brown/90">
              To weave threads of joy and creativity into the fabric of everyday life, one delightful creation at a time.
            </p>
          </section>

          <div className="w-48 h-1 bg-brand-accent/50 mx-auto rounded-full my-16"></div>

          <section>
            <h2 className="text-5xl md:text-6xl text-brand-brown mb-16">
              Meet the Weavers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {teamMembers.map((member) => (
                <div className="flex flex-col items-center text-center p-6 bg-brand-rose rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 transform">
      <img
        src={member.imageUrl}
        alt={`Portrait of ${member.name}`}
        className="w-40 h-40 rounded-full object-cover border-4 border-white shadow-md mb-6"
      />
      <h3 className="text-3xl text-brand-brown">{member.name}</h3>
      <p className="text-2xl text-brand-accent mt-2">{member.role}</p>
    </div>
              ))}
            </div>
          </section>


        </div>
      </main>
    </div>
  )
}

export default About