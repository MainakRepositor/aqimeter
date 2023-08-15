import { nanoid, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { geoURL } from '../data/apiData';

const initialState = {
  locations: [],
  status: 'idle',
  error: 'null',
};

export const fetchLocation = createAsyncThunk(
  'locations/fetchLocation',
  async (location) => {
    try {
      const response = await axios.get(geoURL(location));
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const searchLocationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const loadedData = action.payload.map((payload) => {
          const {
            name, lat, lon, country, state,
          } = payload;
          return {
            id: nanoid(),
            name,
            lat,
            lon,
            country,
            state,
            favorite: false,
          };
        });

        state.locations = [...loadedData];
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getSearchLocations = (state) => state.locations.locations;
export const getStatus = (state) => state.locations.status;
export const getError = (state) => state.locations.error;

export default searchLocationsSlice.reducer;
