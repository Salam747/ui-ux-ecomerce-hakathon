import Image from 'next/image';
import React from 'react';
import featured from '../../../public/assets/featured.png';

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-3/4 text-left mb-6">
        <h1 className="text-1xl font-bold mb-4 text-black">
          Featured
        </h1>
      </div>
      <div className="relative w-3/4 h-auto">
        <Image src={featured} alt="hero" layout="responsive" width={1200} height={800} objectFit="contain" />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-5xl font-bold mb-4">STEP INTO WHAT FEELS GOOD</h1>
        <p className="text-base mb-6">
          Cause everyone should know the feeling of running in that perfect pair. 
        </p>
        <button className="bg-black text-white py-2 px-4 rounded-2xl">Find Your Shoe</button>
      </div>
    </div>
  );
}

export default Featured;
