import Image from 'next/image';
import React from 'react';
import hero from '../../../public/assets/heroshowes.png';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold mb-4">
          Hello Nike App
        </h1>
        <p className="text-sm">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>
      <div className="w-3/4 h-auto">
        <Image src={hero} alt="hero" layout="responsive" width={1200} height={800} objectFit="contain" />
      </div>
      <div className="text-center mt-6">
        <p className="text-xs mb-2">First Look</p>
        <h1 className="text-5xl font-bold mb-4">Nike Air Max Pulse</h1>
        <p className="text-base mb-6">
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br /> —designed to push you past your limits and help you go to the max.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-black text-white py-2 px-4 rounded-2xl">Notify Me</button>
          <button className="bg-black text-white py-2 px-4 rounded-2xl">Shop Air Max</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
