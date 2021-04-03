import React, { useState } from 'react';
import Image from '../../images/foto-b&j.png';
import TextImage from '../../images/beatriz-&-joao.png';
import { Button } from '../ButtonElement';
import {
  HeroContainer,
  HeroImg,
  HeroContent,
  HeroText,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroImg src={Image} />
        <HeroText src={TextImage} />
        <HeroP>10 de Julho de 2021</HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
            smooth={true}
            duration={500}
            spy={true}
            exact='true'
            offset={-80}
          >
            Mais Pormenores {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
