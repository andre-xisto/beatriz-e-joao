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
          <SidebarLink to='about' onClick={toggle}>
            Casamento
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='discover' onClick={toggle}>
            Transporte
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='services' onClick={toggle}>
            Alojamento
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='services' onClick={toggle}>
            Lista de Casamento
          </SidebarLink>
        </SidebarMenu>
        <SidebarMenu>
          <SidebarLink to='services' onClick={toggle}>
            Informações COVID
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
