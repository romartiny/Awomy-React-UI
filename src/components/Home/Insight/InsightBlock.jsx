import React from 'react';
import { motion } from 'framer-motion';
import map from '../../../app/assets/images/map.png';
import Title from "../Title";
import Container from "../../Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons";
import {mapData} from "../../../constants/homeData";

const styles = {
    innerWidth: '2xl:max-w-[1280px] w-full',
    interWidth: 'lg:w-[80%] w-[100%]',

    paddings: 'sm:p-16 xs:p-8 px-6 py-12',
    yPaddings: 'sm:py-16 xs:py-8 py-12',
    xPaddings: 'sm:px-16 px-6',
    topPaddings: 'sm:pt-16 xs:pt-8 pt-12',
    bottomPaddings: 'sm:pb-16 xs:pb-8 pb-12',

    flexCenter: 'flex justify-center items-center',
    flexStart: 'flex justify-start items-start',
    flexEnd: 'flex justify-end',
    navPadding: 'pt-[98px]',

    // hero section
    heroHeading:
        'font-bold lg:text-[144px] md:text-[100px] sm:text-[60px] text-[44px] lg:leading-[158.4px] md:leading-[114.4px] sm:leading-[74.4px] leading-[64.4px] uppercase text-white',
    heroDText:
        'md:w-[212px] sm:w-[80px] w-[60px] md:h-[108px] sm:h-[48px] h-[38px] md:border-[18px] border-[9px] rounded-r-[50px] border-white sm:mx-2 mx-[6px]',
};

const World = () => (
    <section className="relative bg-black z-50">
        <Container className="py-12 sm:py-16">
            <motion.div className="mx-auto flex flex-col">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <Title title={mapData.title} className="text-2xl" />
                    <span className="mt-2 text-lg text-gray-600">{mapData.description}</span>
                </div>
                <motion.div className="relative mt-[68px] flex w-full">
                    <img src={map ?? undefined} alt="map" className="w-full h-full object-cover" width="100%" height="100%"/>
                    <FontAwesomeIcon icon={faLocationDot} className="absolute bottom-10 right-10 sm:bottom-12 sm:right-12 md:bottom-16 md:right-16 lg:bottom-20 lg:right-20 xl:bottom-20 xl:right-20 w-[16px] h-[16px] lg:w-[28px] lg:h-[28px] cursor-pointer text-gray-300 hover:text-gray-200 transition ease-in-out delay-70 duration-150"/>
                    <FontAwesomeIcon icon={faLocationDot} className="absolute top-6 left-16 sm:top-10 sm:left-20 md:top-24 md:left-24 lg:bottom-20 lg:right-20 xl:bottom-20 xl:right-20 w-[16px] h-[16px] lg:w-[28px] lg:h-[28px] cursor-pointer text-gray-300 hover:text-gray-200 transition ease-in-out delay-70 duration-150"/>
                    <FontAwesomeIcon icon={faLocationDot} className="absolute top-[17%] left-[45%] w-[16px] h-[16px] lg:w-[28px] lg:h-[28px] cursor-pointer text-gray-300 hover:text-gray-200 transition ease-in-out delay-70 duration-150"/>
                </motion.div>
            </motion.div>
        </Container>
    </section>
);

export default World;