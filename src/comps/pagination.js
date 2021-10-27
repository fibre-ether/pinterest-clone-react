import React from 'react';

function Pagination(props) {
    return (
        <div className="flex mx-8 mt-4 mb-6 border-2 justify-between items-center shadow-xl rounded-xl p-2 bg-white ">
            <div className="m-1 font-semibold">
                Showing page {props.pageNum} of {props.totalPages}
            </div>
            <div className="inline-flex">
                <button onClick={(e) => {props.handleClick(e,"prev");}} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l-lg  ${props.pageNum==="1" ? "cursor-not-allowed": null}`}>
                    Prev
                </button>
                <button onClick={(e) => {props.handleClick(e,"next");}} className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r-lg ${props.pageNum===props.totalPages.toString() ? "cursor-not-allowed": null}`}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default Pagination;