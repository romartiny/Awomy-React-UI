import React from 'react';
import { OfflinePageLoader } from '../../../components/Loader';
import { FrameMotion } from '../../../components/ui/MotionEffect';

const OfflinePage = () => {
  return (
    <FrameMotion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 15 }}>
      <div className="flex flex-col items-center justify-center h-screen">
        <OfflinePageLoader />
        <h1 className="font-bold tracking-tight text-gray-200 text-2xl mt-6">No Internet Connection</h1>
        <h2 className="mt-3 text-lg text-gray-300">Reconnect to the internet and try again.</h2>
      </div>
    </FrameMotion>
  );
};

export default OfflinePage;
