import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='cerimonia' onClick={toggle}>
            Casamento
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='transporte' onClick={toggle}>
            Transporte
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='alojamento' onClick={toggle}>
            Onde Ficar
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='lista' onClick={toggle}>
            Lista de Casamento
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='covid' onClick={toggle}>
            Informações COVID
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
