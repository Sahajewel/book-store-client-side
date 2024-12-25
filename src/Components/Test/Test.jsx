import React, { useState } from 'react';
import data from "./data.json"

const CategoryCards = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCardClick = (categoryId) => {
    const category = data.find((item) => item.id === categoryId);
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {data.map((category) => (
          <div
            key={category.id}
            className="card bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 cursor-pointer"
            onClick={() => handleCardClick(category.id)}
          >
            <h2 className="text-lg font-bold">{category.title}</h2>
          </div>
        ))}
      </div>

      <div className="mt-6">
        {selectedCategory ? (
          <div className="content bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{selectedCategory.title}</h2>
            <p>{selectedCategory.content}</p>
          </div>
        ) : (
          <p className="text-gray-500">Select a category to view content.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryCards;
