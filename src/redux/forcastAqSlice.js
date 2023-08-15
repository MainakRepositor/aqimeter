import { nanoid, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { forcastAqURL } from '../data/apiData';

const initialState = {
  forcastAq: [],
  status: 'idle',
  error: 'null',
};

export const fetchForcastAq = createAsyncThunk(
  'forcastAq/fetchForcastAq',
  async (location) => {
    const { lat, lon } = location;
    try {
      const response = await axios.get(forcastAqURL(lat, lon));
      return response.data;
    } catch (err) {
      throw new Error(err);
    }
  },
);

const forcastAqSlice = createSlice({
  name: 'forcastAq',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchForcastAq.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchForcastAq.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const { list } = action.payload;

        const dataStream = list.map((element) => {
          const { dt, main } = element;
          const dateTime = new Date(dt * 1000);
          const date = dateTime.toLocaleDateString('en-US');
          const hours = dateTime.getHours();
          const minutes = `0${dateTime.getMinutes()}`;
          return {
            id: nanoid(), date, time: `${hours}:${minutes}`, main,
          };
        });
        state.forcastAq = dataStream.splice(1, 25);
      })
      .addCase(fetchForcastAq.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getforcastAq = (state) => state.forcastAq.forcastAq;
export const getStatus = (state) => state.forcastAq.status;
export const getError = (state) => state.forcastAq.error;

export default forcastAqSlice.reducer;
