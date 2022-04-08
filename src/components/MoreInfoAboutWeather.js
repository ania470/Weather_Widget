import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const DetailsInfoWeather = styled.div`
  margin-top: 30px;
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    grid-template-columns: auto auto;
  }
  p {
    font-size: 14px;
    font-weight: bold;
    @media only screen and (max-width: ${({ theme }) =>
        theme.breakpoints.sm}px) {
      font-size: 12px;
      width: 95%;
      text-align: left;
    }
  }
  span {
    font-size: 22px;
  }
`;

export const MoreInfoAboutWeather = ({
  main: { pressure, temp_max, temp_min, humidity },
  wind: { speed },
}) => {
  const { t } = useTranslation();
  return (
    <DetailsInfoWeather>
      <p>
        {t('Pressure')} <span>{pressure}</span> hPa
      </p>
      <p>
        {t('Wind')} <span>{speed}</span> km/h
      </p>
      <p>
        {t('MaxTemp')} <span>{temp_max.toFixed(1)}</span> °C
      </p>
      <p>
        {t('MinTemp')} <span>{temp_min.toFixed(1)}</span> °C
      </p>
      <p>
        {t('Humidity')} <span>{humidity}</span> %
      </p>
    </DetailsInfoWeather>
  );
};
