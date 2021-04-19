import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

import { Link as LinkScroll } from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #c3ac67;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 3rem;
  background-color: transparent;
  font-size: 2.5rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(1, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(1, 60px);
  }
`;

export const SidebarLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #c3ac67;

  &:hover {
    transition: 0.2s ease-in-out;
  }
`;
