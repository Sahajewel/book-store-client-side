import axios from 'axios';
import React, { useState, useEffect } from 'react';
import NewCategoryCard from './NewCategoryCard';
import { useNavigate } from 'react-router-dom';

const NewCategory = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
const navigate = useNavigate()
  // Fetch categories from the server
  useEffect(() => {
   axios.get("http://localhost:5000/book-categories")
   .then((res)=>setCategories(res.data))
        // setCategories(data);
   
  }, []);

  const handleCardClick = (categoryId) => {
    const category = categories.find((item) => item.id === categoryId);
    setSelectedCategory(category);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="card bg-blue-100 p-4 rounded-lg shadow-md hover:bg-blue-200 cursor-pointer"
            onClick={() => handleCardClick(navigate(`/category/${category.id}`))}
          >
            <h2 className="text-lg font-bold">{category.title}</h2>
          </div>
        ))}
      </div>

      {/* <div className="mt-6">
      
              {selectedCategory?.content.map((book, index) => <NewCategoryCard key={index} book={book}></NewCategoryCard>)}
           
      </div> */}
    </div>
  );
};

export default NewCategory;
