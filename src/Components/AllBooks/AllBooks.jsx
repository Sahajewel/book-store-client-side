import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import ReactStars from 'react-rating-stars-component';
import { Link, useParams } from 'react-router-dom';


export default function AllBooks() {
  const { category } = useParams();
  const [books, setBooks] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/book-categories?category=${category}`)
          .then((response) => response.json())
          .then((data) => setBooks(data))
          .catch((error) => console.error('Error fetching books:', error));
  }, [category]);

  return (
   <div className="container mx-auto p-4">
     <Helmet>
            <title>All-Books</title>
        </Helmet>
             <h1 className="text-4xl font-bold mb-4 text-center py-10 text-white">All Books</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                 {books.map((book) => (
                     <div key={book._id} className="bg-white shadow-md rounded-lg p-4">
                         <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
                         <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
                         <p className="text-gray-500">Author Name:{book.author_name}</p>
                         <p className="text-sm text-gray-400">Category: {book.category}</p>
                         {/* <p className="text-sm text-gray-400">Quantity: {book.quantity}</p> */}
                         <p className="text-sm text-gray-400">Rating: {book.rating}</p>
                         {/* <ReactStars
                             count={5}
                             value={book.rating}
                             size={24}
                             activeColor="#ffd700"
                             edit={false}
                         /> */}
                         <Link to={`/update/${book._id}`}><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                             Update
                         </button></Link>
                     </div>
                 ))}
             </div>
         </div>
  )
}
