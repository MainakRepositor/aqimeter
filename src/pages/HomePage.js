import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { HiSearchCircle } from 'react-icons/hi';
import DetailsSummary from '../components/DetailsSummary';
import {
  fetchAirQuality,
  getAirQuality,
  getError,
  getStatus,
} from '../redux/airQualitySlice';
import { otherLocation } from '../data/apiData';

const HomePage = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const handleShowDetails = (location) => {
    if (addRequestStatus === 'idle') {
      try {
        setAddRequestStatus('pending');
        dispatch(fetchAirQuality(location)).unwrap();
      } catch (err) {
        throw new Error(err);
      } finally {
        setAddRequestStatus('idle');
      }
    }
  };

  return (
    <div className="home__section relative min-h-screen px-4">
      <nav className="flex justify-between p-4 items-center ">
        <Link to="/">
          <div className="flex flex-col border border-solid border-gray-400 rounded-lg p-3">
            <p className=" font-Montserrat text-green-600 font-black text-3xl leading-none tracking-widest">
              AQAL
            </p>
            <small className="text-orange-400 font-Roboto text-sm text-gray-400 uppercase leading-none tracking-tighter">
              air quality app
            </small>
          </div>
        </Link>
        <Link to="search">
          <HiSearchCircle className="text-4xl text-green-600 " />
        </Link>
      </nav>

      <div className="rounded-xl bg-white py-2 pb-4 mb-4 flex flex-col justify-center items-start drop-shadow">
        <div className="text-l font-medium text-gray-600 pb-3 border-b border-solid border-gray-300 px-3 w-full ">
          <h3 className="px-1">Home</h3>
        </div>
        <div className="px-4 pt-3">
          <DetailsSummary
            airQuality={airQuality}
            status={status}
            error={error}
            summary={false}
          />
        </div>
      </div>
      <div>
        <div className=" bg-white rounded-2xl drop-shadow-sm mt-3 pt-4 pb-2 font-Roboto">
          <div className="flex justify-between pb-3 border-b border-solid border-gray-300 px-3">
            <h3 className="text-l font-medium text-gray-600 ">Other Major Cities</h3>
          </div>
          <div>
            <ul className="pt-2 px-2 w-full font-Roboto text-sm text-gray-400 font-bold grid grid-cols-2 gap-2">
              {otherLocation.map((location) => (
                <Link
                  to="search/details"
                  key={location.id}
                  onClick={() => handleShowDetails(location)}
                >
                  <li className=" rounded-lg border  border-gray-300 border-solid px-2 py-2 flex justify-between hover:bg-green-600 hover:text-white">
                    <p>{location.name}</p>
                    <p className="text-gray-600">{location.country}</p>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Link
        className="group font-Roboto mx-10 mt-3 flex items-center justify-between rounded-2xl border border-current px-5 py-3 bg-white text-gray-500 transition-colors hover:bg-green-600 focus:outline-none focus:ring active:bg-green-500"
        to="search"
      >
        <span className="font-medium transition-colors group-hover:text-white">
          Search other Locations
        </span>

        <span className="ml-4 flex-shrink-0 rounded-full border border-gray-600  p-2 group-active:border-white">
          <HiSearchCircle />
        </span>
      </Link>
    </div>
  );
};

export default HomePage;
