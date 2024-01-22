import React, {useEffect, useState} from 'react';
import Container from '../../Container';
import Title from '../Title';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import {metadataHero} from '../../../constants/homeData';
import {Link} from 'react-router-dom';
import {FrameMotion, FrameTap} from '../../ui/MotionEffect';

const HeroBlock = () => {
    const [scrollOpacity, setScrollOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const clampedOpacity = Math.min(1, Math.max(0, 1 - window.scrollY / 400));

            setScrollOpacity(clampedOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="h-full flex items-center overflow-hidden z-10" style={{opacity: scrollOpacity}}>
            <Container className={'flex flex-col items-center relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'}>
                <FrameMotion initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', stiffness: 130, damping: 25}} styles="flex items-center flex-col">
                    <Title title={metadataHero.title} className="font-bold text-5xl text-center"/>
                    <p className="mt-6 text-lg text-gray-300 text-center">{metadataHero.description}</p>
                </FrameMotion>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
                    <FrameMotion initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', stiffness: 130, damping: 35}}>
                        <FrameTap whileTap={{scale: 0.9}}>
                            <Link className="btn rounded-2xl gap-x-6 shadow-2xl pl-6 text-sm lg:h-16 font-bold lg:text-base text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:brightness-90 px-5 py-2.5 transition duration-500 ease-in-out delay-170 focus:outline-none" to="/login">
                                {metadataHero.button}
                                <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl"/>
                            </Link>
                        </FrameTap>
                    </FrameMotion>
                </div>
            </Container>
        </section>
    );
};

export default HeroBlock;

