import React from 'react';
import { PuffLoader } from 'react-spinners';
import { motion } from 'framer-motion';
import loaderImage from '../app/assets/images/logos/logo.png';

export const PageLogoLoader = () => {
  return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <motion.div initial={{ opacity: 1, scale: 0.8 }} animate={{ opacity: [0.7, 1.25, 0.7], scale: [0.9, 1.15, 0.9] }} transition={{duration: 1, repeat: Infinity, ease: 'easeInOut', repeatType: 'loop',}}>
              <img src={loaderImage ?? undefined} height={100} width={100} alt={'Awomy loader image'}/>
          </motion.div>
      </div>
  );
};

export const OfflinePageLoader = () => {
    return (
        <PuffLoader color={'#dbe7ff'} size={100}/>
    );
};
