import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Arrow icons
import Image from 'next/image';
import gearupmen from '../../../public/assets/gearupmean1.png'; // Replace with actual paths
import gearupmen2 from '../../../public/assets/gearupmen2.png';
import gearupwomen1 from '../../../public/assets/gearupwomen1.png';
import gearupwomen2 from '../../../public/assets/gearupwomen2png.png'; // Add a fourth image

const GearUp = () => {
  const shoes = [
    { id: 1, name: 'Nike Air Max Pulse', price: '₹ 13,995', image: gearupmen },
    { id: 2, name: 'Nike Air Max Pulse', price: '₹ 13,995', image: gearupmen2 },
    { id: 3, name: 'Nike Air Max 97 SE', price: '₹ 16,995', image: gearupwomen1 },
    { id: 4, name: 'Nike Air Max Infinity', price: '₹ 14,995', image: gearupwomen2 },
  ];

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 px-6">
        {/* Gear Up Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">Gear Up</h1>

        {/* Buttons on the Right */}
        <div className="flex space-x-2">
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center space-x-2">
            <FiChevronLeft size={24} className="text-gray-700" />
            <span className="text-gray-700 text-sm">Shop Men</span>
          </button>
          <button className="p-2 bg-gray-200 rounded-full hover:bg-gray-300 flex items-center space-x-2">
            <span className="text-gray-700 text-sm">Shop Women</span>
            <FiChevronRight size={24} className="text-gray-700" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="relative flex flex-col p-4">
            {/* Image */}
            <div className="relative w-full h-80">
              <Image
                src={shoe.image}
                alt={shoe.name}
                layout="fill"
                objectFit="cover"
                className="rounded-md" 
                quality={100}
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

export default GearUp;
