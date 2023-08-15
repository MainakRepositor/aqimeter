import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getSearchLocations, getStatus, getError } from '../redux/searchLocationsSlice';
import { fetchAirQuality } from '../redux/airQualitySlice';

const SearchResults = () => {
  const [addRequestStatus, setAddRequestStatus] = useState('idle');
  const dispatch = useDispatch();
  const searchLocations = useSelector(getSearchLocations);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  const queryAirQuality = (location) => {
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

  let content;

  if (status === 'loading') {
    content = (
      <p className=" text-gray-400 font-Roboto text-center w-full mx-auto">
        Loading Data...
      </p>
    );
  } else if (status === 'succeeded') {
    content = (
      <ul className="flex flex-col gap-3 h-full">
        <h2 className="text-2xl font-bold pb-6 text-center ">Search result</h2>
        {searchLocations.length === 0 ? (
          <p className=" pt-20 text-center ">
            <span className=" font-bold text-lg text-white bg-red-400 px-2 py-1 rounded-full">
              No result!
            </span>
            {' '}
            <br />
            Check you search details
          </p>
        ) : (
          searchLocations.map((location) => (
            <Link
              to="details"
              key={location.id}
              onClick={() => queryAirQuality(location)}
            >
              <li className=" rounded-xl bg-white h-20 px-10 py-2 flex flex-col justify-center items-start drop-shadow">
                <p className=" font-bold text-lg ">{location.name}</p>
                <p>
                  {location.state}
                  {location.state ? ' - ' : ''}
                  {location.country}
                </p>
              </li>
            </Link>
          ))
        )}
      </ul>
    );
  } else if (status === 'failed') {
    content = (
      <p className="text-red-400 font-Roboto w-full mx-auto text-center">{error}</p>
    );
  }

  return <div className="w-[87%] font-Roboto mx-auto pt-10 ">{content}</div>;
};

export default SearchResults;
