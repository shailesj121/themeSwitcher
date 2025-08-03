import React, { useContext, useState, useEffect } from 'react'
import { PageDataContext } from '../../context/data.Context';

const getPlaceholderImage = (id) => `https://placehold.co/400x300/F0F0F0/000000?text=Product+${id}`;

function Home() {
  const [data, setData] = useContext(PageDataContext);
  const [products, setProducts] = useState([]);
  const [catagories, setCatagories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const totalPages = Math.ceil(data?.products?.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);


  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    setProducts(data?.products?.slice(startIndex, endIndex));
  }, [currentPage, data]);

  useEffect(() => {
    if (!data) return
    let category = [];
    data.products?.forEach((product) => {
      // Skip if category is undefined or null
      if (!product.category) return;

      // Add category only if it doesn't exist in the array
      if (!category.includes(product.category)) {
        category.push(product.category);
      }
    });

    if (category.length === 0) return
    setCatagories(category)
  }, [data])

  console.log(data)

  return (
    <div className="bg-black font-sans text-gray-800 antialiased  animate-show">
      <section className="min-h-screen flex items-center justify-center p-4">
        <div className="container mx-auto py-16 px-4 md:px-8 lg:px-16">
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">

            <div className="w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl text-[#FFF2DF] lg:text-6xl font-bold leading-tight animate-text">
                Experience Media Like  <span className='text-[#F19C6C]'>Never Before</span>
              </h1>
              <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-xl mx-auto md:mx-0 animate-sub-text">
                Enjoy award-winning stereo beats with wireless listening freedom and sleek,
                streamlined with premium padded and delivering first-rate playback.
              </p>
              <a href="#" className="aniamte-button mt-8 inline-flex items-center justify-center px-8 py-4 text-black font-semibold rounded-full shadow-lg bg-white transition duration-300 ease-in-out transform hover:-translate-y-1">
                Discover Now
                <svg className="ml  -2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>

            <div className="w-full md:w-1/2 lg:w-2/5 flex justify-center relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-gray-800 opacity-50 rounded-full w-80 h-80 md:w-96 md:h-96 smooth-shadow-filter"></div>
              </div>
              <img
                src="/images/headphone.png"
                alt="A pair of black headphones"
                className="relative z-10 w-64 md:w-80 h-auto rounded-3xl animate-image-effect"
                onError="this.src='https://placehold.co/600x600/1e293b/d1d5db?text=Headphones';"
              />
            </div>
          </div>
        </div>
      </section>

      <section className='flex'>
        <aside className="w-64 h-screen sticky top-0 p-6 h-full border-r border-gray-700 shadow-xl hidden md:flex flex-col rounded-r-2xl">
          <div className="mb-10">
            <h2 className="text-3xl font-extrabold text-white">Categories</h2>
          </div>
          <nav className="flex-grow space-y-4">
            {catagories?.map((category) => (
              <a href="#" className="block p-4 rounded-xl text-gray-300 border-1 hover:bg-teal-500 hover:text-white transition-colors duration-200">
                {category}
              </a>
            ))}
          </nav>
        </aside>
        <div className="flex-1 p-8 relative add-radial-glow">
          {/* Search and Filter Dropdowns */}
          <div className="mb-6 flex justify-between flex-col md:flex-row gap-4 flex-wrap">
            <h1 className="text-center md:text-left text-3xl md:text-4xl font-extrabold text-white mb-8 mr-[15px]">Featured Products</h1>
            <div className='flex sm:gap-4 gap-y-4 justify-between sm:justify-end flex-1 flex-wrap sm:flex-nowrap'>
              <input
                type="text"
                id="search-input"
                placeholder="Search products..."
                // value={searchTerm}
                // onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full  md:flex-1 px-4 py-2  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white h-[max-content]"
              />

              <select
                id="category-select"
                // value={selectedCategory}
                // onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full  max-w-[48%] sm:max-w-[150px]  px-4 py-2  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white h-[max-content]"
              >
                <option value="all">All Categories</option>
                {catagories.map(category => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>

              <select
                id="brand-select"
                // value={selectedBrand}
                // onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full max-w-[48%] sm:max-w-[150px] md:w-48 px-4 py-2  border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all text-white h-[max-content]"
              >
                <option value="all">All Brands</option>
                {/* {brands.map(brand => (
                                  <option key={brand} value={brand}>
                                      {brand.charAt(0).toUpperCase() + brand.slice(1)}
                                  </option>
                              ))} */}
              </select>
                          
            </div>
          </div>

          {/* <div className="grid relative z-[1] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">

           {products?.map((product) => (
            <div className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden border border-gray-800">
              <div className='relative mask-image'>
                <img 
              src={product?.image}
              alt="Cool Gadget" 
              className="w-full h-48 object-cover"
            />
              </div>
            
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-2 line-clamp-1">{product?.title}</h3>
              <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                {product?.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-3xl font-bold text-orange-500">${product?.price}</span>
                <button className="bg-orange-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-orange-600 transition-colors duration-200 shadow-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
           ))}
        </div> */}

          {products?.length === 0 ? (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl font-medium text-gray-400">No products found for these filters.</p>
            </div>
          ) : (
            // List of product items
            <div className="flex flex-col space-y-4">
              {products?.map((product) => {
                // Calculate the final price after discount
                const finalPrice = product.price - (product.price * product.discount / 100);
                return (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row items-center border-1 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden p-4 sm:p-6 space-y-4 sm:space-y-0 sm:space-x-6"
                  >
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-32 h-32 object-cover object-center rounded-lg flex-shrink-0"
                      onError={(e) => e.target.src = getPlaceholderImage(product.id)}
                    />
                    <div className="flex-1 flex flex-col md:flex-row md:items-start justify-between space-y-2 md:space-y-0">
                      <div className="flex-1">
                        <span className="text-sm font-medium text-[#F19C6C] uppercase tracking-wide">
                          {product.category}
                        </span>
                        <h3 className="text-xl font-bold text-gray-100 leading-tight line-clamp-1 max-w-[350px]">
                          {product.title}
                        </h3>
                        <p className="text-sm text-gray-400 mt-1">
                          {product.brand} - {product.model}
                        </p>
                        <p className="text-sm text-gray-300 mt-2 md:block line-clamp-2">
                          {product.description.substring(0, 150)}...
                        </p>
                      </div>
                      <div className="flex md:flex-col items-end space-y-1 md:ml-4">
                        <p className="text-2xl sm:text-3xl font-extrabold text-gray-200">
                          ${finalPrice.toFixed(2)}
                        </p>
                        {product.discount > 0 && (
                          <p className="text-sm text-gray-400 line-through">
                            ${product.price.toFixed(2)}
                          </p>
                        )}
                        <button className="bg-[#F19C6C] text-white ml-[auto] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200 mt-2">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}


          <div className="flex justify-center items-center gap-2 mt-10">
            {/* Previous button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
              {"<<"}
            </button>

            {/* Page number buttons */}
                 {pageNumbers.filter((number) => number === currentPage || number === currentPage - 1 || number === currentPage + 1).map((number) => (<button key={number} onClick={() => handlePageChange(number)} className={`py-2 px-4 rounded-md transition-colors duration-200 ${currentPage === number
          ? "bg-orange-400 text-white font-semibold"
          : "bg-white text-gray-700 hover:bg-gray-100"
      }`}
    >
      {number}
    </button>
))}


            {/* Next button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
            >
             {">>"}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home