import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useNavbarEffect from '../../../hooks/useNavbarEffect';
import Pages from './Pages';

import Scrollbars from 'react-custom-scrollbars-2';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import Logo from './Logo';
import Socials from '../../../views/home/hero/Socials';
import Copyright from '../footer/Copyright';
import Button from '../../common/Button';
import AnchorButton from '../../common/AnchorButton';

export default function Navbar() {
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => setDrawer((v) => !v);
  const navbar = useNavbarEffect('py-5 bg-primary-50', 'py-3 bg-white shadow-navbar', 70);

  return (
    <nav className={`sticky top-0 z-[1020] duration-150 ${navbar}`}>
      <div className="container">
        <div className="flex gap-4 items-center justify-between">
          <Logo />
          <div className="hidden md:block">
            <Pages />
          </div>

          <div className="hidden md:block">
            <AnchorButton
              arrow
              href="/Resume_Andrew_Tian_1.pdf"
              variant="small-contained-black"
              text="Download Resume"
            />
          </div>

          <div className="md:hidden">
            <button type="button" onClick={toggleDrawer}>
              <img src="/images/menu.svg" className="w-5 h-5" alt="" />
            </button>
            <div>
              <Drawer style={{ width: 300 }} open={drawer} onClose={toggleDrawer} direction="left">
                <Scrollbars>
                  <div className="h-full px-4 pt-6 pb-2 flex flex-col justify-between">
                    <div>
                      <div className="flex mb-14 gap-4 justify-between">
                        <div onClick={toggleDrawer}>
                          <Logo />
                        </div>
                        <button type="button" onClick={toggleDrawer}>
                          <img className="w-4 h-4" src="/images/xmark-solid.svg" alt="" />
                        </button>
                      </div>
                      <div className="px-2 mb-8">
                        <Pages toggleDrawer={toggleDrawer} />
                      </div>
                    </div>
                    <footer className="flex flex-col pb-4 gap-2">
                      <Socials />
                      <Copyright footer />
                    </footer>
                  </div>
                </Scrollbars>
              </Drawer>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
