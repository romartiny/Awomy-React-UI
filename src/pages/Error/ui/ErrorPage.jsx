import React from 'react';
import { OfflinePageLoader } from '../../../components/Loader';
import { FrameMotion } from '../../../components/ui/MotionEffect';

const ErrorPage = () => {
  const handleReload = () => {
    location.reload();
  };

  return (
    <FrameMotion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 15 }}>
      <div className="flex flex-col items-center justify-center h-screen">
        <OfflinePageLoader />
        <h1 className="font-bold tracking-tight text-gray-200 text-2xl mt-6">Something went wrong</h1>
        <h2 className="mt-3 text-lg text-gray-300">Reload the page to update the data.</h2>
        <button onClick={handleReload} className="mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-blue-700 sm:w-fit hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700">Reload page</button>
      </div>
    </FrameMotion>
  );
};

export default ErrorPage;
