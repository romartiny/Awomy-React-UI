import React, {useState} from 'react';
import HeroBlock from '../../../components/Home/Hero/HeroBlock';
import { HeaderSwitch } from "../../../components/Header/HeaderSwitch";
import Footer from "../../../components/Footer";
import { BubbleBackgroundAsync } from "../../../components/Home/BubbleBackground/BubbleBackground.async";

const HomePage = () => {
    const [mobileFixed, setMobileFixed] = useState(false);

    const onMobileOpened = (info) => {
        setMobileFixed(info);
    }

    return (
        <div className="page-container relative">
            <div className="h-screen flex flex-col relative overflow-hidden">
                <div className={`header-container ${mobileFixed ? 'block' : 'hidden'} lg:none w-full z-30 h-[4.9rem]`}></div>
                <header className={`header-container ${mobileFixed ? 'fixed' : 'relative'} lg:fixed w-full z-30`}>
                    <HeaderSwitch onMobileOpened={onMobileOpened}/>
                </header>
                <HeroBlock/>
                <div className="absolute lg:fixed inset-0 overflow-hidden">
                    <BubbleBackgroundAsync/>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default HomePage;
