import React from 'react';
import clsx from 'clsx';

const Title = ({ title, className, ...props }) => {
  return (
      <h2 className={clsx('font-bold tracking-tight text-gray-200', className)} {...props}>{title}</h2>
  );
};

export default Title;
