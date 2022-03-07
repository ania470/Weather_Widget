import React from 'react';
import styled from 'styled-components';
import { GpsIcon } from 'assets/GpsIcon';
import { useTranslation } from 'react-i18next';

const StyledInput = styled.input`
  margin: 0 10px;
  width: 250px;
  background-color: transparent;
  border: none;
  border-bottom: 3px solid #ffffffcc;
  outline: none;
  color: #111c46;
  font-size: ${({ theme }) => theme.fonts.large};
  position: relative;

  ::placeholder {
    color: #111c46;
  }
`;
const InputWrapper = styled.div`
  position: relative;
`;
const WeatherInfoError = styled.p`
  margin: 0 auto;
  font-size: 12px;
  color: red;
  font-weight: bold;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: fit-content;
`;

export const ChooseCityInput = ({
  onChange,
  setMyLocation,
  dataStatus = 200,
  transKey,
}) => {
  const { t } = useTranslation();
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setMyLocation({
        lat: position.coords.latitude,
        long: position.coords.longitude,
      });
    });
  };

  return (
    <InputWrapper>
      <StyledInput
        type="text"
        placeholder={t('InputPlaceholder')}
        onChange={(e) => onChange(e)}
      />
      <GpsIcon onClick={getLocation} />
      {dataStatus !== 200 && <WeatherInfoError>{t(transKey)}</WeatherInfoError>}
    </InputWrapper>
  );
};
