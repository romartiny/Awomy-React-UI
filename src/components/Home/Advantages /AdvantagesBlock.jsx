import React from 'react';
import Title from "../Title";
import Container from "../../Container";
import Advantage from "./Advantage";
import {advantagesBlocksData, advantagesData} from "../../../constants/homeData";

const AdvantagesBlock = () => {
    return (
        <section className="bg-black relative rounded sm:rounded-xl lg:rounded-2xl z-50">
            <Container className="py-12 sm:py-16">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <Title title={advantagesData.title} className="text-2xl"/>
                    <span className="mt-2 text-lg text-gray-600">{advantagesData.description}</span>
                </div>
                <ul role="list" className="mx-auto mt-14 grid grid-cols-1 gap-6 text-sm sm:mt-12 sm:grid-cols-2 lg:gap-y-10 lg:max-w-none lg:grid-cols-3">
                    {advantagesBlocksData.map((item, index) => (
                        <Advantage item={item} index={index} key={index} />
                    ))}
                </ul>

            </Container>
        </section>
    );
};

export default AdvantagesBlock;