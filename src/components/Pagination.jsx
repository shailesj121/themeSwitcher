import React, { useEffect, useState } from 'react';

function Pagination({products, setProductToDisplay}) {
    const [currentPage, setCurrentPage] = useState(1);
    if(!products) return;

    const productsPerPage = 8;
    const totalPages = Math.ceil(products?.length / productsPerPage);
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(()=>{
    setProductToDisplay(products.slice(startIndex, endIndex))
    }, [])

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
        <div className="flex justify-center items-center gap-2 mt-10">
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                    currentPage === 1 ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
                Previous
            </button>

            {pageNumbers.map(number => (
                <button
                    key={number}
                    onClick={() => handlePageChange(number)}
                    className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                        currentPage === number ? 'bg-indigo-600 text-white font-semibold' : 'bg-white text-gray-700 hover:bg-gray-100'
                    }`}
                >
                    {number}
                </button>
            ))}

            <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`py-2 px-4 rounded-md transition-colors duration-200 ${
                    currentPage === totalPages ? 'bg-gray-200 text-gray-400 cursor-not-allowed' : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
            >
                Next
            </button>
        </div>
  )
}

export default Pagination