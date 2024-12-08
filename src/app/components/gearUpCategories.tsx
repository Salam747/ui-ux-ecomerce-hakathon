import React from 'react';

const categories = {
  Icons: ['Air Force 1', 'Huarache', 'Air Max 90', 'Air Max 95'],
  Shoes: ['All Shoes', 'Custom Shoes', 'Jordan Shoes', 'Running Shoes'],
  Clothing: ['All Clothing', 'Modest Wear', 'Hoodies & Pullovers', 'Shirts & Tops'],
  Kids: ['Infant & Toddler Shoes', 'Kids\' Shoes', 'Kids\' Jordan Shoes', 'Kids\' Basketball Shoes'],
};

const GearUpCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-40 my-12">
      {Object.entries(categories).map(([category, items], index) => (
        <div key={index} className="flex flex-col">
          <h2 className="text-xl font-bold mb-4">{category}</h2>
          <ul className="space-y-2">
            {items.map((item, idx) => (
              <li key={idx} className="text-sm text-gray-700">{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default GearUpCategories;
