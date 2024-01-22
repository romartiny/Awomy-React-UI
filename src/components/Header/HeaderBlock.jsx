import React from 'react';
import { HeaderLayout } from './HeaderLayout';
import { FrameMotion } from '../ui/MotionEffect';

export const HeaderBlock = () => {
  return (
    <header className="header-container relative lg:fixed w-full z-30">
        <FrameMotion initial={{opacity: 0, y: -40}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', stiffness: 130, damping: 15}}>
            <div className="absolute w-full z-10 shadow-[0_20px_15px_55px_rgba(0,0,0,0.25)]"></div>
            <div className="relative z-10 py-4 mx-auto px-6 sm:px-8 max-w-full flex justify-between">
                <HeaderLayout/>
            </div>
        </FrameMotion>
    </header>
  );
};
