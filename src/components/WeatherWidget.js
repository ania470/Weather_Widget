import React, { useState } from 'react';
import styled from 'styled-components';
import { WeatherInfo } from 'components/WeatherInfo';
import { Button } from 'components/Button';
import { ChooseCityInput } from 'components/ChooseCityInput';
import { DataLoader } from './DataLoader';
import { useDidMountEffect } from 'helpers/helpers';
import { useTranslation } from 'react-i18next';

const Navigation = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  } ;
`;
const Sections = styled.div`
  height: 30px;
  display: flex;
  align-items: center;

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
    display: block;
  } ;
`;

export const WeatherWidget = () => {
  const [language, setLanguage] = useState('PL');
  const [city, setCity] = useState('');
  const [data, setData] = useState();
  const [myLocation, setMyLocation] = useState(false);
  const { t, i18n } = useTranslation();
  const [showLoader, setShowLoader] = useState(false);

  useDidMountEffect(() => {
    myLocation && getWeather(myLocation);
    city && getWeather();
    i18n.changeLanguage(language.toLowerCase());
  }, [language, myLocation]);

  const handleWeather = () => {
    getWeather();
    setMyLocation(false);
  };

  const getWeather = (location) => {
    const BASE_URL = 'https://api.openweathermap.org';
    const API_KEY = String(process.env.REACT_APP_WEATHER_API_KEY);
    setShowLoader(true);

    let queryUrl = location
      ? `${BASE_URL}/data/2.5/weather?lat=${location.lat}&lon=${
          location.long
        }&lang=${language.toLowerCase()}&appid=${API_KEY}&units=metric`
      : `${BASE_URL}/data/2.5/weather?q=${city}&lang=${language.toLowerCase()}&appid=${API_KEY}&units=metric`;

    fetch(queryUrl)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setShowLoader(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <>
      <Navigation>
        <Sections>
          {['PL', 'EN', 'DE'].map((lang, index) => (
            <Button
              onClick={(e) => setLanguage(e.target.innerText)}
              key={index}
              activLanguage={language}
            >
              {lang}
            </Button>
          ))}
        </Sections>
        <Sections>
          <ChooseCityInput
            onChange={(e) => setCity(e.target.value)}
            setMyLocation={setMyLocation}
            dataStatus={data && data.cod}
            language={language}
            transKey={data && data.message}
          />
          <Button onClick={handleWeather} searchBtn>
            {t('ButtonName')}
          </Button>
        </Sections>
      </Navigation>
      {data && data.cod === 200 && <WeatherInfo data={data} />}
      {showLoader && <DataLoader />}
    </>
  );
};
