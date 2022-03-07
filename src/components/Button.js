import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.mainFontColor};
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 5px 10px;
  font-weight: 700;
  border-bottom: ${({ active }) => active && '1px solid black'};
`;

export const Button = ({ children, onClick, activLanguage }) => {
  return (
    <>
      <ButtonStyles active={children === activLanguage} onClick={onClick}>
        {children}
      </ButtonStyles>
    </>
  );
};
