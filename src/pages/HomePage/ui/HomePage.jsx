import React, {useState} from 'react';
import HeroBlock from '../../../components/Home/HeroBlock';
import Cons from '../../../components/Home/Cons';
import { HeaderBlock } from "../../../components/Header/HeaderBlock";
import Footer from "../../../components/Footer";
import { BubbleBackgroundAsync } from "../../../components/Home/BubbleBackground/BubbleBackground.async";

const HomePage = () => {
    const [mobileFixed, setMobileFixed] = useState();

    const onMobileOpened = (info) => {
        setMobileFixed(info);
    }

    return (
        <div className="page-container relative" >
            <div className="h-screen flex flex-col relative overflow-hidden">
                <div className={`header-container ${mobileFixed ? 'block' : 'hidden'} lg:none w-full z-30 h-[4.9rem]`}></div>
                <header className={`header-container ${mobileFixed ? 'fixed' : 'relative'} lg:fixed w-full z-30`}>
                    <HeaderBlock onMobileOpened={onMobileOpened}/>
                </header>
                <HeroBlock/>
            </div>
            <div className="absolute lg:fixed inset-0 overflow-hidden">
                <BubbleBackgroundAsync/>
            </div>
            <Cons/>
            <Footer/>
        </div>
    );
};

export default HomePage;
