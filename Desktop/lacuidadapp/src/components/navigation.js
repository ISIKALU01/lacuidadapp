import Link from 'next/link';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import LogoLink from './logolink';
import DesktopNavLinks from './desktopNavLinks';
import MobileDrawer from './mobiledrawer';
import MobileMenuButton from './mobilemenubutton';



export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
      };

      return (
        <>
          <div className="hidden relative py-0 lg:flex flex-col justify-center bg-primary px-10 border-b-10 border-blue-900" >
            <LogoLink />
            <DesktopNavLinks />
          </div>
          <div className="lg:hidden relative flex flex-row my-4 px-15 bg-primary" >
            <LogoLink />
            <MobileMenuButton onClick={handleDrawerToggle} />
            <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
          </div>
        </>
      );

}