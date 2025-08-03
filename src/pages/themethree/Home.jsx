import { useState } from 'react';
import { Star, Plus, MapPin } from 'lucide-react';

// A helper component to render star ratings
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center text-yellow-500">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={14} fill="currentColor" className="mr-0.5" />
      ))}
      {hasHalfStar && <Star size={14} fill="currentColor" className="mr-0.5" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={14} className="text-gray-300 mr-0.5" />
      ))}
      <span className="ml-2 text-xs font-semibold text-gray-600">
        {rating.toFixed(1)} star rating
      </span>
    </div>
  );
};

// ProductCard component for displaying a product in the new style
const ProductCard = ({ title, description, image, price, rating, location }) => {
  return (


    <div
      className="w-full bg-white rounded-2xl shadow-lg overflow-hidden 
                 transition-all duration-300 transform hover:shadow-2xl"
    >
      {/* Product image container */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-t-2xl"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://placehold.co/600x400/e5e7eb/4b5563?text=Product";
          }}
        />
        {/* Placeholder for an action button on the image, like in the reference image */}
        <div className="absolute top-4 right-4 p-2 rounded-full bg-emerald-500 text-white shadow">
          <Plus size={20} />
        </div>
      </div>

      {/* Product details section */}
      <div className="p-4">
        {/* Title and location */}
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-xl font-bold text-gray-800" style={{ fontFamily: 'Pacifico, cursive' }}>
            {title}
          </h2>
          <div className="flex items-center text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
            <MapPin size={16} className="mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>

        {/* Description and price/rating */}
        <p className="text-sm text-gray-500 mb-3" style={{ fontFamily: 'Pacifico, cursive' }}>
          {description}
        </p>

        <div className="flex justify-between items-center">
          <StarRating rating={rating} />
          <p className="text-lg font-extrabold text-gray-900" style={{ fontFamily: 'Pacifico, cursive' }}>
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Home component
const Home = () => {
  // Mock data for the products with images and ratings
  const productData = [
    {
      title: 'Headphones',
      description: 'Noise-cancelling audio for an immersive experience.',
      image: 'https://placehold.co/600x400/d1d5db/4b5563?text=Headphones',
      price: '$129.99',
      rating: 4.5,
      location: 'New York',
    },
    {
      title: 'Digital Camera',
      description: 'Capture your memories with high-resolution clarity.',
      image: 'https://placehold.co/600x400/e5e7eb/4b5563?text=Camera',
      price: '$499.00',
      rating: 4.8,
      location: 'Los Angeles',
    },
    {
      title: 'Laptop',
      description: 'Powerful and portable, designed for productivity.',
      image: 'https://placehold.co/600x400/f3f4f6/4b5563?text=Laptop',
      price: '$1,299.99',
      rating: 4.6,
      location: 'London',
    },
    {
      title: 'Smartwatch',
      description: 'Stay connected and track your fitness goals effortlessly.',
      image: 'https://placehold.co/600x400/d1d5db/4b5563?text=Smartwatch',
      price: '$249.50',
      rating: 4.2,
      location: 'Paris',
    },
    {
      title: 'Wireless Mouse',
      description: 'Ergonomic design for comfortable, all-day use.',
      image: 'https://placehold.co/600x400/e5e7eb/4b5563?text=Mouse',
      price: '$39.99',
      rating: 4.1,
      location: 'Berlin',
    },
    {
      title: 'Star Projector',
      description: 'Transform your room into a captivating galaxy.',
      image: 'https://placehold.co/600x400/f3f4f6/4b5563?text=Projector',
      price: '$59.99',
      rating: 4.9,
      location: 'Tokyo',
    },
  ];

  return (
    // Overall page container with a teal background and animated SVGs
    <div className="min-h-screen bg-teal-900 flex items-center justify-center p-8 relative overflow-hidden pt-22 animate-show">

      {/* Animated SVG elements as a background layer */}
      <style>
        {`
        /* Import the Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');

        @keyframes float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-20px, -20px); }
        }
        @keyframes float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(20px, 20px); }
        }
        @keyframes float-3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(15px, -15px); }
        }
        `}
      </style>
      <svg className="absolute w-20 h-20 text-teal-300 opacity-20" style={{ top: '10vh', left: '5vw', animation: 'float-1 10s ease-in-out infinite' }}>
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg className="absolute w-12 h-12 text-emerald-300 opacity-20" style={{ bottom: '15vh', right: '10vw', animation: 'float-2 12s ease-in-out infinite' }}>
        <circle cx="50" cy="50" r="50" />
      </svg>
      <svg className="absolute w-16 h-16 text-cyan-300 opacity-20" style={{ top: '40vh', right: '25vw', animation: 'float-3 14s ease-in-out infinite' }}>
        <circle cx="50" cy="50" r="50" />
      </svg>

      {/* Container for the grid, centered and with max width */}
      <div className="max-w-7xl mx-auto p-4 z-10" style={{ fontFamily: 'Pacifico, cursive' }}>
        {/* Main heading to give context */}
        <h1
          className="text-4xl md:text-5xl font-extrabold text-white text-center mb-10 tracking-wide"
        >
          Product Feed
        </h1>

        {/* Side column for additional content */}
        <div className='min-h-screen bg-teal-900 flex flex-col md:flex-row relative overflow-hidden p-8'>

          <div className="w-full md:w-1/3 lg:w-1/3 p-4 z-10">
            <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4" style={{ fontFamily: 'Pacifico, cursive' }}>
                Featured
              </h2>
              <p className="text-gray-600" style={{ fontFamily: 'Pacifico, cursive' }}>
                This is a placeholder for a new side column. You can add filters, a search bar, or other relevant information here to enhance the user experience.
              </p>
            </div>
          </div>
          <div className='flex-1'>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productData.map((product, index) => (
                <ProductCard
                  key={index}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  location={product.location}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
