import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';
import Icon1 from '../../images/quinta-machados.jpg';
import Icon2 from '../../images/ninho-saloio.jpg';
import Icon3 from '../../images/svg-3.svg';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Onde Ficar</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Quinta dos Machados</ServicesH2>
          <ServicesP>
            A apenas 3.6km da Casa de Reguengos. Disfrute da Natureza, Piscina e Spa.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Ninho Saloio</ServicesH2>
          <ServicesP>Perto da Venda do Pinheiro. Volte a reencontrar-se com a natureza.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5% cash back.</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
