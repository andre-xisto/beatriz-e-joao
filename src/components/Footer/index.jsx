import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import Logo from '../../images/logo-BJ_white.png';

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  LogoBJ,
  SocialMedia,
  SocialMediaWrapper,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink
} from './FooterElements';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Confirmações</FooterLinkTitle>
              <FooterLink to='/signin'>beatriz.choon@gmail.com</FooterLink>
              <FooterLink to='/signin'>joaoncdferreira@gmail.com</FooterLink>
              <FooterLink to='/signin'>Até 10 de Maio</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>IBAN</FooterLinkTitle>
              <FooterLink to='/signin'>PT50 0023 0000 4561 3181 6439 4</FooterLink>
              <FooterLink to='/signin'>Activobank</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Contactos</FooterLinkTitle>
              <FooterLink to='/signin'>Madrinha: XXX XXX XXX</FooterLink>
              <FooterLink to='/signin'>Padrinho: XXX XXX XXX</FooterLink>
              <FooterLink to='/signin'>Drivers: 915 284 443</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
              <LogoBJ src={Logo} />
            </SocialLogo>
          </SocialMediaWrapper>
          <WebsiteRights>10 de Julho de 2021</WebsiteRights>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
