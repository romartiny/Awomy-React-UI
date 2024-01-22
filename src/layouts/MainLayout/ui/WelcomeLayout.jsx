import React from 'react';
import { Outlet } from 'react-router-dom';
import 'aos/dist/aos.css';

const WelcomeLayout = () => {
  return (
    <div className="awomy-container max-h-max overflow-y-scroll">
      <Outlet/>
    </div>
  );
};

export default WelcomeLayout;
