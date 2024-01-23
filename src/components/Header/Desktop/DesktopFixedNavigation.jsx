import React, {useState} from 'react';
import {Framer} from "../../../utils/lib/framer";
import {useTabs} from "../../../utils/hooks/useTabs";
import {navigationLinks} from "../../../constants/headerData";

const DesktopFixedNavigation = () => {
    const [hookProps] = useState({tabs: navigationLinks, initialTabId: 'Matches',});

    const framer = useTabs(hookProps);

    return (
        <div className="w-full flex flex-col relative z-50">
            <div className="w-full items-start flex">
                <Framer.Tabs {...framer.tabProps} />
            </div>
        </div>
    );
};

export default DesktopFixedNavigation;