import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../images/foto-b&j.png';
import TextImage from '../../images/beatriz-&-joao.png';
import { Button, ButtonMailto } from '../ButtonElement';
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

  const onClickMailtoHandler = () => {
    window.open('mailto:beatriz.choon@gmail.com?subject=Resposta a Convite de Casamento');
  };

  return (
    <HeroContainer id='home'>
      <HeroContent>
        <HeroImg src={Image} />
        <HeroText src={TextImage} />
        <HeroP>10 de Julho de 2021</HeroP>
        <HeroBtnWrapper>
          <Button
            onClick={onClickMailtoHandler}
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
            Confirmar até 10 de Maio {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
