import React from 'react';

function Card(props) {
    return (
        <div className="group-outer flex m-1 shadow-xl rounded-3xl w-40 md:w-42 xl:w-56">
            <div className="w-full relative h-64 rounded-3xl overflow-hidden sm:h-72 md:h-80 xl:96">
                <img className="rounded-3xl h-full object-cover w-full shadow-xl transform duration-300 group-outer-hover:scale-150 group-outer-hover:overflow-hidden" src={props.img} alt={props.alt}/>
                <button onClick={(e) => {props.clickHandle(e,props.img, props.alt)}} className="rounded-3xl flex justify-center absolute top-0 h-full w-full transition duration-300 opacity-0 hover:bg-black hover:opacity-100 hover:bg-opacity-50">
                <p className="absolute bottom-4 overflow-hidden text-white px-4 font-bold text-lg">{props.desc}</p>
                <p className="absolute top-3 text-white px-4 font-bold text-lg">{props.name}</p>
                </button>
            </div>
        </div>
    );
}

export default Card;