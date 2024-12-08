import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Arrow icons
import Image from 'next/image';
import shoeImage1 from '../../../public/assets/sho1.png'; // Replace with actual paths
import shoeImage2 from '../../../public/assets/heroshoew2.png';
import shoeImage3 from '../../../public/assets/heroshoew3.png';

const BestOfAir = () => {
  const shoes = [
    { id: 1, name: 'Nike Air Max Pulse', price: '₹ 13,995', image: shoeImage1 },
    { id: 2, name: 'Nike Air Max Pulse', price: '₹ 13,995', image: shoeImage2 },
    { id: 3, name: 'Nike Air Max 97 SE', price: '₹ 16,995', image: shoeImage3 },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-6">
        <h2 className="text-2xl font-bold">Best of Air Max</h2>
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiChevronLeft size={24} className="text-gray-700" />
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
            <FiChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="flex flex-col p-4">
            {/* Image */}
            <div className="relative w-full h-96"> {/* Increased image height */}
              <Image
                src={shoe.image}
                alt={shoe.name}
                layout="fill"
                objectFit="cover" // Makes the image cover the entire area
                className="rounded-none" // Removes rounded corners
              />
            </div>

            {/* Text */}
            <div className="flex justify-between items-end mt-4">
              <div className="text-left">
                <h3 className="text-base font-bold">{shoe.name}</h3>
                <p className="text-sm text-gray-600 mt-1">Women&apos;s Shoes</p> {/* Escaped apostrophe */}
              </div>
              <p className="text-base font-semibold">{shoe.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestOfAir;
