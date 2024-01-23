import React, { useState, useEffect } from 'react';
import { OfflinePage } from '../pages/Offline';

const ConnectionDetector = (props) => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener('online', handleStatusChange);

    window.addEventListener('offline', handleStatusChange);

    return () => {
      window.removeEventListener('online', handleStatusChange);
      window.removeEventListener('offline', handleStatusChange);
    };
  }, [isOnline]);

  return (
    <>{isOnline ? (props.children) : (<OfflinePage/>)}</>
  );
};

export default ConnectionDetector;
