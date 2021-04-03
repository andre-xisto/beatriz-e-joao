import React, { useState } from 'react';
import { Button } from '../ButtonElement';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Address1,
  Address2,
  Phone,
  BtnWrap,
  ImgWrap,
  Image,
  ArrowForward,
  ArrowRight,
  PhoneIcon
} from './InfoElements';

const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  address1,
  address2,
  phone,
  darkText,
  description1,
  description2,
  buttonLabel,
  buttonCoords,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const onClickHandler = () => {
    window.open(buttonCoords);
  };

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description1}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                {{ phone }.phone ? (
                  <Phone darkText={darkText}>
                    <PhoneIcon /> {phone}
                  </Phone>
                ) : (
                  ''
                )}
                <Address1 darkText={darkText}>{address1}</Address1>
                <Address2 darkText={darkText}>{address2}</Address2>
                <BtnWrap>
                  <Button
                    onClick={onClickHandler}
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel} {hover ? <ArrowForward /> : <ArrowRight />}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Image src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
