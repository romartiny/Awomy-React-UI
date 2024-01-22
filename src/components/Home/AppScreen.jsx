import React, { forwardRef } from 'react';
import clsx from 'clsx';
import Logo from '../Logo';
import { TbMenu2 } from 'react-icons/tb';
import { FaUser } from 'react-icons/fa';
import { FrameHover, FrameTap } from '../ui/MotionEffect';
import { Link } from 'react-router-dom';

const AppScreen = ({ children, className, ...props }) => {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      <div className="flex justify-between items-center px-4 pt-4">
        <FrameHover whileHover={{ scale: 1.2 }}>
          <FrameTap whileTap={{ scale: 0.9 }}>
            <TbMenu2 className="text-xl text-white"/>
          </FrameTap>
        </FrameHover>
        <FrameHover whileHover={{ scale: 1.2 }}>
          <FrameTap whileTap={{ scale: 0.9 }}>
            <Logo className="text-gray-300 hover:text-white text-xl duration-300"/>
          </FrameTap>
        </FrameHover>
        <FrameHover whileHover={{ scale: 1.2 }}>
          <FrameTap whileTap={{ scale: 0.9 }}>
            <Link to={'/login'}>
              <FaUser className="text-xl text-white"/>
            </Link>
          </FrameTap>
        </FrameHover>
      </div>
      {children}
    </div>
  );
};

AppScreen.Title = forwardRef(function AppScreenTitle ({ children }, ref) {
  return (
    <div ref={ref} className="text-2xl text-white">
      {children}
    </div>
  );
});

AppScreen.Subtitle = forwardRef(function AppScreenSubtitle ({ children }, ref) {
  return (
    <div ref={ref} className="text-sm text-gray-500">
      {children}
    </div>
  );
});

AppScreen.Body = forwardRef(function AppScreenBody (
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('mt-6 flex-auto rounded-t-2xl bg-white', className)}
    >
      {children}
    </div>
  );
});

AppScreen.Header = forwardRef(function AppScreenHeader ({ children }, ref) {
  return (
    <div ref={ref} className="mt-6 px-4 text-white">
      {children}
    </div>
  );
});

export default AppScreen;
