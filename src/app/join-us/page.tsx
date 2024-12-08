// pages/index.js
import Head from 'next/head';
import { SiNike } from 'react-icons/si';

export default function Home() {
  return (
    <>
      <Head>
        <title>Become a Nike Member</title>
        <meta name="description" content="Join Nike and get exclusive access to products, inspiration, and community." />
        <link rel="icon" href="/nike-logo.png" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <div className="flex justify-center mb-4">
            <SiNike size={64} className="text-black" /> {/* Nike brand icon */}
          </div>
          <h1 className="text-2xl font-semibold text-center mb-2">BECOME A NIKE MEMBER</h1>
          <p className="text-center text-gray-600 mb-6">
            Create your Nike Member profile and get first access to the very best of Nike products, inspiration, and community.
          </p>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First Name"
                required
                className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
              <input
                type="text"
                placeholder="Last Name"
                required
                className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>
            <input
              type="date"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            />
            <select
              required
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="Pakistan">Pakistan</option>
              <option value="United States">United States</option>
              <option value="Other">Other</option>
            </select>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="gender" value="Male" required className="mr-2" />
                Male
              </label>
              <label className="flex items-center">
                <input type="radio" name="gender" value="Female" required className="mr-2" />
                Female
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm text-gray-600">
                Sign up for emails to get updates from Nike on products, offers, and your Member benefits
              </span>
            </div>
            <p className="text-sm text-gray-500">
              By creating an account, you agree to Nike&apos;s{' '}
              <a href="#" className="text-black underline">Privacy Policy</a> and{' '}
              <a href="#" className="text-black underline">Terms of Use</a>.
            </p>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors"
            >
              JOIN US
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Already a Member? <a href="#" className="text-black underline">Sign In</a>.
          </p>
        </div>
      </div>
    </>
  );
}
