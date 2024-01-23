import React from 'react';
import { Link } from 'react-router-dom';
import logoUrl from '../app/assets/img/logo.png';
import clsx from 'clsx';

const Logo = ({ className, props }) => {
  return (
      <img src={logoUrl ?? undefined} className={clsx('h-9 sm:h-10 duration-300', className)} {...props} alt="Awomy logo"/>
  );
};

export default Logo;
