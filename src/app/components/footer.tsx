import React from 'react';
import { FiFacebook, FiTwitter, FiYoutube, FiInstagram, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-black p-2">
      {/* Social Media Icons */}
      <div className="flex justify-end space-x-4 mb-4">
        <FiFacebook size={24} className="text-white" />
        <FiTwitter size={24} className="text-white" />
        <FiYoutube size={24} className="text-white" />
        <FiInstagram size={24} className="text-white" />
      </div>

      <div className="grid grid-cols-1 px-12 space-x-12 md:grid-cols-3 gap-12 text-white">
        {/* Left Side */}
        <div className="md:col-span-2">
          <div className="flex flex-col md:flex-row md:space-x-12">
            {/* Find A Store Column */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Find A Store</h3>
              <ul className="space-y-1">
                <li className="text-sm">Become A Member</li>
                <li className="text-sm">Sign Up for Email</li>
                <li className="text-sm">Send Us Feedback</li>
                <li className="text-sm">Student Discounts</li>
              </ul>
            </div>

            {/* Get Help Column */}
            <div className="mb-6">
              <h3 className="text-lg font-bold mb-2">Get Help</h3>
              <ul className="space-y-1">
                <li className="text-sm">Order Status</li>
                <li className="text-sm">Delivery</li>
                <li className="text-sm">Returns</li>
                <li className="text-sm">Payment Options</li>
                <li className="text-sm">Contact Us On Nike.com Inquiries</li>
                <li className="text-sm">Contact Us On All Other Inquiries</li>
              </ul>
            </div>

            {/* About Nike Column */}
            <div>
              <h3 className="text-lg font-bold mb-2">About Nike</h3>
              <ul className="space-y-1">
                <li className="text-sm">News</li>
                <li className="text-sm">Careers</li>
                <li className="text-sm">Investors</li>
                <li className="text-sm">Sustainability</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-4 border-t border-gray-700 pt-4 text-white">
        <div className="flex items-center space-x-2">
          <span className="text-sm">India</span>
          <FiMapPin size={18} className="text-white" />
        </div>
        <span className="text-sm ml-2">© 2023 Nike, Inc. All Rights Reserved</span>
        <div className="flex space-x-2">
          <span className="text-sm">Guides</span>
          <span className="text-sm">Terms of Sale</span>
          <span className="text-sm">Terms of Use</span>
          <span className="text-sm">Nike Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
