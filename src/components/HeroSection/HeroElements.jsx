import styled from 'styled-components';
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md';

export const HeroContainer = styled.div`
  background-color: #fffefd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const HeroImg = styled.img`
  height: 40vh;
  position: relative;

  @media screen and (max-width: 768px) {
    width: 80vw;
    height: auto;
  }
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroText = styled.img`
  height: 20vh;

  @media screen and (max-width: 480px) {
    max-width: 95%;
    height: auto;
    padding-top: 4vh;
  }
`;

export const HeroP = styled.p`
  color: #9c9c9c;
  margin-top: 12px;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin-top: 24px;
  }
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
