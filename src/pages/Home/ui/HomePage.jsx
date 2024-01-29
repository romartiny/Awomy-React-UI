import React from 'react';
import HeroBlock from '../../../components/Home/Hero/HeroBlock';
import { HeaderSwitch } from "../../../components/Header/HeaderSwitch";
import Footer from "../../../components/Footer/Footer";
import { BubbleBackgroundAsync } from "../../../components/Home/BubbleBackground/BubbleBackground.async";
import AdvantagesBlock from "../../../components/Home/Advantages /AdvantagesBlock";
import InsightBlock from "../../../components/Home/Map/MapBlock";
import Testimonial from "../../../components/Testimonials (Learn Page)/Testimonial";
import Ready from "../../../components/Home/Ready/Ready";

const HomePage = () => {
    return (
        <>
            <section id="mixed-hero" className="h-screen flex flex-col relative overflow-hidden">
                <HeaderSwitch/>
                <HeroBlock/>
                <BubbleBackgroundAsync/>
            </section>
            <AdvantagesBlock />
            <InsightBlock />
            <Ready />
            <Footer/>
        </>
    );
};

export default HomePage;
