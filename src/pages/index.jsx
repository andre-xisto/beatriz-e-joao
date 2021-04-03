import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { cerimonia, recepcao, transporte } from '../components/InfoSection/Data';
import Services from '../components/ServicesSection';
import InviteSection from '../components/InviteSection/index';
import Footer from '../components/Footer';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...cerimonia} />
      <InfoSection {...recepcao} />
      <InfoSection {...transporte} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
