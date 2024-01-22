import React from 'react';
import Container from '../Container';
import Title from './Title';
import { accountData, consData } from '../../constants/homeData';
import { FrameHover, FrameMotion } from '../ui/MotionEffect';

const Cons = () => {
  return (
    <section className="relative z-30 bg-black rounded-t-xl">
      <Container
        id="account"
        aria-label="Features for building a portfolio"
        className="py-20 sm:py-32"
      >
        <FrameMotion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>
          <div className=" mx-auto max-w-2xl sm:text-center">
            <Title
              title={consData.title}
              className="text-2xl"
            />
            <p className="mt-2 text-lg text-gray-600">
              {consData.description}
            </p>
          </div>
        </FrameMotion>
        <FrameMotion initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>
          <ul
            role="list"
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
          >
            {accountData.map((item) => (
                <li
                  key={item.name}
                  className="rounded-2xl border border-gray-200 hover:border-gray-200 p-8 group hover:bg-gray-200 duration-300 cursor-pointer"
                >
                    <FrameHover key={item.name} whileHover={{ scale: 1.05 }}>
                    <item.icon className="h-8 w-8" />
                    <h3 className="mt-6 font-semibold text-gray-300 group-hover:text-black duration-300">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-gray-500 group-hover:text-black duration-300">
                      {item.description}
                    </p>
                  </FrameHover>
                </li>
            ))}
          </ul>
        </FrameMotion>
      </Container>
    </section>
  );
};

export default Cons;
