import { configureStore } from '@reduxjs/toolkit';
import airQualityReducer from './airQualitySlice';
import searchLocationsReducer from './searchLocationsSlice';
import fetchForcastsReducer from './forcastAqSlice';

const store = configureStore({
  reducer: {
    airQuality: airQualityReducer,
    locations: searchLocationsReducer,
    forcastAq: fetchForcastsReducer,
  },
});

export default store;
