import React from 'react';

function Pagination(props) {
    return (
        <div className="flex transform duration-300 mx-8 mt-4 mb-6 border-2 justify-between items-center shadow-xl rounded-xl p-2 bg-white dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600">
            <div className="m-1 font-semibold">
                Showing page {props.pageNum} of {props.totalPages}
            </div>
            <div className="inline-flex ">
                <button onClick={(e) => {props.pageNum>1?props.handleClick(e,"prev"):console.log("No Previous")}} className={`bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l-lg ${props.pageNum===1 ? "cursor-not-allowed": null}`}>
                    Prev
                </button>
                <button onClick={(e) => {props.pageNum<=props.totalPages?props.handleClick(e,"next"):console.log("No Next")}} className={`bg-gray-300 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r-lg ${props.pageNum===props.totalPages ? "cursor-not-allowed": null}`}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;