import React from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { getAirQuality, getError, getStatus } from '../redux/airQualitySlice';

const ApComponents = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  let content;

  if (status === 'loading') {
    content = <p className=" text-gray-400 font-Roboto">Loading...</p>;
  } else if (status === 'succeeded') {
    content = (
      <div className=" bg-white rounded-2xl drop-shadow-sm mt-3 pt-4 pb-2 font-Roboto">
        <div className="flex justify-between pb-3 border-b border-solid border-gray-300 px-3">
          <h3 className="text-l font-medium text-gray-600 ">Components</h3>
          <small className=" font-light text-gray-400">
            {' '}
            Updated:
            {moment(new Date()).startOf('hours').fromNow()}
          </small>
        </div>
        <div className="pt-2 px-2 w-full font-Roboto text-sm text-gray-400 font-bold grid grid-cols-2 gap-2">
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>CO</p>
            <p className="text-gray-600">{airQuality.components.co}</p>
          </div>

          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>
              NO
              <sub>2</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.no2}</p>
          </div>
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>NO</p>
            <p className="text-gray-600">{airQuality.components.no}</p>
          </div>
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>
              O
              <sub>3</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.o3}</p>
          </div>
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>
              SO
              <sub>2</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.so2}</p>
          </div>
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>
              PM
              <sub>2.5</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.pm2_5}</p>
          </div>
          <div className=" rounded-lg border border-gray-300  border-solid px-2 py-2 flex justify-between">
            <p>
              {' '}
              PM
              <sub>10</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.pm10}</p>
          </div>
          <div className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between">
            <p>
              NH
              {' '}
              <sub>3</sub>
            </p>
            <p className="text-gray-600">{airQuality.components.nh3}</p>
          </div>
        </div>
      </div>
    );
  } else if (status === 'failed') {
    content = <p className="text-red-400 font-Roboto">{error}</p>;
  }

  return <div>{content}</div>;
};

export default ApComponents;
