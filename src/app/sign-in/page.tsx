"use client";
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { SiNike } from 'react-icons/si';  // Importing Nike icon from react-icons

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded shadow">
        <div className="flex justify-center mb-6">
          <SiNike size={80} className="text-black" />  {/* Nike brand icon */}
        </div>
        <h1 className="text-2xl font-bold mb-6 text-center">YOUR ACCOUNT FOR EVERYTHING <br /> NIKE</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
          <input
            id="email"
            type="email"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            id="password"
            type="password"
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-4 flex items-center">
          <input
            id="keep-signed-in"
            type="checkbox"
            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
            checked={keepSignedIn}
            onChange={() => setKeepSignedIn(!keepSignedIn)}
          />
          <label htmlFor="keep-signed-in" className="ml-2 block text-sm text-gray-900">
            Keep me signed in
          </label>
        </div>
        <div className="mb-6 text-right">
          <a href="#" className="text-sm text-gray-600 hover:underline">Forgotten your password?</a>
        </div>
        <p className="mb-6 text-sm text-gray-600">By logging in, you agree to Nike&apos;s <a href="#" className="underline">Privacy Policy</a> and <a href="#" className="underline">Terms of Use</a>.</p> {/* Escaped apostrophe */}
        <button
          onClick={handleSignIn}
          className="w-full bg-black text-white p-2 rounded"
        >
          SIGN IN
        </button>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-600">Not a Member? </span>
          <a href="#" className="text-sm text-black font-bold underline">Join Us.</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
