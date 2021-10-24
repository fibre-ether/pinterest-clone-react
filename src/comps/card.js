import React from 'react';

function Card(props) {
    return (
        <div class=" flex justify-center px-1 py-1">
            <div class="w-full relative">
                <img class="rounded-3xl h-96 object-cover w-full shadow-lg" src={props.img} alt={props.alt}/>
                <div class="rounded-3xl flex justify-center absolute top-0 h-full w-full transition duration-485 ease-in-out opacity-0 hover:bg-black  hover:opacity-100 hover:bg-opacity-50 ">
                <p class="absolute bottom-4 overflow-hidden text-white px-4 font-bold text-lg">{props.desc}</p>
                <p class="absolute top-3 text-white px-4 font-bold text-lg">{props.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;