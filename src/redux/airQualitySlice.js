import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { airQualityURL } from '../data/apiData';

const initialState = {
  airQuality: {},
  status: 'idle',
  error: 'null',
};

export const fetchAirQuality = createAsyncThunk('airQuality/fetchAirQuality', async (location) => {
  try {
    const response = await axios.get(airQualityURL(location.lat, location.lon));
    return { ...response.data, location };
  } catch (err) {
    throw new Error(err);
  }
});

const airQualitySlice = createSlice({
  name: 'airQuality',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAirQuality.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAirQuality.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { list, location } = action.payload;
        const { main, dt, components } = list[0];
        state.airQuality = {
          main: { ...main },
          dt,
          components: { ...components },
          location: { ...location },
        };
      })
      .addCase(fetchAirQuality.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getAirQuality = (state) => state.airQuality.airQuality;
export const getStatus = (state) => state.airQuality.status;
export const getError = (state) => state.airQuality.error;

export default airQualitySlice.reducer;
