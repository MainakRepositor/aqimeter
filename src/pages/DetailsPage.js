import React from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { HiSearchCircle } from 'react-icons/hi';
import { getAirQuality, getError, getStatus } from '../redux/airQualitySlice';
import DetailsSummary from '../components/DetailsSummary';
import Forcast from '../components/Forcast';
import ApComponents from '../components/ApComponents';

const DetailsPage = () => {
  const airQuality = useSelector(getAirQuality);
  const status = useSelector(getStatus);
  const error = useSelector(getError);

  return (
    <div className="relative max-w-[440px] w-[100vw] min-h-[100vh] mx-auto bg-gray-100">
      <div className="flex justify-between items-center px-4 pt-3">
        <Link to="/">
          <div className="font-bold text-black text-2xl border border-solid border-gray-300 rounded-full p-1 w-8 h-8 flex flex-col justify-center items-center">
            <IoIosClose />
          </div>
        </Link>
        <Link to="/search">
          <HiSearchCircle className="text-4xl text-gray-300 " />
        </Link>
      </div>
      <div className="px-5 py-7">
        <DetailsSummary airQuality={airQuality} status={status} error={error} summary />
        <Forcast airQuality={airQuality} />
        <ApComponents airQuality={airQuality} />
      </div>
    </div>
  );
};

export default DetailsPage;
