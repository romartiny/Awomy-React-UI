import React from 'react';
import Title from "../Title";
import Container from "../../Container";
import Advantage from "./Advantage";
import {advantagesData} from "../../../constants/homeData";

const AdvantagesBlock = () => {
    return (
        <section className="bg-black relative z-50">
            <Container id="account" aria-label="Features for building a portfolio" className="py-12 sm:py-16">
                <div className=" mx-auto max-w-2xl sm:text-center">
                    <Title title="Now is the time to open your Account." className="text-2xl"/>
                    <p className="mt-2 text-lg text-gray-600">
                        With typical market returns, you have to start young to secure your
                        future. With Investa, it is never too late to build your nest egg.
                    </p>
                </div>
                <ul role="list" className="mx-auto mt-16 grid grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 lg:gap-y-10 lg:max-w-none lg:grid-cols-3">
                    {advantagesData.map((item, index) => (
                        <Advantage item={item} index={index}/>
                    ))}
                </ul>

            </Container>
        </section>
    );
};

export default AdvantagesBlock;