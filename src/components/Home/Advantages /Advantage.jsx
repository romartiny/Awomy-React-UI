import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Advantage = ({item, index}) => {
    return (
        <Link to={item.href} className={`relative group rounded-2xl lg:col-span-1 border border-blue-500 duration-500 hover:border-pink-700 cursor-default ${index === 2 ? 'sm:col-span-2' : 'sm:col-span-1'}`}>
            <button className="w-full h-full relative px-7 py-6 bg-black rounded-2xl leading-none flex flex-col content-start justify-between">
                <div className="flex flex-col items-start content-start">
                    <FontAwesomeIcon icon={item.icon} className="text-blue-500 group-hover:text-pink-700 fill-current duration-300"/>
                    <h3 className="mt-6 font-semibold text-white/70 group-hover:text-white duration-500">
                        {item.name}
                    </h3>
                    <p className="pt-4 text-gray-600 group-hover:text-gray-400 duration-500 text-left">
                        {item.description}
                    </p>
                </div>
                <span className="pt-4 text-indigo-400 group-hover:text-gray-100 duration-500 ease-in-out">
                    Read more
                    <FontAwesomeIcon icon={faArrowRight} className="pl-2 group-hover:pl-4 group-hover:text-gray-100 duration-1000 ease-in-out"/>
                </span>
            </button>
        </Link>
    );
};

export default Advantage;