import React, { useContext, useState, useEffect } from "react";
import { PageDataContext } from "../../context/data.Context";

function Home() {
  const [data, setData] = useContext(PageDataContext);
  const [products, setProducts] = useState([]);
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

  return (
    <>
      <section className="bg-yellow-50 overflow-hidden  animate-show">
        <div className="flex flex-col lg:flex-row lg:items-stretch lg:min-h-[800px]">
          <div className="relative flex items-center  justify-center lg:justify-start w-full lg:order-2 lg:w-7/12">
            <div className="absolute bottom-0 right-0 hidden lg:block">
              <img
                className="object-contain w-auto h-48"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                alt=""
              />
            </div>

            <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-32 lg:py-24 lg:text-left">
              <h1 className="text-4xl max-w-[600px] font-bold text-black sm:text-4xl xl:text-6xl animate-text">
                {data?.heroSection?.heading}
              </h1>
              <p className="my-8 text-xl max-w-[600px] text-black animate-sub-text ">
                {data?.heroSection?.subHeading}
              </p>
              <button
                type="submit"
                className="inline-flex items-center justify-center w-full px-4 py-4 mt-4 font-semibold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-full sm:w-auto sm:mt-0 hover:bg-orange-600 focus:bg-orange-600 aniamte-button"
              >
                {data?.heroSection?.button}
              </button>
              <p className="mt-5 text-base text-black">
                Instant access . No credit card required
              </p>
            </div>

            <div className="absolute right-0 z-10 -bottom-16 lg:top-24 lg:-left-20">
              <img
                className="w-32 h-32 md:w-40 md:h-40 animate-rotate"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/circular-text.png"
                alt=""
              />
            </div>
          </div>

          <div className="relative w-full overflow-hidden lg:order-1 h-96 lg:h-auto lg:w-5/12">
            <div className="absolute inset-0">
              <img
                className="object-cover w-full h-full scale-150"
                src="/images/background-img.jpg"
                alt=""
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="p-4 sm:p-6 lg:p-8 mt-12">
        <div className="container mx-[auto]  max-w-7xl">
          <div>
            <h1 className="text-3xl lg:text-6xl  font-extrabold text-gray-900 mb-4 sm:mb-6 text-center">
              Our Featured Products
            </h1>
            <p className="text-base mx-[auto] max-w-2xl sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-center">
              Discover a selection of our high-quality products, showcasing a
              responsive design. These cards adapt beautifully to any screen
              size.
            </p>

            <div className="flex justify-center mb-8 sm:mb-10">
              <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                View All Products
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl group shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl flex flex-col"
              >
                {/* Product Image */}
                <div className="relative w-full h-48 flex items-center justify-center overflow-hidden">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="w-full h-full object-contain p-4" // object-contain to prevent cropping
                  />
                  <span className="opacity-0 group-hover:opacity-100 absolute p-[2px_18px] rounded-[20px] bg-[#ffdbb1] text-[#ff8217] left-[8px] top-[12px] transition-opacity duration-300 capitalize">{product?.category}</span>
                </div>

                {/* Product Details */}
                <div className={`p-4 flex flex-col flex-grow`}>
                  <div className="flex justify-between items-center pb-4 border-b-[2px] border-[#a2a2a2] mb-[20px] mt-[-20px] ">
                    
                    <span title={product.color} style={{backgroundColor: product.color}} className={`productcolor `}></span>
                    <span className="bg-[#689fc7] group-hover:translate-y-[-5px] hover:bg-[#689fc7] text-white text-sm font-medium py-[2px] px-4 rounded-full transition duration-300 ease-in-out">
                      ${product.price.toFixed(2)} 
                    </span>
                  </div>
                  <h5 className=" text-xs font-medium text-gray-500">Model: {product.model}</h5>

                  <h3
                    className="text-2xl mb-3 font-bold text-[#606060]  line-clamp-1"
                    title={product.title}
                  >
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#555] font-medium  mb-3 line-clamp-3">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 mt-10">
            {/* Previous button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                currentPage === 1
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
              className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {">>"}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
