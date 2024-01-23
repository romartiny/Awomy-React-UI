import React from 'react';
import {Link} from "react-router-dom";
import logoUrl from "../../../app/assets/img/logo.png";

const DesktopLogo = () => {
    return (
        <div className="header-logo">
            <Link to="/" className="flex items-center">
                <img src={logoUrl ?? undefined} className="mr-3 h-8 md:lg-9 sm:h-9 lg:h-9 drop-shadow-xl" alt="Awomy logo"/>
                <h1 className="dark:text-white self-center whitespace-nowrap text-2xl lg:text-3xl font-semibold">Awomy</h1>
            </Link>
        </div>
    );
};

export default DesktopLogo;