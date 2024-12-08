import Image from 'next/image';
import React from 'react';
import dontmiss from '../../../public/assets/dontmiss.png';

const Dontmiss = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/4 text-left mb-6">
        <h1 className="text-1xl font-bold mb-4 text-black">
        Don&apos;t Miss
        </h1>
      </div>
      <div className="relative w-3/4 h-auto">
        <Image src={dontmiss} alt="hero" layout="responsive" width={1200} height={800} objectFit="contain" />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-5xl font-bold mb-4">FLIGHT ESSENTIALS</h1>
        <p className="text-base mb-6">
        Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-2xl">Shop</button>
      </div>
    </div>
  );
}

export default Dontmiss;
