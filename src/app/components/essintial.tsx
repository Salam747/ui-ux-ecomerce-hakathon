import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Arrow icons
import Image from 'next/image';
import essinitail1 from '../../../public/assets/essinitail1.png'; // Replace with actual paths
import essinitail2 from '../../../public/assets/essinitail2.png';
import essinitail3 from '../../../public/assets/essinitail3.png'; // Removed the fourth image

const Essinial = () => {
  const shoes = [
    { id: 1, name: 'Nike Air Max Pulse', image: essinitail1 },
    { id: 2, name: 'Nike Air Max Pulse', image: essinitail2 },
    { id: 3, name: 'Nike Air Max 97 SE', image: essinitail3 },
  ];

  return (
    <div className="p-6 mt-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 px-6">
        {/* Gear Up Title */}
        <h1 className="text-3xl font-bold mt-2 text-center">The Essentials</h1>

        {/* Buttons on the Right */}
       
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                quality={100} // High-quality image
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Essinial;
