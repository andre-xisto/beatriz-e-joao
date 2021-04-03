import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/logo-BJ3.png';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavBJ,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks
} from './NavbarElements';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>
            <NavBJ src={Logo} />
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='cerimonia'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Casamento
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='transporte'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Transporte
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='alojamento'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Onde Ficar
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='lista'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Lista de Casamento
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='covid'
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Informações COVID
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
