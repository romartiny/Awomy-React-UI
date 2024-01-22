import React from 'react';
import clsx from 'clsx';
import AppScreen from './AppScreen';
import { motion } from 'framer-motion';
import { bodyAnimation, headerAnimation } from '../../utils/FrameData';
import { cryptoData, mobileScreenData } from '../../constants/homeData';
import { FrameTap } from '../ui/MotionEffect';
import { Link } from 'react-router-dom';

const MotionAppScreenHeader = motion(AppScreen.Header);
const MotionAppScreenBody = motion(AppScreen.Body);

export function InviteScreen ({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>{mobileScreenData.inviteData.title}</AppScreen.Title>
        <AppScreen.Subtitle>
          {mobileScreenData.inviteData.subtitle}
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
            {mobileScreenData.inviteData.inputValues.map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500">{field.label}</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <FrameTap whileTap={{ scale: 0.9 }}>
            <Link to={mobileScreenData.inviteData.submitLink}>
              <div className="mt-6 rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
                {mobileScreenData.inviteData.submitButton}
              </div>
            </Link>
          </FrameTap>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}
export function StocksScreen ({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>{mobileScreenData.stockData.title}</AppScreen.Title>
        <AppScreen.Subtitle>{mobileScreenData.stockData.subtitle}</AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="divide-y divide-gray-100 flex flex-col gap-4 gap-y-0">
          {cryptoData.map((stock) => (
            <div key={stock.name} className="flex items-center gap-4 px-4 py-3">
              <div
                className="flex-none rounded-full"
                style={{ backgroundColor: stock.color }}
              >
                <stock.logo className="h-10 w-10" />
              </div>
              <div className="flex-auto text-sm text-gray-900">
                {stock.name}
              </div>
              <div className="flex-none text-right">
                <div className="text-sm font-medium text-gray-900">
                  {stock.price}
                </div>
                <div
                  className={clsx(
                    'text-xs leading-5',
                    stock.change.startsWith('+')
                      ? 'text-blue-600'
                      : 'text-gray-500'
                  )}
                >
                  {stock.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}

export function CryptoScreen ({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>{mobileScreenData.tradeData.title}</AppScreen.Title>
        <AppScreen.Subtitle>
          <span className="text-white">{mobileScreenData.tradeData.subtitle}</span> per coin
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: 'Total coins', value: mobileScreenData.tradeData.totalCoins },
              {
                label: 'Tradable',
                value: (
                  <div className="flex">
                    {mobileScreenData.tradeData.tradable}
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#2563eb"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )
              },
              { label: 'Max price', value: mobileScreenData.tradeData.maxPrice }
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <FrameTap whileTap={{ scale: 0.9 }}>
              <Link to={mobileScreenData.tradeData.submitLink}>
                <div className="rounded-lg bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white">
                  {mobileScreenData.tradeData.submitButton}
                </div>
              </Link>
            </FrameTap>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  );
}
