import React from 'react';
import Container from "../../Container";
import Title from "../Title";
import {Link} from "react-router-dom";
import {readyData} from "../../../constants/homeData";

const Ready = () => {
    return (
        <section id="get-started" className="relative bg-black z-20">
            <Container className="py-12 sm:py-16">
                <div className="flex flex-col items-center bg-gray-900/60 rounded-2xl px-5 py-9 lg:py-16 lg:px-7">
                    <div className="flex flex-col items-center mt-5">
                        <Title title={readyData.title} className="text-2xl lg:text-3xl text-center" />
                        <span className="text-sm lg:text-xl text-gray-500 mt-5 text-center">{readyData.description}</span>
                    </div>
                    <div className="mt-6 mb-5 md:flex md:items-center">
                        <Link to={readyData.signUp.href} className="text-white bg-pink-600 hover:bg-pink-700 font-bold rounded-2xl text-xs lg:text-sm px-5 py-2.5 transition ease-in-out delay-70 duration-300 focus:outline-none">{readyData.signUp.title}</Link>
                        <Link to={readyData.learnMore.href} className="text-white/80 border border-gray-600 hover:border-gray-500 hover:text-white font-bold rounded-2xl text-xs lg:text-sm px-5 py-2.5 ml-6 transition duration-300 ease-in-out delay-70 focus:outline-none">{readyData.learnMore.title}</Link>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Ready;