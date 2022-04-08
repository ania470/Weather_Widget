import React, { useState } from 'react';
import styled from 'styled-components';
import { MoreInfoAboutWeather } from './MoreInfoAboutWeather';
import { useTranslation } from 'react-i18next';

const WeatherDiv = styled.div`
  margin-top: 70px;
  text-align: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
    margin-top: 50px;
  } ;
`;
const MainInfoWeather = styled.div`
  display: flex;
  p {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fonts.large};
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm}px) {
      font-size: 15px;
      margin: 0;
    }
  }
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  } ;
`;
const StyledNameCity = styled.h1`
  font-size: 30px;
  width: 33%;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: 0 auto 10px;
    width: auto;
  } ;
`;
const Degrees = styled.h1`
  font-size: 40px;
  margin: 0;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    font-size: 25px;
  } ;
`;
const StyledImg = styled.img`
  width: 100px;
  height: auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    width: 70px;
  } ;
`;
const WeatherSections = styled.div`
  width: 35%;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: auto;
    width: auto;
  } ;
`;
const ShowMoreClick = styled.p`
  display: flex;
  cursor: pointer;
  font-size: 12px;
  margin: 30px auto 0;
  font-weight: bold;
  width: max-content;
  border-bottom: 1px solid black;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    margin: auto;
  } ;
`;

export const WeatherInfo = ({ data: { name, weather, main, wind } }) => {
  const { t } = useTranslation();
  const [showMore, setShowMore] = useState(false);

  return (
    <WeatherDiv>
      <MainInfoWeather>
        <StyledNameCity>{name}</StyledNameCity>
        <WeatherSections>
          <Degrees>{main.temp.toFixed(1)}°C</Degrees>
          <p>{weather[0].description}</p>
        </WeatherSections>
        <WeatherSections>
          <StyledImg
            alt=""
            src={`https://openweathermap.org/img/wn/${weather[0].icon}.png`}
          />
        </WeatherSections>
      </MainInfoWeather>
      {!showMore ? (
        <ShowMoreClick onClick={() => setShowMore(true)}>
          {t('ShowMore')}
        </ShowMoreClick>
      ) : (
        <ShowMoreClick onClick={() => setShowMore(false)}>
          {t('ShowLess')}
        </ShowMoreClick>
      )}
      {showMore && (
        <MoreInfoAboutWeather main={main} wind={wind}></MoreInfoAboutWeather>
      )}
    </WeatherDiv>
  );
};
