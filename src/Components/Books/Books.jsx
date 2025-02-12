import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import ReactStars from 'react-rating-stars-component';
import { Link, useParams } from 'react-router-dom';

const Books = () => {
    const { category } = useParams();
    console.log(category)
    const [books, setBooks] = useState([]);
    const [sortOrder, setSortOrder] = useState("asc");
    useEffect(() => {
        axios.get(`https://assignment-11-server-two-brown.vercel.app/book-categories?category=${category}`, {
            withCredentials: true
        })
            .then((response) => setBooks(response.data))
    }, [category])
const handleSort = ()=>{
    const sortBooks = [...books].sort((a,b)=>{
        return sortOrder === "asc" ? a.rating - b.rating : b.rating - a.rating
    })
    setBooks(sortBooks);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc")
}
    return (
        <div className="container mx-auto pt-24">
            <Helmet>
                <title>Home | categories-book</title>
            </Helmet>
            <h1 className="text-4xl font-bold mb-4 text-center py-10 text-white">Categories Books</h1>
            <button className='bg-gray-600 mb-5 text-white p-4' onClick={handleSort}>Sort  rating by {sortOrder === "asc" ? "asc" : "desc"}</button>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {books.map((book) => (
                    <div key={book._id} className="bg-gray-400 shadow-md rounded-lg p-4">
                        <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg text-white font-semibold mt-2">Book Name: {book.name}</h2>
                        <p className="text-white">Author Name:{book.author_name}</p>
                        <p className="text-sm text-white">Category: {book.category}</p>
                        <p className="text-sm text-white">Available: {book.quantity}</p>
                        <p className="text-sm text-white">Available: {book.rating}</p>
                        {/* <ReactStars
                            count={5}
                            value={book.rating}
                            size={24}
                            activeColor="#ffd700"
                            edit={false}
                        /> */}
                        <Link to={`/book-details/${book._id}`}><button className="mt-4 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500">
                            Details
                        </button></Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Books;
