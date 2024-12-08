import React from "react";
import {
  SiNike,
  SiVisa,
  SiMastercard,
  SiDinersclub,
  SiDiscover,
  SiAmericanexpress,
  SiApple,
} from "react-icons/si";
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiSearch } from "react-icons/fi";

const GetHelp = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded shadow">
        {/* Header Section */}
        <header className="text-center mb-6">
          <div className="flex justify-center items-center mb-2">
            <SiNike size={40} className="text-black mr-2" />
            <h1 className="text-2xl font-bold">GET HELP</h1>
          </div>
        </header>

        {/* Search Bar Section */}
        <section className="text-center mb-6">
          <h2 className="text-xl font-semibold mb-4">What can we help you with?</h2>
          <div className="inline-block border border-gray-300 rounded p-2">
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-sm text-gray-700 w-64"
            />
            <FiSearch size={20} className="text-gray-500 ml-2 inline-block" />
          </div>
        </section>

        {/* Main Content Section */}
        <div className="grid md:grid-cols-2 gap-8 border-t pt-6">
          {/* Left Section: Payment Options and FAQs */}
          <section>
            <h3 className="text-lg font-bold mb-4">WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?</h3>
            <p className="mb-4 text-gray-700">
              We accept the following payment options for a seamless checkout experience:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              {[
                { label: "Visa", icon: <SiVisa className="text-blue-600" /> },
                { label: "Mastercard", icon: <SiMastercard className="text-red-600" /> },
                { label: "Diners Club", icon: <SiDinersclub className="text-gray-600" /> },
                { label: "Discover", icon: <SiDiscover className="text-orange-600" /> },
                { label: "American Express", icon: <SiAmericanexpress className="text-blue-600" /> },
                { label: "Visa Electron", icon: <SiVisa className="text-blue-600" /> },
                { label: "Maestro", icon: <SiMastercard className="text-red-600" /> },
                { label: "Apple Pay", icon: <SiApple className="text-black" /> },
              ].map((method, idx) => (
                <li key={idx} className="flex items-center">
                  {method.icon}
                  <span className="ml-2 text-gray-700">{method.label}</span>
                </li>
              ))}
            </ul>

            <p className="mt-4 text-gray-700">
              Nike Members can store multiple cards in their profile for faster checkout. If you’re
              not already a Member, <a href="#" className="text-blue-600 underline">join us</a> today.
            </p>

            <div className="mt-4 flex gap-4">
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800"
              >
                JOIN US
              </a>
              <a
                href="#"
                className="bg-black text-white px-4 py-2 rounded font-bold hover:bg-gray-800"
              >
                SHOP NIKE
              </a>
            </div>

            {/* FAQs */}
            <div className="mt-8">
              <h3 className="text-lg font-bold">FAQs</h3>
              {[
                {
                  question: "Does my card need international purchases enabled?",
                  answer:
                    "Yes, we recommend asking your bank to enable international purchases on your card. Some banks may charge a small transaction fee.",
                },
                {
                  question: "Can I pay for my order with multiple methods?",
                  answer:
                    "No, payment for Nike orders cannot be split between multiple payment methods.",
                },
                {
                  question: "What payment method is accepted for SNKRS orders?",
                  answer: "Any accepted credit card can be used to pay for SNKRS orders.",
                },
                {
                  question: "Why don’t I see Apple Pay as an option?",
                  answer:
                    "Ensure you’re using a compatible Apple device with the latest OS and Safari browser. Add a supported card to your Wallet.",
                },
              ].map((faq, idx) => (
                <div key={idx} className="mt-4">
                  <h4 className="font-bold text-gray-800">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Right Section: Contact Us */}
          <section className="max-w-md">
            <h3 className="text-lg font-bold mb-4">CONTACT US</h3>
            {[
              {
                icon: <FiPhone size={24} className="text-gray-500" />,
                title: "000 800 919 0566",
                description: "Products & Orders: 24 hours, 7 days a week",
              },
              {
                icon: <FiMessageCircle size={24} className="text-gray-500" />,
                title: "Live Chat",
                description: "24 hours a day, 7 days a week",
              },
              {
                icon: <FiMail size={24} className="text-gray-500" />,
                title: "Email Support",
                description: "We’ll reply within five business days",
              },
              {
                icon: <FiMapPin size={24} className="text-gray-500" />,
                title: "Store Locator",
                description: "Find Nike retail stores near you",
              },
            ].map((contact, idx) => (
              <div key={idx} className="flex items-center gap-4 mb-6">
                {contact.icon}
                <div>
                  <p className="font-semibold text-gray-800">{contact.title}</p>
                  <p className="text-gray-700">{contact.description}</p>
                </div>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default GetHelp;
