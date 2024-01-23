import React from 'react';
import { FrameMotion } from '../ui/MotionEffect';
import DesktopHeader from "./Desktop/DesktopHeader";
import MobileHeader from "./Mobile/MobileHeader";

export const HeaderSwitch = ({onMobileOpened}) => {
  return (
      <FrameMotion initial={{opacity: 0, y: -40}} animate={{opacity: 1, y: 0}} transition={{type: 'spring', stiffness: 130, damping: 15}}>
          <div className="absolute w-full z-10 shadow-[0_20px_15px_55px_rgba(0,0,0,0.25)]"></div>
          <div className="relative z-10 py-4 mx-auto px-4 sm:px-8 max-w-full flex justify-between">
              <DesktopHeader />
              <MobileHeader onMobileOpened={onMobileOpened} />
          </div>
      </FrameMotion>
  );
};
