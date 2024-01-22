import React, {useEffect, useState} from 'react';
import Container from '../Container';
import Title from './Title';
import {IoIosArrowDroprightCircle} from 'react-icons/io';
import {metadataHero} from '../../constants/homeData';
import {Link} from 'react-router-dom';
import {FrameMotion, FrameTap} from '../ui/MotionEffect';

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
            <Container
                className={'flex flex-col items-center relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6'}>
                {/*<div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">*/}
                {/*  <div className="flex flex-col items-center relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">*/}
                <FrameMotion initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                             transition={{type: 'spring', stiffness: 130, damping: 25}}
                             styles="flex items-center flex-col">
                    <Title title={metadataHero.title} className="font-bold text-5xl text-center"/>
                    <p className="mt-6 text-lg text-gray-300 text-center">{metadataHero.description}</p>
                </FrameMotion>
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-4">
                    <FrameMotion initial={{opacity: 0, y: 40}} animate={{opacity: 1, y: 0}}
                                 transition={{type: 'spring', stiffness: 130, damping: 35}}>
                        <FrameTap whileTap={{scale: 0.9}}>
                            <Link
                                className="btn rounded-2xl gap-x-6 shadow-2xl pl-6 text-sm lg:h-16 font-bold lg:text-base text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:brightness-90 px-5 py-2.5 transition duration-500 ease-in-out delay-170 focus:outline-none"
                                to="/login">
                                {metadataHero.button}
                                <IoIosArrowDroprightCircle className="text-2xl lg:text-3xl"/>
                            </Link>
                        </FrameTap>
                    </FrameMotion>
                </div>
                {/*</div>*/}
                {/*<div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6" >*/}
                {/*  <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] opacity-20 sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />*/}
                {/*  <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-2">*/}
                {/*    <FrameMotion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>*/}
                {/*      <PhoneFrame className="max-w-[366px] mx-auto">*/}
                {/*        <AppFeature />*/}
                {/*      </PhoneFrame>*/}
                {/*    </FrameMotion>*/}
                {/*  </div>*/}
                {/*</div>*/}
                {/*</div>*/}
            </Container>
        </section>
    );
};

export default HeroBlock;

