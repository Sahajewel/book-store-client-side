// import React from 'react'
// import { Helmet } from 'react-helmet'
// import { Link, useLoaderData, useNavigate } from 'react-router-dom'

// export default function OldCategory() {
//     const books = useLoaderData()
//     console.log(books)
//     const navigate = useNavigate()

//   return (
   
//     <div className="container mx-auto p-4">
//               <Helmet>
//             <title>Categories</title>
//         </Helmet>
//             <h1 className="text-4xl font-bold mb-4 text-center py-10 text-white"> Books</h1>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//                 {books?.map((book,id) => (
//                     <div key={id} className="bg-white shadow-md rounded-lg p-4">
//                         <img src={book.image} alt={book.name} className="w-full h-40 object-cover rounded" />
//                         <h2 className="text-lg font-semibold mt-2">{book.name}</h2>
//                         <p className="text-gray-500">Authoe Name:{book.author_name}</p>
//                         <p className="text-sm text-gray-400">Category: {book.category}</p>
//                         <p className="text-sm text-gray-400">Available: {book.quantity}</p>
//                         <p className="text-sm text-gray-400">Available: {book.rating}</p>
//                         {/* <ReactStars
//                             count={5}
//                             value={book.rating}
//                             size={24}
//                             activeColor="#ffd700"
//                             edit={false}
//                         /> */}
//                        {/* <Link onClick={()=>{navigate(`/book-details/${book.id}`)}}>Details</Link> */}
//                        {/* <Link to={navigate(`/new-books/${book.id}`)}>Details</Link>
//                         */}
//                     </div>
//                 ))}
//             </div>
//         </div>
       

//   )
// }
