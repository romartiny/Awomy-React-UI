import React from 'react';
import logoUrl from '../app/assets/images/logos/logo.png';
import clsx from 'clsx';

const Logo = ({ className, props }) => {
  return (
      <img src={logoUrl ?? undefined} className={clsx('h-9 sm:h-10 duration-300', className)} {...props} height="36" width="36" alt="Awomy logo"/>
  );
};

export default Logo;
