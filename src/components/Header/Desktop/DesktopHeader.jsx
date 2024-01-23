import React from 'react';
import DesktopFixedNavigation from "./DesktopFixedNavigation";
import DesktopLogo from "./DesktopLogo";

const DesktopHeader = () => {
    return (
        <div className="flex">
            <div className="relative z-40 flex items-center">
                <DesktopLogo />
            </div>
            <div className="items-center hidden lg:flex lg:gap-10 pl-16">
                <DesktopFixedNavigation/>
            </div>
        </div>
    );
};

export default DesktopHeader;