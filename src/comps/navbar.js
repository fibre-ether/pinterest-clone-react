import React, { useState } from 'react';
import { FaReact, FaSearch} from 'react-icons/fa';
import { BsFillMoonFill, BsSunFill, BsGithub } from "react-icons/bs";
function Navbar(props) {
    const [searchTerm, setSearchTerm] = useState("")

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
    };

    return (
        <div className="fixed flex justify-center w-full items-center top-2 z-10 leading-none">
                <div className="bg-blue-300 spin-logo rounded-full text-white dark:bg-gray-800 dark:text-blue-300 w-12 h-12 mx-4 shadow-lg  flex justify-center items-center duration-300 hover:bg-blue-400 ">
                    <  FaReact size={40} />
                </div>
                <div className="flex justify-center items-center dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 bg-white border-2 border-gray-400 shadow-2xl rounded-full px-4 py-2 divide-gray-300 transform duration-500 bg-opacity-75 hover:scale-x-105 hover:bg-opacity-100 focus-within:bg-opacity-100">
                    <FaSearch/>
                    <form onSubmit={(e) => {props.handleSubmit(e,searchTerm)}}>
                    <input 
                        type="text" 
                        placeholder="Search"
                        value={searchTerm}
                        onChange={handleChange}
                        className="bg-white text-gray-700 w-20 sm:w-80 px-2 py-2 ml-2 rounded-full bg-opacity-5 focus:bg-opacity-100"
                    ></input>
                    </form>
                </div>
                <button onClick={props.handleThemeChange} className="relative rounded-full bg-gray-200 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 text-black w-16 sm:w-20 h-12 mx-4 shadow-lg  flex justify-start scale-100 transform duration-300 dark:justify-end  items-center border-2">
                    {props.theme==="light"?
                    <BsFillMoonFill className="absolute transform bg-white border-gray-400 dark:border-gray-600 dark:bg-gray-900 hover:left-10 border-2 rounded-full mx-1 p-1 w-10 h-10"/> :
                    <BsSunFill className="absolute transform bg-white border-gray-400 dark:border-gray-600 dark:bg-gray-900 hover:left-10 border-2 rounded-full mx-1 p-1 w-10 h-10"/> }
                </button>
                <button onClick={props.handleLink} className="shadow-lg rounded-full bg-white dark:bg-gray-900 dark:text-gray-300"> <BsGithub size={30}/> </button>
        </div>
    );
}

export default Navbar;