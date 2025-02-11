import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
// import ReactStars from 'react-rating-stars-component';
import { data, Link, useParams } from 'react-router-dom';


export default function AllBooks() {
  const [view, setView] = useState("card")
  const { category } = useParams();
  const [books, setBooks] = useState([]);
  const [filterBooks, setFilterBooks] = useState([])

  useEffect(() => {
   
          axios.get(`http://localhost:5000/book-categories`,{
            withCredentials:true
          })
          .then((data)=>{
            setBooks(data.data)
            setFilterBooks(data.data)
          })
  }, [category]);

const showAvailableBooks=()=>{
  const availableBooks= books.filter((book)=>book.quantity > 0)
  setFilterBooks(availableBooks)
}
  return (
   <div className="container mx-auto pt-20">
     <Helmet>
            <title>All-Books</title>
        </Helmet>
             <h1 className="text-4xl font-bold mb-4 text-center py-20 text-white">All Books</h1>
            <button className='btn text-lg' onClick={showAvailableBooks}>Show Available Books</button>
            <div className='my-10'>
            <select className='p-2' value={view} onChange={(e)=>setView(e.target.value)}>
              <option value="card"> Card View</option>
              <option value="table"> Table View</option>
             </select>
            </div>

             {
              view === "card"?(
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterBooks.map((book) => (
                    <div key={book._id} className="bg-gray-500 shadow-md rounded-lg p-4">
                        <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
                        <h2 className="text-lg font-semibold mt-2 text-white">{book.name}</h2>
                        <p className="text-gray-500">Author Name:{book.author_name}</p>
                        <p className="text-sm text-white">Category: {book.category}</p>
                        <p className="text-sm text-white">Quantity: {book.quantity}</p>
                        {/* <p className="text-sm text-gray-400">Quantity: {book.quantity}</p> */}
                        <p className="text-sm text-white">Rating: {book.rating}</p>
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
              ):(
                <table className="table-auto text-white w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-400">
                    <th className="border border-gray-300 p-2">Image</th>
                    <th className="border border-gray-300 p-2">Book Name</th>
                    <th className="border border-gray-300 p-2">Author Name</th>
                    <th className="border border-gray-300 p-2">Category</th>
                    <th className="border border-gray-300 p-2">Quantity</th>
                    <th className="border border-gray-300 p-2">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {filterBooks.map((book) => (
                    <tr key={book.id} className="hover:bg-gray-500">
                      <td className="border border-gray-300 p-2"><img className='w-40 h-40' src={book.image} alt="" /></td>
                      <td className="border border-gray-300 p-2">{book.name}</td>
                      <td className="border border-gray-300 p-2">{book.author_name}</td>
                      <td className="border border-gray-300 p-2">{book.category}</td>
                      <td className="border border-gray-300 p-2">{book.quantity}</td>
                      <td className="border border-gray-300 p-2">{book.rating}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              )
             }
           
         </div>
  )
}
