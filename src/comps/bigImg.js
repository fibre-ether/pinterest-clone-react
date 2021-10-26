import React from 'react';

function BigImg(props) {
    return (
        <div onClick={props.handleClick} className="fixed flex justify-center items-center w-full h-full z-10 -mt-20">
            <button onClick={props.handleClick} className="fixed top-10 right-10 z-20">a</button>
            <div className="scale-y-110">
            <img src={props.src} alt={props.alt} className=""/>
            </div>
        </div>
    );
}

export default BigImg;