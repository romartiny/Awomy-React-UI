import React, { Fragment, useState } from 'react';
import { Tab } from '@headlessui/react';
import { useDebouncedCallback } from 'use-debounce';
import { AnimatePresence, motion } from 'framer-motion';
import CircleBackground from './CircleBackground';
import PhoneFrame from './PhoneFrame';
import { usePrevious } from '../../utils/hooks/usePrevious';
import { featuresData } from '../../constants/homeData';
import { FrameMotion, FrameTap } from '../ui/MotionEffect';

const DesktopFeature = () => {
  const [changeCount, setChangeCount] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const prevIndex = usePrevious(selectedIndex);
  const isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex;

  const onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex);
      setChangeCount((changeCount) => changeCount + 1);
    },
    100,
    { leading: true }
  );

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24 px-6"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        <FrameMotion initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>
          {featuresData.map((feature, featureIndex) => (
            <FrameTap key={feature.name} whileTap={{ scale: 0.9 }}>
              <div
                key={feature.name}
                className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
              >
                {featureIndex === selectedIndex && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-gray-800"
                    initial={{ borderRadius: 16 }}
                  />
                )}
                <div className="relative z-10 p-8">
                  <feature.icon className="h-8 w-8" />
                  <h3 className="mt-6 text-lg font-semibold text-white">
                    <Tab className="text-left [&:not(:focus-visible)]:focus:outline-none outline-none">
                      <span className="absolute inset-0 rounded-2xl" />
                      {feature.name}
                    </Tab>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </div>
            </FrameTap>
          ))}
        </FrameMotion>
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#2563eb" className="animate-spin-slower"/>
        </div>
        <FrameMotion initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>
          <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
            <Tab.Panels as={Fragment}>
              <AnimatePresence
                initial={false}
                custom={{ isForwards, changeCount }}
              >
                {featuresData.map((feature, featureIndex) =>
                  selectedIndex === featureIndex
                    ? (
                    <Tab.Panel
                      static
                      key={feature.name + changeCount}
                      className="col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none"
                    >
                      <feature.screen
                        animated
                        custom={{ isForwards, changeCount }}
                      />
                    </Tab.Panel>
                      )
                    : null
                )}
              </AnimatePresence>
            </Tab.Panels>
          </PhoneFrame>
        </FrameMotion>
      </div>
    </Tab.Group>
  );
};

export default DesktopFeature;
