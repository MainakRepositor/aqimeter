import React from 'react';
import { aqiRatings, handleRatings } from '../data/apiData';

const DetailsSummary = ({
  airQuality, status, error, summary,
}) => {
  let content;
  if (airQuality.main) {
    const filter = handleRatings(aqiRatings, airQuality?.main?.aqi)[0];
    if (status === 'loading') {
      content = <p className=" text-gray-400 font-Roboto">Loading...</p>;
    } else if (status === 'succeeded') {
      content = (
        <>
          <div className="flex gap-4 items-center bg-lem">
            <div
              className="font-Montserrat rounded-2xl h-24 w-24 flex flex-col justify-center gap-0.5 items-center"
              style={{
                backgroundColor: `${filter.borderColor}`,
              }}
            >
              <p className=" font-light text-white text-5xl ">{airQuality.main.aqi}</p>
              <small className=" font-medium text-white">AQI</small>
            </div>
            <div>
              <h3 className=" font-Montserrat font-bold text-2xl">
                {airQuality.location.name}
              </h3>
              <small className=" font-Roboto font-light text-sm">
                {airQuality.location.state}
                {airQuality.location.state ? ' - ' : ''}
                {airQuality.location.country}
              </small>
            </div>
          </div>
          <p className=" font-Roboto pt-5 font-bold">
            Air Quality is
            {' '}
            <span style={{ color: `${filter.borderColor}` }}>{filter.rating}</span>
            {' '}
            at the
            moment
          </p>
          {summary ? <p className="pt-3 font-Roboto">{filter.comment}</p> : null}
        </>
      );
    } else if (status === 'failed') {
      content = <p className="text-red-400 font-Roboto text-center">{error}</p>;
    }
  }

  return <div>{content}</div>;
};

export default DetailsSummary;
