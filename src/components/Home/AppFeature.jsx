import React, { useState } from 'react';
import clsx from 'clsx';
import AppScreen from './AppScreen';
import Chart from '../ui/Chart';
import { prices } from '../../constants/cartData';
import { FrameMotion } from '../ui/MotionEffect';

const AppFeature = () => {
  const [activePointIndex, setActivePointIndex] = useState(null);
  const activePriceIndex = activePointIndex ?? prices.length - 1;
  const activeValue = prices[activePriceIndex];
  const previousValue = prices[activePriceIndex - 1];
  const percentageChange = activePriceIndex === 0 ? null : ((activeValue - previousValue) / previousValue) * 100;

  return (
    <AppScreen>
      <FrameMotion initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 100, damping: 35 }}>
        <AppScreen.Body>
          <div className="p-4">
            <div className="flex gap-2">
              <div className="text-gray-500 text-xs leading-6">Crypto</div>
              <div className="text-gray-900 text-sm ">FLT</div>
              <svg viewBox="0 0 24 24" className="ml-auto h-6 w-6" fill="none">
                <path
                  d="M5 12a7 7 0 1 1 14 0 7 7 0 0 1-14 0ZM12 9v6M15 12H9"
                  stroke="#171717"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="border-gray-200 pt-5 mt-3 border-t">
              <div className="flex items-baseline gap-2">
                <div className="tabular-nums tracking-tight text-2xl text-gray-900">
                  {activeValue.toFixed(2)}
                </div>
                <div className="text-sm text-gray-900">USD</div>
                {percentageChange && (
                  <div
                    className={clsx(
                      'tabular-nums tracking-tight ml-auto text-sm',
                      percentageChange >= 0 ? 'text-blue-500' : 'text-gray-500'
                    )}
                  >
                    {`${
                      percentageChange >= 0 ? '+' : ''
                    }${percentageChange.toFixed(2)}%`}
                  </div>
                )}
              </div>
              <div className="text-xs text-gray-500 mt-6 flex gap-4">
                <div>1D</div>
                <div>5D</div>
                <div className="font-semibold text-blue-600">1M</div>
                <div>6M</div>
                <div>1Y</div>
                <div>5Y</div>
              </div>
              <div className="mt-3 bg-gray-50 ring-inset ring-black/5 rounded-lg ring-1">
                <Chart
                  width={286}
                  height={208}
                  paddingX={16}
                  paddingY={32}
                  activePointIndex={activePointIndex}
                  onChangeActivePointIndex={setActivePointIndex}
                />
              </div>
              <div className="text-center font-semibold text-white mt-4 text-sm rounded-lg bg-blue-500 px-4 py-2">
                Trade
              </div>
              <div className="mt-3 divide-y divide-gray-100 text-sm">
                <div className="flex justify-between py-1">
                  <div className="text-gray-500">Open</div>
                  <div className="font-medium text-gray-900">6,387.55</div>
                </div>
                <div className="flex justify-between py-1">
                  <div className="text-gray-500">Closed</div>
                  <div className="font-medium text-gray-900">6,487.09</div>
                </div>
                <div className="flex justify-between py-1">
                  <div className="text-gray-500">Low</div>
                  <div className="font-medium text-gray-900">6,322.01</div>
                </div>
              </div>
            </div>
          </div>
        </AppScreen.Body>
      </FrameMotion>
    </AppScreen>
  );
};

export default AppFeature;
