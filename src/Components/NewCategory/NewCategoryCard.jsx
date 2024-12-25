import React from 'react'
import { Link } from 'react-router-dom'

export default function NewCategoryCard({book}) {
  return (
    <div>
        <div key={book._id} className="bg-white shadow-md rounded-lg p-4">
                        <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
                        <p className="text-gray-500">Authoe Name:{book.author_name}</p>
                        <p className="text-sm text-gray-400">Category: {book.category}</p>
                        <p className="text-sm text-gray-400">Available: {book.quantity}</p>
                        <p className="text-sm text-gray-400">Available: {book.rating}</p>
                        {/* <ReactStars
                            count={5}
                            value={book.rating}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        /> */}
                        {/* <Link to={`/book-details/${book._id}`}><button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Details
                        </button></Link> */}
                    </div>
    </div>
  )
}
