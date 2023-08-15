/* eslint-disable */
import { nanoid } from '@reduxjs/toolkit';

const APP_ID = '05cac1b6e91db3212d68b7e40d3755c6';
const AP_BASE_URL = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const FORCAST_AP_BASE_URL =
  'https://api.openweathermap.org/data/2.5/air_pollution/forecast?';
const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0/direct?';
const limit = 5;

// FIXME: Fixed implicit-arrow-linebreak, but broke max-len
export const geoURL = (location) =>
  `${GEO_BASE_URL}q=${location}&limit=${limit}&appid=${APP_ID}`;

export const airQualityURL = (lat, lon) =>
  `${AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

export const forcastAqURL = (lat, lon) =>
  `${FORCAST_AP_BASE_URL}lat=${lat}&lon=${lon}&appid=${APP_ID}`;

export const aqiRatings = [
  {
    aqi: 1,
    color: 'rgb(0, 128, 0, 0.5)',
    borderColor: 'rgb(0, 128, 0)',
    rating: 'Excellent',
    comment: 'No health implications.',
  },
  {
    aqi: 2,
    color: 'rgb(156, 234, 82, 0.5)',
    borderColor: 'rgb(156, 234, 82)',
    rating: 'Good',
    comment: 'Some pollutants may slightly affect very few hypersensitive individuals.',
  },
  {
    aqi: 3,
    color: 'rgb(255, 165, 0, 0.5)',
    borderColor: 'rgb(255, 165, 0)',
    rating: 'Moderately Polluted',
    comment:
      'Healthy people may experience slight irritations and sensitive individuals will be slightly affected to a larger extent.',
  },
  {
    aqi: 4,
    color: 'rgb(232, 96, 47, 0.5)',
    borderColor: 'rgb(232, 96, 47)',
    rating: 'Heavily Polluted',
    comment:
      'Sensitive individuals will experience more serious conditions. The hearts and respiratory systems of healthy people may be affected.',
  },
  {
    aqi: 5,
    color: 'rgb(255, 0, 0, 0.5)',
    borderColor: 'rgb(255, 0, 0)',
    rating: 'Severely Polluted',
    comment:
      'Healthy people will commonly show symptoms. People with respiratory or heart diseases will be significantly affected and will experience reduced endurance in activities.',
  },
];

export const otherLocation = [
  {
    id: '_1Hh9jXsH7qaOk1pHfiaI',
    name: 'Amsterdam',
    lat: 52.3727598,
    lon: 4.8936041,
    country: 'NL',
    state: 'North Holland',
    favorite: false,
  },
  {
    id: 'b-GpErGjLPxMwZbS_3WlM',
    name: 'Abuja',
    lat: 9.0643305,
    lon: 7.4892974,
    country: 'NG',
    state: 'Federal Capital Territory',
    favorite: false,
  },
  {
    id: 'CbYsXb_Dy0LmfAHjlhsGi',
    name: 'Sydney',
    lat: -33.8698439,
    lon: 151.2082848,
    country: 'AU',
    state: 'New South Wales',
    favorite: false,
  },
  {
    id: 'T99ZosQnD90gBpS8vsks1',
    name: 'London',
    lat: 51.5073219,
    lon: -0.1276474,
    country: 'GB',
    state: 'England',
    favorite: false,
  },
  {
    id: '8sW7o86uMYkWsSrKMpN7a',
    name: 'Tunis',
    lat: 36.8002068,
    lon: 10.1857757,
    country: 'TN',
    state: 'Tunis',
    favorite: false,
  },
  {
    id: 'N2O6Cpgmt3-j6pj0J95iS',
    name: 'Shanghai',
    lat: 31.2322758,
    lon: 121.4692071,
    country: 'CN',
    favorite: false,
  },
];

export const handleRatings = (data = aqiRatings, aqi) =>
  data.filter((ratings) => ratings.aqi === aqi);

export const handleColorMap = (dataArr) =>
  dataArr.map((aqi) => handleRatings(aqiRatings, aqi)[0].color);

export const handleBorderColorMap = (dataArr) =>
  dataArr.map((aqi) => handleRatings(aqiRatings, aqi)[0].borderColor);
