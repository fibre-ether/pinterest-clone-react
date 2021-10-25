import React from 'react';

function Card(props) {
    return (
        <div class="flex px-1 py-1 focus-within:fixed focus-within:scale-150">
            <div class="w-full relative">
                <img class="rounded-3xl h-96 object-cover w-full shadow-lg" src={props.img} alt={props.alt}/>
                <button class="rounded-3xl flex justify-center absolute top-0 h-full w-full transition duration-300 opacity-0 hover:bg-black hover:opacity-100 hover:bg-opacity-50">
                <p class="absolute bottom-4 overflow-hidden text-white px-4 font-bold text-lg">{props.desc}</p>
                <p class="absolute top-3 text-white px-4 font-bold text-lg">{props.name}</p>
                </button>
            </div>
        </div>
    );
}

export default Card;