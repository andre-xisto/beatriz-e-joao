import styled from 'styled-components';
import { Link } from 'react-scroll';

export const Button = styled(Link)`
  border-radius: 50px;
  background-color: ${({ primary }) => (primary ? '#C3AC67' : '#010606')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#fff' : '#fff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  text-shadow: 0px 0.5px 0px #a7a7a7;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  box-shadow: 3px 3px 15px 0px #9b9b9b;

  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: ${({ primary }) => (primary ? '#998B69' : '#fff')};
  }
`;
