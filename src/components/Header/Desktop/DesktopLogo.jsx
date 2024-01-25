import React from 'react';
import {Link} from "react-router-dom";
import Logo from "../../Logo";

const DesktopLogo = () => {
    return (
        <Link to="/" className="flex items-center">
            <Logo className={'mr-3 h-8 md:lg-9 sm:h-9 lg:h-9 drop-shadow-xl'}/>
            <span className="text-white self-center whitespace-nowrap text-2xl lg:text-3xl font-semibold">Awomy</span>
        </Link>
    );
};

export default DesktopLogo;