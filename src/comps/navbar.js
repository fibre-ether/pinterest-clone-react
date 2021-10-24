import React from 'react';

function Navbar(props) {
    return (
        <div class="fixed w-full top-2 z-10">
            <navbar class="bg-gray-800 px-3 py-3 mx-2 flex items-center justify-between rounded-2xl bg-opacity-25">
                <div class="flex justify-end">
                    <p class="bg-gray-700 text-white px-2 py-1 rounded-lg"> Header </p>
                </div>
                <div class="text-white flex justify-start space-x-2">
                    <button class="bg-gray-700 rounded-md px-2 py-1">abstract</button>
                    <button class="bg-gray-700 rounded-md px-2 py-1">animals</button>
                    <button class="bg-gray-700 rounded-md px-2 py-1">dogs</button>
                </div>
            </navbar>
        </div>
    );
}

export default Navbar;