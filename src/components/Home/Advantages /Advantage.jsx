import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Advantage = ({item, index}) => {
    return (
        <>
            <div
                className={`relative group rounded-2xl lg:col-span-1 duration-300 cursor-pointer ${index === 2 ? 'sm:col-span-2' : 'sm:col-span-1'}`}>
                <div
                    className="absolute -inset-0.5 bg-gradient-to-tl from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 group-hover:bg-gradient-to-br ease-in-out duration-1000 group-hover:duration-300 animate-tilt"></div>
                <button
                    className="w-full h-full relative px-7 py-6 bg-black rounded-lg leading-none flex flex-col content-start justify-between">
                    <div className="flex flex-col items-start content-start">
                        <FontAwesomeIcon icon={item.icon}
                                         className="text-blue-500 group-hover:text-pink-700 fill-current duration-300"/>
                        <h3 className="mt-6 font-semibold text-white/70 group-hover:text-white duration-300">
                            {item.name}
                        </h3>
                        <p className="pt-4 text-gray-600 group-hover:text-gray-400 duration-300 text-left">
                            {item.description}
                        </p>
                    </div>
                    <Link to={item.href}
                          className="pt-4 text-indigo-400 group-hover:text-gray-100 duration-300 ease-in-out">
                        Read more
                        <FontAwesomeIcon icon={faArrowRight}
                                         className="pl-2 group-hover:pl-4 duration-1000 ease-in-out"/>
                    </Link>
                </button>
            </div>
        </>
    );
};

export default Advantage;