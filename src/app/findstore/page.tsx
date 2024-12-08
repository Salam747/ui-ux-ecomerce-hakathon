import Image from 'next/image';
import React from 'react';
import findstore1 from '../../../public/assets/findstorelocation.png';

const FindStore = () => {
  const stores = [
    {
      name: 'Nike NYC - House of Innovation 000',
      address: '650 5th Ave.\nNew York, NY, 10019, US',
      status: 'Closed • Opens at 11:00 am'
    },
    {
      name: 'Nike By Upper East Side',
      address: '1131 3rd Ave.\nNew York, NY, 10065, US',
      status: 'Closed • Opens at 11:00 am'
    },
    {
      name: 'Nike By Flatiron',
      address: '156 Fifth Ave.\nNew York, NY, 10010, US',
      status: 'Closed • Opens at 11:00 am'
    }
  ];

  return (
    <div className="flex flex-col md:flex-row">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Find a Nike Store</h1>
        <div className="mb-4 flex flex-col md:flex-row md:space-x-2">
          <input
            type="text"
            placeholder="Search Location"
            className="flex-1 p-2 mb-2 md:mb-0 border border-gray-300 rounded"
          />
          <button className="p-2 border border-gray-300 rounded">Filter</button>
        </div>
        <p className="mb-4">15 Stores Near You</p>
        <ul className="space-y-4">
          {stores.map((store, index) => (
            <li key={index} className="p-4 bg-white border rounded">
              <h3 className="font-bold">{store.name}</h3>
              <p className="text-gray-700 whitespace-pre-line">{store.address}</p>
              <p className="text-red-600">{store.status}</p>
              {index < stores.length - 1 && <hr className="my-4" />}
            </li>
          ))}
        </ul>
        <a href="#" className="block text-center mt-4 text-black font-bold">
          View All Stores
        </a>
      </div>
      {/* Map */}
      <div className="w-full md:w-3/4 bg-gray-100 flex items-center p-16 justify-center">
        <Image src={findstore1} alt='location' layout='responsive' />
      </div>
    </div>
  );
};

export default FindStore;
