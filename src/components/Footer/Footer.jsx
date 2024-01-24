import React from 'react';
import Container from '../Container';
import { Link } from 'react-router-dom';
import { footerData } from '../../constants/footerData';
import { FrameMotion } from '../ui/MotionEffect';
import Logo from "../Logo";

const Footer = () => {
  return (
    <footer id="footer-navigation" className="pt-20 sm:pt-32 z-30 bg-black unset lg:relative">
      <Container>
        <FrameMotion initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ type: 'spring', stiffness: 130, damping: 25 }}>
          <div className="flex flex-col gap-12 lg:flex-row">
            <div className="flex-1 mx-auto lg:mx-0 mb-6 max-w-[285px]">
              <div className="header-logo">
                <Link to={'/'} className="flex items-center">
                  <Logo className={'mr-3 h-8 md:lg-9 sm:h-9 lg:h-9'} />
                  <h2 className="self-center text-xl font-semibold whitespace-nowrap text-white">Awomy</h2>
                </Link>
              </div>
            </div>
            <div className="flex flex-1 flex-col gap-16 lg:flex-row">
              <div className="text-center w-full lg:text-left">
                <div className="mb-6">
                  <p className="text-xl font-semibold whitespace-nowrap ">Quick Links</p>
                </div>
                <ul className="space-y-4 text-gray">
                  {
                    footerData.quickLinks.map(item => (
                        <li key={item.title}>
                          <Link to={item.link} className="hover:bg-primary-800 font-medium rounded-lg text-sm hover:text-gray-400 transition ease-in-out delay-70">{item.title}</Link>
                        </li>
                    ))
                  }
                </ul>
              </div>
              <div className="text-center w-full lg:text-left">
                <div className="mb-6">
                  <p className="text-xl font-semibold whitespace-nowrap ">Resources Links</p>
                </div>
                <ul className="space-y-4 text-gray">
                  {
                    footerData.resourcesLinks.map(item => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:bg-primary-800 font-medium rounded-lg text-sm hover:text-gray-400 transition ease-in-out delay-70">{item.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="text-center w-full lg:text-left">
                <div className="mb-6">
                  <p className="text-xl font-semibold whitespace-nowrap ">Awomy Links</p>
                </div>
                <ul className="space-y-4 text-gray">
                  {
                    footerData.tokensLinks.map(item => (
                      <li key={item.title}>
                        <Link to={item.link} className="hover:bg-primary-800 font-medium rounded-lg text-sm hover:text-gray-400 transition ease-in-out delay-70">{item.title}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto flex flex-col items-center gap-y-6 lg:flex-row lg:justify-between pt-12">
            <div className="font-medium whitespace-nowrap mb-6">
              <Link to={footerData.copyright.link}>
                {footerData.copyright.title}
              </Link>
            </div>
          </div>
        </FrameMotion>
      </Container>
    </footer>
  );
};

export default Footer;
