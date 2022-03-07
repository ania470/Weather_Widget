import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const DetailsInfoWeather = styled.div`
  margin-top: 30px;
  display: flex;
  width: 100%;
  p {
    font-size: 14px;
    font-weight: bold;
  }
  span {
    font-size: 22px;
  }
`;
const Details = styled.div`
  width: 33%;

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
      <Details>
        <p>
          {t('Pressure')} <span>{pressure}</span> hPa
        </p>
        <p>
          {t('Wind')} <span>{speed}</span> km/h
        </p>
      </Details>
      <Details>
        <p>
          {t('MaxTemp')} <span>{temp_max.toFixed(1)}</span> °C
        </p>
        <p>
          {t('MinTemp')} <span>{temp_min.toFixed(1)}</span> °C
        </p>
      </Details>
      <Details>
        <p>
          {t('Humidity')} <span>{humidity}</span> %
        </p>
      </Details>
    </DetailsInfoWeather>
  );
};
