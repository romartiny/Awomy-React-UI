import React, { useState, useEffect } from 'react';
import {Link, useLocation} from "react-router-dom";
import {PinkButton} from "../../ui/Buttons/PinkButton";
import {AnimatePresence, motion} from "framer-motion";
import {Popover} from "@headlessui/react";
import {navigationLinks} from "../../../constants/headerData";
import {MobileStaticNavigation} from "./MobileStaticNavigation";

const MobileHeader = ({onMobileOpened}) => {
    const location = useLocation();
    const [isOpenNavigation, setIsOpenNavigation] = useState(false);

    useEffect(() => {
        backgroundCloseClick(false);
    }, [location]);

    const toggleOpenNavigation = () => {
        setIsOpenNavigation(!isOpenNavigation);
        onMobileOpened(!isOpenNavigation);
    };

    const backgroundCloseClick = (action) => {
        setIsOpenNavigation(action);
        onMobileOpened(action);
    };

    return (
        <div className="items-center flex grap-6 cursor-pointer">
            <div className="z-50 flex items-center lg:order-2">
                <div className="lg:flex sm:hidden hidden">
                    <Link to={'login'} onClick={() => toggleOpenNavigation(false)}>
                        <PinkButton label={'Log in'}/>
                    </Link>
                </div>
                <button type="button" onClick={() => toggleOpenNavigation()} className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden dark:text-gray-400 dark:hover:bg-gray-700 transition ease-in-out delay-70" aria-controls="mobile-menu-2" aria-expanded="false">
                    {
                        isOpenNavigation
                            ? <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            : <svg className="w-6 h-6" fill="white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    }
                </button>
            </div>
            <AnimatePresence initial={false}>
                {
                    isOpenNavigation && (
                        <Popover className="lg:hidden">
                            <Popover.Overlay onClick={() => backgroundCloseClick(false)} static as={motion.div}
                                             initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}
                                             className="fixed z-20 inset-0 bg-gray-600/10 backdrop-blur cursor-default"/>
                            <Popover.Panel static as={motion.div} initial={{opacity: 0, y: -32}}
                                           animate={{opacity: 1, y: 0}}
                                           exit={{opacity: 0, y: -32, transition: {duration: 0.2}}}
                                           className="absolute inset-x-0 top-0 z-30 origin-top rounded-b-2xl px-6 sm:px-8 bg-gray-800 pb-6 pt-24 shadow-2xl shadow-gray-900/20 cursor-default">
                                <div className="space-y-4">
                                    {
                                        navigationLinks.map(({_id, title, href, icon}) => (
                                            <MobileStaticNavigation href={href} key={_id} icon={icon} mobile={() => toggleOpenNavigation(false)}>{title}</MobileStaticNavigation>
                                        ))
                                    }
                                </div>
                            </Popover.Panel>
                            <Popover.Panel static as={motion.div} initial={{opacity: 0, y: 32}} animate={{opacity: 1, y: 0}} exit={{opacity: 0, y: 32, transition: {duration: 0.2}}} className="w-full bottom-0 right-0 fixed z-30 origin-bottom rounded-t-2xl bg-gray-800 px-5 pb-5 pt-5 shadow-2xl shadow-gray-900/20 cursor-default">
                                <Link to={'/login'} className="flex justify-center w-full text-white bg-pink-600 hover:bg-pink-700 font-bold rounded-lg text-sm px-5 py-2.5 mr-2 transition ease-in-out delay-70 focus:outline-none dark:focus:ring-blue-800">
                                    Log in
                                </Link>
                            </Popover.Panel>
                        </Popover>
                    )}
            </AnimatePresence>
        </div>
    );
};

export default MobileHeader;