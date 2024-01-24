import React from 'react';
import HeroBlock from '../../../components/Home/Hero/HeroBlock';
import { HeaderSwitch } from "../../../components/Header/HeaderSwitch";
import Footer from "../../../components/Footer/Footer";
import { BubbleBackgroundAsync } from "../../../components/Home/BubbleBackground/BubbleBackground.async";
import AdvantagesBlock from "../../../components/Home/Advantages /AdvantagesBlock";

const HomePage = () => {
    return (
        <>
            <div className="h-screen flex flex-col relative overflow-hidden">
                <HeaderSwitch/>
                <HeroBlock/>
                <BubbleBackgroundAsync/>
            </div>
            <AdvantagesBlock />
            <Footer/>
        </>
    );
};

export default HomePage;
