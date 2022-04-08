import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.button`
  margin: 0 5px;
  color: ${({ theme }) => theme.colors.mainFontColor};
  cursor: pointer;
  border: none;
  padding: 5px 10px;
  font-weight: 700;
  border-radius: ${({ searchBtn }) => (searchBtn ? '5px' : 0)};
  border-bottom: ${({ active }) => active && '1px solid black'};
  background-color: ${({ searchBtn }) =>
    searchBtn ? '#3c3c3c40' : 'transparent'};
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: ${({ searchBtn }) => searchBtn && '25px auto 0'};
    display: ${({ searchBtn }) => searchBtn && 'block'};
  } ;
`;

export const Button = ({ children, onClick, activLanguage, searchBtn }) => {
  return (
    <>
      <ButtonStyles
        active={children === activLanguage}
        onClick={onClick}
        searchBtn={searchBtn}
      >
        {children}
      </ButtonStyles>
    </>
  );
};
