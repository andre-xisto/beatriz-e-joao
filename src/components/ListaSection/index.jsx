import React from 'react';
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ListaElements';
import quintaMachados from '../../images/quinta-machados.jpg';
import ninhoSaloio from '../../images/ninho-saloio.jpg';
import Icon3 from '../../images/Airbnb-Logo.png';

const Services = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  };

  return (
    <ServicesContainer id='lista'>
      <ServicesH1>Lista de Casamento</ServicesH1>
      <ServicesWrapper>
        <a
          href='https://www.booking.com/hotel/pt/quinta-dos-machados-alojamento-rural-e-eventos.pt-pt.html'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <ServicesCard>
            <ServicesIcon src={quintaMachados} />
            <ServicesH2>Quinta dos Machados</ServicesH2>
            <ServicesP>
              A apenas 3.6km da Casa de Reguengos. Disfrute da Natureza, Piscina e Spa.
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href='https://www.booking.com/hotel/pt/ninho-saloio.pt-pt.html'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <ServicesCard>
            <ServicesIcon src={ninhoSaloio} />
            <ServicesH2>Ninho Saloio</ServicesH2>
            <ServicesP>
              Perto da Venda do Pinheiro. Volte a reencontrar-se com a natureza.
            </ServicesP>
          </ServicesCard>
        </a>
        <a
          href='https://www.airbnb.pt/s/mafra/homes'
          style={linkStyle}
          target='_blank'
          rel='noreferrer'
        >
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Airbnb</ServicesH2>
            <ServicesP>
              Aproveite o fim-de-semana numa das casas mais românticas a apenas 30 minutos de
              Lisboa.
            </ServicesP>
          </ServicesCard>
        </a>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
