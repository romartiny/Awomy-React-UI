import React from 'react';
import HeroBlock from '../../../components/Home/HeroBlock';
import Cons from '../../../components/Home/Cons';
import { HeaderBlock } from "../../../components/Header/HeaderBlock";
import Footer from "../../../components/Footer";
import { BubbleBackgroundAsync } from "../../../components/Home/BubbleBackground/BubbleBackground.async";
import {FrameMotion} from "../../../components/ui/MotionEffect";
import {HeaderLayout} from "../../../components/Header/HeaderLayout";

const HomePage = () => {
    return (
        <div className="page-container relative" >
            <div className="h-screen flex flex-col relative overflow-hidden">
                <header className="header-container relative lg:fixed w-full z-30">
                    <HeaderBlock />
                </header>
                <HeroBlock/>
            </div>
            <div
                className="absolute lg:fixed inset-0 overflow-hidden"
            >
                <BubbleBackgroundAsync/>
            </div>
            <Cons/>
            <Footer/>
        </div>
    );
};

export default HomePage;
