import React from 'react';
import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const MobileStaticNavigation = ({ children, mobile, icon, ...props }) => {
  return (
    <Popover.Button className="block text-base tracking-tight leading-7 text-gray-200" {...props}>
      <Link to={props.href} onClick={mobile} className="hover:text-gray-400 transition ease-in-out delay-70 flex items-center space-x-2">
        <FontAwesomeIcon icon={icon} className="pr-3 w-4 h-4" />
        {children}
      </Link>
    </Popover.Button>
  );
};
