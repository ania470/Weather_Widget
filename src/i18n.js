import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pl: {
    translation: {
      ButtonName: 'Pogoda',
      'Nothing to geocode': 'Podaj prawidłowe dane',
      'city not found': 'Nie znaleziono miasta',
      InputPlaceholder: 'Wpisz miasto...',
      Pressure: 'Ciśnienie',
      Wind: 'Wiatr',
      MaxTemp: 'Temp. max',
      MinTemp: 'Temp. min',
      Humidity: 'Wilgotność',
      ShowMore: 'Pokaż więcej',
      ShowLess: 'Pokaż mniej',
    },
  },
  en: {
    translation: {
      ButtonName: 'Weather',
      'Nothing to geocode': 'Incorrect data',
      'city not found': 'City not found',
      InputPlaceholder: 'Type your city...',
      Pressure: 'Pressure',
      Wind: 'Wind',
      MaxTemp: 'Max temp.',
      MinTemp: 'Min temp.',
      Humidity: 'Humidity',
      ShowMore: 'Show more',
      ShowLess: 'Show less',
    },
  },
  de: {
    translation: {
      ButtonName: 'Pogode',
      'Nothing to geocode': 'Fehlerhafte Daten',
      'city not found': 'Die Stadt wurde nicht gefunden',
      InputPlaceholder: 'Die Stadt betreten...',
      Pressure: 'Luftdruck',
      Wind: 'Wind',
      MaxTemp: 'Max temp.',
      MinTemp: 'Min temp.',
      Humidity: 'Feuchtigkeit',
      ShowMore: 'Zeig mehr',
      ShowLess: 'zeige weniger',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'pl',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
