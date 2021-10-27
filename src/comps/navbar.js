import React, { useState } from 'react';
import {FaReact, FaSearch} from 'react-icons/fa';
function Navbar(props) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    };

    return (
        <div className="fixed flex justify-center w-full items-center top-2 z-10 leading-none">
                <div className="bg-blue-300 spin-logo text-white w-12 h-12 mx-4 shadow-lg rounded-full flex justify-center items-center hover:bg-blue-400 transition-all duration-300">
                    <  FaReact size={40} />
                </div>
                <div className="flex justify-center items-center bg-white border-2 border-gray-400 shadow-2xl rounded-full px-4 py-2 divide-gray-300 transform duration-200 bg-opacity-75 hover:scale-x-105 hover:bg-opacity-100 focus-within:bg-opacity-100">
                    <FaSearch/>
                    <form onSubmit={(e) => {props.handleSubmit(e,searchTerm)}}>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                        className="bg-white text-gray-700 w-28 sm:w-80 px-2 py-2 ml-2 rounded-full bg-opacity-5 focus:bg-opacity-100"
                    ></input>
                    </form>
                </div>
        </div>
    );
}

export default Navbar;