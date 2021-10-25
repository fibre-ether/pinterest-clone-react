import React from 'react';
import {FaSearch} from 'react-icons/fa';
function Navbar(props) {
    return (
        <div class="fixed flex justify-center w-full top-2 z-10 leading-none">
                <div class="flex justify-center items-center bg-white border-2 border-gray-400 shadow-2xl rounded-full px-4 py-2 divide-gray-300 transform duration-200 bg-opacity-75 hover:scale-x-105 hover:bg-opacity-100 focus-within:bg-opacity-100">
                    <FaSearch/>
                    <input type="text" placeholder="Search" class="bg-white text-gray-700 w-80 px-2 py-2 ml-2 rounded-full bg-opacity-5 focus:bg-opacity-100"></input>
                </div>
        </div>
    );
}

export default Navbar;